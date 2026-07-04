import { Request, Response } from 'express';
import { MercadoPagoConfig, PreApproval } from 'mercadopago';
import { dbService, SubscriptionRecord } from '../services/dbService.js';
import { getClientIp, getUserAgent } from '../utils/requestMeta.js';
import { getAppUrl } from '../config/appUrls.js';
import {
  parseWebhookPayload,
  processWebhookNotification,
  validateWebhookSignature,
  isInvalidWebhookSignature,
} from '../services/webhookService.js';
import { mpPlanService } from '../services/mpPlanService.js';
import { getMpCheckoutUrl } from '../utils/mpCheckout.js';
import {
  BillingCycle,
  PlanId,
  PLANS_MAP,
  getPlanPricing,
} from '../config/plans.js';
import crypto from 'crypto';
import dotenv from 'dotenv';

const DEFAULT_TERMS_VERSION = 'Termos v1.0 | Privacidade v1.0 | Consentimento v1.0 | Adesão v1.0';

dotenv.config();

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
});

function buildSubscriptionReason(planName: string, billingCycle: BillingCycle): string {
  const cycleLabel = billingCycle === 'annual' ? 'Anual' : 'Semestral';
  return `SOS - ${planName} - ${cycleLabel}`.substring(0, 40);
}

export const paymentController = {
  /**
   * Reutiliza um plano MP existente, cria a assinatura com dados do pagador
   * e retorna o link de checkout individual.
   */
  async createSubscription(req: Request, res: Response): Promise<void> {
    try {
      const { planId, billingCycle, payer, acceptedTerms, termsVersion, deviceSessionId } = req.body;

      if (!planId || !billingCycle || !payer || !payer.name || !payer.email || !payer.phone) {
        res.status(400).json({ error: 'Parâmetros planId, billingCycle, payer.name, payer.email e payer.phone são obrigatórios.' });
        return;
      }

      if (!PLANS_MAP[planId as PlanId]) {
        res.status(400).json({ error: `Plano '${planId}' não encontrado.` });
        return;
      }

      if (billingCycle !== 'semiannual' && billingCycle !== 'annual') {
        res.status(400).json({ error: 'Ciclo de faturamento deve ser semiannual ou annual.' });
        return;
      }

      const typedPlanId = planId as PlanId;
      const typedBillingCycle = billingCycle as BillingCycle;
      const { planConfig, totalPrice } = getPlanPricing(typedPlanId, typedBillingCycle);

      const id = crypto.randomUUID();
      const now = new Date().toISOString();
      const clientIp = getClientIp(req);
      const userAgent = getUserAgent(req);
      const appUrl = getAppUrl();

      const mpPlanId = await mpPlanService.getOrCreatePlanId(client, typedPlanId, typedBillingCycle);

      const preapproval = new PreApproval(client);
      const response = await preapproval.create({
        body: {
          preapproval_plan_id: mpPlanId,
          external_reference: id,
          reason: buildSubscriptionReason(planConfig.name, typedBillingCycle),
          back_url: `${appUrl}/`,
          status: 'pending',
        },
        requestOptions: deviceSessionId ? { meliSessionId: deviceSessionId } : undefined,
      });

      const checkoutUrl = getMpCheckoutUrl(response as any);
      if (!response.id || !checkoutUrl) {
        throw new Error('Mercado Pago não retornou assinatura ou link de checkout.');
      }

      const newSubscription: SubscriptionRecord = {
        id,
        planId: typedPlanId,
        billingCycle: typedBillingCycle,
        payer: {
          name: payer.name || '',
          email: payer.email.trim(),
          phone: payer.phone || '',
          address: payer.address || '',
        },
        amount: totalPrice,
        status: 'pending',
        preapprovalId: response.id,
        initPoint: checkoutUrl,
        acceptedTerms: acceptedTerms === true,
        termsVersion: termsVersion || DEFAULT_TERMS_VERSION,
        clientIp,
        userAgent,
        termsAcceptedAt: now,
        createdAt: now,
        updatedAt: now,
      };

      await dbService.save(newSubscription);

      console.log(
        `[Mercado Pago] Assinatura criada. Local: ${newSubscription.id}, MP: ${response.id}, Plano: ${mpPlanId}, Pagador: ${payer.name}`
      );

      res.status(201).json({
        id: newSubscription.id,
        preapprovalId: response.id,
        checkoutUrl,
        status: newSubscription.status,
      });
    } catch (error: any) {
      console.error('Erro ao criar assinatura no Mercado Pago:', error);
      if (error.cause) console.log('Causa detalhada do Mercado Pago:', JSON.stringify(error.cause, null, 2));
      res.status(500).json({
        error: 'Erro interno ao criar assinatura',
        details: error.message || error,
      });
    }
  },

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

  async getSubscriptionStatus(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      let record = await dbService.getById(id) || await dbService.getByPreapprovalId(id);

      if (!record) {
        res.status(404).json({ error: 'Assinatura não encontrada.' });
        return;
      }

      if (record.status === 'pending' && record.preapprovalId) {
        try {
          const preapproval = new PreApproval(client);
          const details = await preapproval.get({ id: record.preapprovalId }) as any;
          let updated = false;
          if (details?.status && details.status !== record.status) {
            record.status = details.status;
            updated = true;
          }
          if (details?.payer_email && details.payer_email !== record.payer.mpEmail) {
            record.payer.mpEmail = details.payer_email;
            updated = true;
          }
          if (updated) {
            await dbService.save(record);
            console.log(`[Status Sync] Assinatura ${record.id} atualizada para: ${record.status}`);
          }
        } catch {
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
        updatedAt: record.updatedAt,
      });
    } catch (error: any) {
      console.error('Erro ao buscar status da assinatura:', error);
      res.status(500).json({ error: 'Erro interno ao consultar status.' });
    }
  },
};

export async function initializeMpPlans(): Promise<void> {
  if (!process.env.MERCADO_PAGO_ACCESS_TOKEN) {
    console.warn('[MP Plan] MERCADO_PAGO_ACCESS_TOKEN ausente — planos não serão pré-criados.');
    return;
  }

  await mpPlanService.ensureAllPlans(client);
}
