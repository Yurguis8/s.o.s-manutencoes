import { Request } from 'express';
import { MercadoPagoConfig, PreApproval } from 'mercadopago';
import { WebhookSignatureValidator, InvalidWebhookSignatureError } from 'mercadopago';
import { dbService, SubscriptionRecord } from '../services/dbService.js';

const SUBSCRIPTION_TOPICS = new Set([
  'subscription_preapproval',
  'subscription_preapproval_plan',
  'subscription_authorized_payment',
]);

export interface WebhookPayload {
  type?: string;
  topic?: string;
  action?: string;
  data?: { id?: string };
}

function normalizeHeader(value: string | string[] | undefined | null): string | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}

function normalizeQueryParam(value: unknown): string | null {
  if (typeof value === 'string') return value;
  if (Array.isArray(value) && typeof value[0] === 'string') return value[0];
  return null;
}

export function validateWebhookSignature(req: Request): void {
  const secret = process.env.MERCADO_PAGO_WEBHOOK_SECRET;
  if (!secret) return;

  WebhookSignatureValidator.validate({
    xSignature: req.headers['x-signature'],
    xRequestId: req.headers['x-request-id'],
    dataId: normalizeQueryParam(req.query['data.id'] ?? req.query.data_id),
    secret,
    toleranceSeconds: 300,
  });
}

export function parseWebhookPayload(req: Request): WebhookPayload {
  const queryTopic = typeof req.query.topic === 'string' ? req.query.topic : undefined;
  const queryId = typeof req.query.id === 'string' ? req.query.id : undefined;

  if (queryTopic && queryId) {
    return { type: queryTopic, topic: queryTopic, data: { id: queryId } };
  }

  return (req.body || {}) as WebhookPayload;
}

export function getWebhookTopic(payload: WebhookPayload): string | undefined {
  return payload.type || payload.topic;
}

async function syncSubscriptionRecord(
  _client: MercadoPagoConfig,
  record: SubscriptionRecord,
  mpId: string,
  details: any
): Promise<void> {
  record.status = details.status || record.status;
  record.preapprovalId = details.id || record.preapprovalId;
  if (details.payer_email) {
    record.payer.mpEmail = details.payer_email;
  }
  record.updatedAt = new Date().toISOString();
  await dbService.save(record);
}

export async function processWebhookNotification(
  client: MercadoPagoConfig,
  payload: WebhookPayload
): Promise<void> {
  const topic = getWebhookTopic(payload);
  const resourceId = payload.data?.id;

  if (!topic || !resourceId) {
    console.log('[Webhook] Notificação ignorada: tópico ou ID ausente.', payload);
    return;
  }

  if (!SUBSCRIPTION_TOPICS.has(topic)) {
    console.log(`[Webhook] Tópico não tratado: ${topic}`);
    return;
  }

  console.log(`[Webhook] Processando ${topic} — ID: ${resourceId}`);

  if (topic === 'subscription_preapproval_plan') {
    const record = await dbService.getByPreapprovalId(resourceId);
    if (record) {
      record.status = record.status === 'pending' ? 'plan_active' : record.status;
      record.updatedAt = new Date().toISOString();
      await dbService.save(record);
      console.log(`[Webhook] Plano vinculado ao registro ${record.id}`);
    }
    return;
  }

  const preapproval = new PreApproval(client);
  const details = await preapproval.get({ id: resourceId }) as any;

  if (!details) {
    console.log(`[Webhook] Detalhes não encontrados para ${resourceId}`);
    return;
  }

  const planId = details.preapproval_plan_id || details.preapprovalPlanId;
  const extRef = details.external_reference || details.externalReference;

  let record = await dbService.getByPreapprovalId(resourceId);
  if (!record && planId) record = await dbService.getByPreapprovalId(planId);
  if (!record && extRef) record = await dbService.getById(extRef);

  if (!record) {
    console.log(`[Webhook] Registro local não encontrado. MP ID: ${resourceId}, Plan: ${planId}, Ref: ${extRef}`);
    return;
  }

  await syncSubscriptionRecord(client, record, resourceId, details);
  console.log(`[Webhook] Registro ${record.id} atualizado — status: ${record.status}`);
}

export function isInvalidWebhookSignature(error: unknown): boolean {
  return error instanceof InvalidWebhookSignatureError;
}
