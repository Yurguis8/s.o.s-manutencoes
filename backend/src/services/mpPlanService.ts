import { MercadoPagoConfig, PreApprovalPlan } from 'mercadopago';
import { getAppUrl, getWebhookUrl } from '../config/appUrls.js';
import {
  BillingCycle,
  PlanId,
  getPlanKey,
  getPlanPricing,
} from '../config/plans.js';
import { dbService } from './dbService.js';

function buildPlanReason(planName: string, billingCycle: BillingCycle): string {
  const cycleLabel = billingCycle === 'annual' ? 'Anual' : 'Semestral';
  return `SOS - ${planName} - ${cycleLabel}`.substring(0, 40);
}

async function createMpPlan(
  client: MercadoPagoConfig,
  planId: PlanId,
  billingCycle: BillingCycle
): Promise<string> {
  const { planConfig, monthlyPrice, repetitions } = getPlanPricing(planId, billingCycle);
  const appUrl = getAppUrl();
  const notificationUrl = getWebhookUrl();
  const plan = new PreApprovalPlan(client);

  const response = await plan.create({
    body: {
      reason: buildPlanReason(planConfig.name, billingCycle),
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: monthlyPrice,
        currency_id: 'BRL',
        repetitions,
      },
      back_url: `${appUrl}/`,
      notification_url: notificationUrl,
    } as any,
  });

  if (!response.id) {
    throw new Error(`Mercado Pago não retornou ID ao criar plano ${planId}/${billingCycle}.`);
  }

  console.log(
    `[MP Plan] Plano criado: ${getPlanKey(planId, billingCycle)} → ${response.id} (R$${monthlyPrice}/mês x ${repetitions})`
  );

  return response.id;
}

export const mpPlanService = {
  async getOrCreatePlanId(
    client: MercadoPagoConfig,
    planId: PlanId,
    billingCycle: BillingCycle
  ): Promise<string> {
    const planKey = getPlanKey(planId, billingCycle);
    const cached = await dbService.getMpPlanId(planKey);
    if (cached) return cached;

    const mpPlanId = await createMpPlan(client, planId, billingCycle);
    await dbService.saveMpPlan(planKey, mpPlanId);
    return mpPlanId;
  },

  async ensureAllPlans(client: MercadoPagoConfig): Promise<void> {
    const planIds: PlanId[] = ['essential', 'casa', 'total'];
    const cycles: BillingCycle[] = ['semiannual', 'annual'];

    for (const planId of planIds) {
      for (const billingCycle of cycles) {
        await this.getOrCreatePlanId(client, planId, billingCycle);
      }
    }

    console.log('[MP Plan] Todos os planos reutilizáveis verificados.');
  },
};
