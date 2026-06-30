import { Request, Response } from 'express';
import { MercadoPagoConfig, PreApprovalPlan, PreApproval } from 'mercadopago';
import { dbService, SubscriptionRecord } from '../services/dbService.js';
import { getClientIp, getUserAgent } from '../utils/requestMeta.js';
import { getAppUrl, getWebhookUrl } from '../config/appUrls.js';
import {
  parseWebhookPayload,
  processWebhookNotification,
  validateWebhookSignature,
  isInvalidWebhookSignature,
} from '../services/webhookService.js';
import crypto from 'crypto';
import dotenv from 'dotenv';

const DEFAULT_TERMS_VERSION = 'Termos v1.0 | Privacidade v1.0 | Consentimento v1.0 | Adesão v1.0';

dotenv.config();

// Replicando a tabela de preços do landingData.ts
// transaction_amount é SEMPRE o valor mensal a ser cobrado — o MP exibirá esse valor no checkout.
// A frequência é sempre 1 mês. O ciclo semestral/anual define quantos meses o plano vai durar (repetitions).
const PLANS_MAP = {
  essential: {
    name: 'Plano Essencial',
    // Valor mensal equivalente a cada ciclo
    semiannualMonthly: 49,   // R$294 / 6 = R$49/mês
    annualMonthly: 42,       // R$504 / 12 = R$42/mês
    semiannualTotal: 294,
    annualTotal: 504
  },
  casa: {
    name: 'Plano Casa',
    semiannualMonthly: 79,   // R$474 / 6 = R$79/mês
    annualMonthly: 68,       // R$816 / 12 = R$68/mês
    semiannualTotal: 474,
    annualTotal: 816
  },
  total: {
    name: 'Plano Total',
    semiannualMonthly: 119,  // R$714 / 6 = R$119/mês
    annualMonthly: 99,       // R$1188 / 12 = R$99/mês
    semiannualTotal: 714,
    annualTotal: 1188
  }
};

type PlanId = keyof typeof PLANS_MAP;

// Inicializa a configuração do Mercado Pago com o Token de Acesso de Teste
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || ''
});

