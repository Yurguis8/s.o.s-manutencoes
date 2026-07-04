import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import { DatabaseSync } from 'node:sqlite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbJsonPath = path.resolve(__dirname, '../../data/db.json');
const sqliteDbPath = path.resolve(__dirname, '../../data/db.sqlite');

export interface SubscriptionRecord {
  id: string;
  planId: 'essential' | 'casa' | 'total';
  billingCycle: 'semiannual' | 'annual';
  payer: {
    name: string;
    email: string;
    mpEmail?: string;
    phone: string;
    address: string;
  };
  amount: number;
  status: string;
  preapprovalId?: string;
  initPoint?: string;
  acceptedTerms?: boolean;
  termsVersion?: string;
  clientIp?: string;
  userAgent?: string;
  termsAcceptedAt?: string;
  createdAt: string;
  updatedAt: string;
}

let pgPool: pg.Pool | null = null;
let sqliteDb: DatabaseSync | null = null;
let isPostgres = false;

function mapRowToRecord(row: any): SubscriptionRecord {
  return {
    id: row.id,
    planId: row.plan_id,
    billingCycle: row.billing_cycle,
    payer: {
      name: row.payer_name || '',
      email: row.payer_email || '',
      mpEmail: row.payer_mp_email || undefined,
      phone: row.payer_phone || '',
      address: row.payer_address || ''
    },
    amount: Number(row.amount),
    status: row.status,
    preapprovalId: row.preapproval_id || undefined,
    initPoint: row.init_point || undefined,
    acceptedTerms: row.accepted_terms === 1 || row.accepted_terms === true || row.accepted_terms === 'true',
    termsVersion: row.terms_version || undefined,
    clientIp: row.client_ip || undefined,
    userAgent: row.user_agent || undefined,
    termsAcceptedAt: row.terms_accepted_at || undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

async function executeQuery(sql: string, params: any[] = []): Promise<any[]> {
  if (isPostgres && pgPool) {
    const result = await pgPool.query(sql, params);
    return result.rows;
  } else if (sqliteDb) {
    const sqliteSql = sql.replace(/\$\d+/g, '?');
    const stmt = sqliteDb.prepare(sqliteSql);
    return stmt.all(...params);
  }
  return [];
}

async function executeCommand(sql: string, params: any[] = []): Promise<void> {
  if (isPostgres && pgPool) {
    await pgPool.query(sql, params);
  } else if (sqliteDb) {
    const sqliteSql = sql.replace(/\$\d+/g, '?');
    const stmt = sqliteDb.prepare(sqliteSql);
    stmt.run(...params);
  }
}

async function addColumnIfMissing(columnSql: string, label: string): Promise<void> {
  try {
    await executeCommand(columnSql);
    console.log(`[Database] Coluna ${label} adicionada com sucesso.`);
  } catch {
    // Coluna já existe
  }
}

export const dbService = {
  async initializeDatabase(): Promise<void> {
    const dbUrl = process.env.DATABASE_URL;
    if (dbUrl) {
      console.log('[Database] Inicializando em modo PostgreSQL...');
      pgPool = new pg.Pool({
        connectionString: dbUrl,
        ssl: dbUrl.includes('sslmode=require') || dbUrl.includes('supabase') ? { rejectUnauthorized: false } : undefined
      });
      isPostgres = true;

      const client = await pgPool.connect();
      try {
        await client.query('SELECT 1');
        console.log('[Database] Conexão PostgreSQL estabelecida.');
      } finally {
        client.release();
      }
    } else {
      console.log('[Database] Inicializando em modo SQLite local...');
      const dir = path.dirname(sqliteDbPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      sqliteDb = new DatabaseSync(sqliteDbPath);
      isPostgres = false;
    }

    const ddl = `
      CREATE TABLE IF NOT EXISTS subscriptions (
        id VARCHAR(255) PRIMARY KEY,
        plan_id VARCHAR(50) NOT NULL,
        billing_cycle VARCHAR(50) NOT NULL,
        payer_name VARCHAR(255),
        payer_email VARCHAR(255) NOT NULL,
        payer_phone VARCHAR(50),
        payer_address TEXT,
        amount NUMERIC(10, 2) NOT NULL,
        status VARCHAR(50) NOT NULL,
        preapproval_id VARCHAR(255) UNIQUE,
        init_point TEXT,
        accepted_terms BOOLEAN NOT NULL DEFAULT TRUE,
        terms_version VARCHAR(255),
        client_ip VARCHAR(45),
        user_agent TEXT,
        terms_accepted_at VARCHAR(255),
        created_at VARCHAR(255) NOT NULL,
        updated_at VARCHAR(255) NOT NULL
      );
    `;

    const mpPlansDdl = `
      CREATE TABLE IF NOT EXISTS mp_preapproval_plans (
        plan_key VARCHAR(100) PRIMARY KEY,
        mp_plan_id VARCHAR(255) NOT NULL UNIQUE,
        created_at VARCHAR(255) NOT NULL
      );
    `;

    await executeCommand(ddl);
    await executeCommand(mpPlansDdl);
    console.log('[Database] Tabelas de assinaturas e planos MP inicializadas.');

    await addColumnIfMissing(
      'ALTER TABLE subscriptions ADD COLUMN accepted_terms BOOLEAN NOT NULL DEFAULT TRUE;',
      'accepted_terms'
    );
    await addColumnIfMissing(
      'ALTER TABLE subscriptions ADD COLUMN terms_version VARCHAR(255);',
      'terms_version'
    );
    await addColumnIfMissing(
      'ALTER TABLE subscriptions ADD COLUMN client_ip VARCHAR(45);',
      'client_ip'
    );
    await addColumnIfMissing(
      'ALTER TABLE subscriptions ADD COLUMN user_agent TEXT;',
      'user_agent'
    );
    await addColumnIfMissing(
      'ALTER TABLE subscriptions ADD COLUMN terms_accepted_at VARCHAR(255);',
      'terms_accepted_at'
    );
    await addColumnIfMissing(
      'ALTER TABLE subscriptions ADD COLUMN payer_mp_email VARCHAR(255);',
      'payer_mp_email'
    );

    await this.migrateFromJsonIfNeeded();
  },

  async migrateFromJsonIfNeeded(): Promise<void> {
    try {
      if (fs.existsSync(dbJsonPath)) {
        const currentCount = await executeQuery('SELECT COUNT(*) as count FROM subscriptions');
        const count = Number(currentCount[0]?.count || currentCount[0]?.['count'] || 0);

        if (count === 0) {
          console.log('[Database] Migrando dados do db.json para o banco de dados SQL...');
          const data = fs.readFileSync(dbJsonPath, 'utf-8');
          const records: SubscriptionRecord[] = JSON.parse(data || '[]');

          for (const record of records) {
            await this.save(record);
          }
          console.log(`[Database] Migração concluída: ${records.length} registros importados.`);
        }

        const backupPath = `${dbJsonPath}.bak`;
        fs.renameSync(dbJsonPath, backupPath);
        console.log(`[Database] Arquivo db.json renomeado para db.json.bak`);
      }
    } catch (error) {
      console.error('[Database] Erro ao migrar do db.json:', error);
    }
  },

  async getAll(): Promise<SubscriptionRecord[]> {
    const rows = await executeQuery('SELECT * FROM subscriptions ORDER BY created_at DESC');
    return rows.map(mapRowToRecord);
  },

  async getById(id: string): Promise<SubscriptionRecord | undefined> {
    const rows = await executeQuery('SELECT * FROM subscriptions WHERE id = $1', [id]);
    return rows.length > 0 ? mapRowToRecord(rows[0]) : undefined;
  },

  async getByPreapprovalId(preapprovalId: string): Promise<SubscriptionRecord | undefined> {
    const rows = await executeQuery('SELECT * FROM subscriptions WHERE preapproval_id = $1', [preapprovalId]);
    return rows.length > 0 ? mapRowToRecord(rows[0]) : undefined;
  },

  async getMpPlanId(planKey: string): Promise<string | undefined> {
    const rows = await executeQuery(
      'SELECT mp_plan_id FROM mp_preapproval_plans WHERE plan_key = $1',
      [planKey]
    );
    return rows.length > 0 ? rows[0].mp_plan_id : undefined;
  },

  async saveMpPlan(planKey: string, mpPlanId: string): Promise<void> {
    const now = new Date().toISOString();
    const sql = `
      INSERT INTO mp_preapproval_plans (plan_key, mp_plan_id, created_at)
      VALUES ($1, $2, $3)
      ON CONFLICT (plan_key) DO UPDATE SET
        mp_plan_id = $2,
        created_at = $3
    `;
    await executeCommand(sql, [planKey, mpPlanId, now]);
  },

  async save(record: SubscriptionRecord): Promise<void> {
    const sql = `
      INSERT INTO subscriptions (
        id, plan_id, billing_cycle,
        payer_name, payer_email, payer_mp_email, payer_phone, payer_address,
        amount, status, preapproval_id, init_point, accepted_terms,
        terms_version, client_ip, user_agent, terms_accepted_at,
        created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
      ON CONFLICT (id) DO UPDATE SET
        plan_id = $2,
        billing_cycle = $3,
        payer_name = $4,
        payer_email = $5,
        payer_mp_email = $6,
        payer_phone = $7,
        payer_address = $8,
        amount = $9,
        status = $10,
        preapproval_id = $11,
        init_point = $12,
        updated_at = $19
    `;
    const acceptedTermsValue = record.acceptedTerms !== undefined ? record.acceptedTerms : true;
    const params = [
      record.id,
      record.planId,
      record.billingCycle,
      record.payer.name,
      record.payer.email,
      record.payer.mpEmail || null,
      record.payer.phone,
      record.payer.address,
      record.amount,
      record.status,
      record.preapprovalId || null,
      record.initPoint || null,
      isPostgres ? acceptedTermsValue : (acceptedTermsValue ? 1 : 0),
      record.termsVersion || null,
      record.clientIp || null,
      record.userAgent || null,
      record.termsAcceptedAt || null,
      record.createdAt,
      record.updatedAt
    ];
    await executeCommand(sql, params);
  }
};
