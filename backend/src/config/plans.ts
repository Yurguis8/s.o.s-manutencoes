export const PLANS_MAP = {
  essential: {
    name: 'Plano Essencial',
    semiannualMonthly: 10,
    annualMonthly: 10,
    semiannualTotal: 60,
    annualTotal: 120,
  },
  casa: {
    name: 'Plano Casa',
    semiannualMonthly: 10,
    annualMonthly: 10,
    semiannualTotal: 60,
    annualTotal: 120,
  },
  total: {
    name: 'Plano Total',
    semiannualMonthly: 10,
    annualMonthly: 10,
    semiannualTotal: 60,
    annualTotal: 120,
  },
} as const;

export type PlanId = keyof typeof PLANS_MAP;
export type BillingCycle = 'semiannual' | 'annual';

export function getPlanKey(planId: PlanId, billingCycle: BillingCycle): string {
  return `${planId}-${billingCycle}`;
}

export function getPlanPricing(planId: PlanId, billingCycle: BillingCycle) {
  const planConfig = PLANS_MAP[planId];
  const monthlyPrice = billingCycle === 'annual'
    ? planConfig.annualMonthly
    : planConfig.semiannualMonthly;
  const totalPrice = billingCycle === 'annual'
    ? planConfig.annualTotal
    : planConfig.semiannualTotal;
  const repetitions = billingCycle === 'annual' ? 12 : 6;

  return { planConfig, monthlyPrice, totalPrice, repetitions };
}