export const paymentController = {
  /**
   * Cria um plano de assinatura e retorna o link de checkout correspondente
   */
  async createSubscription(req: Request, res: Response): Promise<void> {
    try {
      const { planId, billingCycle, payer, acceptedTerms, termsVersion} = req.body;

      // Validações básicas
      if (!planId || !billingCycle || !payer || !payer.email) {
        res.status(400).json({ error: 'Parâmetros planId, billingCycle e payer.email são obrigatórios.' });
        return;
      }

      const planConfig = PLANS_MAP[planId as PlanId];
      if (!planConfig) {
        res.status(400).json({ error: `Plano '${planId}' não encontrado.` });
        return;
      }

      if (billingCycle !== 'semiannual' && billingCycle !== 'annual') {
        res.status(400).json({ error: 'Ciclo de faturamento deve ser semiannual ou annual.' });
        return;
      }

      // O valor a ser exibido e cobrado mensalmente
      const monthlyPrice = billingCycle === 'annual'
        ? planConfig.annualMonthly
        : planConfig.semiannualMonthly;

      // Total do ciclo, salvo localmente para referência
      const totalPrice = billingCycle === 'annual'
        ? planConfig.annualTotal
        : planConfig.semiannualTotal;

      // Número de parcelas mensais do ciclo (6 meses = 6 cobranças; 12 meses = 12 cobranças)
      const repetitions = billingCycle === 'annual' ? 12 : 6;

      const id = crypto.randomUUID();
      const now = new Date().toISOString();
      const clientIp = getClientIp(req);
      const userAgent = getUserAgent(req);

      const appUrl = getAppUrl();
      const notificationUrl = getWebhookUrl();

      // Cria o PreapprovalPlan no Mercado Pago.
      // frequency: 1 + frequency_type: 'months' = cobra R$XX toda vez que completar 1 mês.
      // repetitions limita o total de cobranças ao ciclo contratado.
// Cria o PreapprovalPlan no Mercado Pago.
const plan = new PreApprovalPlan(client);

// Monta a string do motivo e força o limite máximo de 40 caracteres
      const rawReason = `SOS - ${planConfig.name} - ${billingCycle === 'annual' ? 'Anual' : 'Semestral'}`;
      const truncatedReason = rawReason.substring(0, 40);

      const response = await plan.create({
          body: {
              // Agora está 100% protegido contra o erro 400 do Mercado Pago
              reason: truncatedReason,
              auto_recurring: {
                  frequency: 1,
                  frequency_type: 'months',
                  transaction_amount: monthlyPrice,
                  currency_id: 'BRL',
                  repetitions
              },
              // Ao concluir, o Mercado Pago redirecionará o usuário com ?status=approved&preapproval_id=xxxx
              back_url: `${appUrl}/`,
              external_reference: id,
              notification_url: notificationUrl,
          } as any
      });

      // Salva no banco de dados local associando o preapprovalPlanId
      const newSubscription: SubscriptionRecord = {
        id,
        planId: planId as PlanId,
        billingCycle: billingCycle as 'semiannual' | 'annual',
        payer: {
          name: payer.name || '',
          email: payer.email,
          phone: payer.phone || '',
          address: payer.address || ''
        },
        amount: totalPrice, // Salva o total do ciclo no banco local
        status: 'pending',
        preapprovalId: response.id,
        initPoint: (response as any).sandbox_init_point || (response as any).init_point,
        acceptedTerms: acceptedTerms === true,
        termsVersion: termsVersion || DEFAULT_TERMS_VERSION,
        clientIp,
        userAgent,
        termsAcceptedAt: now,
        createdAt: now,
        updatedAt: now
      };

      await dbService.save(newSubscription);

      console.log(`[Mercado Pago] Plano de Assinatura criado. ID Local: ${newSubscription.id}, Plan ID MP: ${response.id}, Valor mensal: R$${monthlyPrice} x ${repetitions} meses`);

      res.status(201).json({
        id: newSubscription.id,
        preapprovalId: response.id,
        checkoutUrl: newSubscription.initPoint,
        status: newSubscription.status
      });

    } catch (error: any) {
      console.error('Erro ao criar assinatura no Mercado Pago:', error);
      res.status(500).json({
        error: 'Erro interno ao criar assinatura',
        details: error.message || error
      });
    }
  },

  /**
   * Recebe notificações do Mercado Pago (POST JSON ou GET ?topic=&id=)
   */
  async handleWebhook(req: Request, res: Response): Promise<void> {
    try {
      try {
        validateWebhookSignature(req);
      } catch (error) {
        if (isInvalidWebhookSignature(error)) {
          console.warn('[Webhook] Assinatura inválida — notificação rejeitada.');
          res.status(401).send('Invalid signature');
          return;
        }
        throw error;
      }

      const payload = parseWebhookPayload(req);
      await processWebhookNotification(client, payload);
      res.status(200).send('OK');
    } catch (error: any) {
      console.error('Erro ao processar notificação de webhook:', error);
      res.status(200).send('Webhook recebido com erro de processamento tratado.');
    }
  },

  /**
   * Consulta o status de uma assinatura no banco local
   */
  async getSubscriptionStatus(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      let record = await dbService.getById(id) || await dbService.getByPreapprovalId(id);

      if (!record) {
        res.status(404).json({ error: 'Assinatura não encontrada.' });
        return;
      }

      // Se a assinatura ainda está pendente localmente, podemos verificar a API do Mercado Pago
      // para saber se ela já foi ativa/autorizada
      if (record.status === 'pending' && record.preapprovalId) {
        try {
          // Nota: Se record.preapprovalId for o ID do plano, o Mercado Pago retorna que o plano está active.
          // Se for o ID da assinatura final (2c9380...), retorna o status da assinatura em si.
          const preapproval = new PreApproval(client);
          const details = await preapproval.get({ id: record.preapprovalId }) as any;
          if (details && details.status && details.status !== record.status) {
            record.status = details.status;
            await dbService.save(record);
            console.log(`[Status Sync] Assinatura ${record.id} atualizada dinamicamente para: ${record.status}`);
          }
        } catch (err) {
          // Se falhar (por exemplo, porque preapprovalId ainda é o ID do plano e não uma assinatura individual)
          // apenas logamos silenciosamente
          console.log('[Status Sync] Sincronização direta ignorada ou não disponível ainda.');
        }
      }

      res.json({
        id: record.id,
        preapprovalId: record.preapprovalId,
        planId: record.planId,
        billingCycle: record.billingCycle,
        payer: record.payer,
        amount: record.amount,
        status: record.status,
        acceptedTerms: record.acceptedTerms,
        termsVersion: record.termsVersion,
        termsAcceptedAt: record.termsAcceptedAt,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt
      });

    } catch (error: any) {
      console.error('Erro ao buscar status da assinatura:', error);
      res.status(500).json({ error: 'Erro interno ao consultar status.' });
    }
  }
};
