export const PLANS_MAP = {
  essential: {
    name: 'Plano Essencial',
    semiannualMonthly: 39.90,
    annualMonthly: 35.90,
    semiannualTotal: 239.40,
    annualTotal: 430.80,
  },
  casa: {
    name: 'Plano Casa',
    semiannualMonthly: 59.90,
    annualMonthly: 53.90,
    semiannualTotal: 359.40,
    annualTotal: 646.80,
  },
  total: {
    name: 'Plano Total',
    semiannualMonthly: 99.90,
    annualMonthly: 89.90,
    semiannualTotal: 599.40,
    annualTotal: 1078.80,
  },
} as const;

export type PlanId = keyof typeof PLANS_MAP;
export type BillingCycle = 'semiannual' | 'annual';

export function getPlanKey(planId: PlanId, billingCycle: BillingCycle): string {
  const { monthlyPrice } = getPlanPricing(planId, billingCycle);
  return `${planId}-${billingCycle}-${monthlyPrice}`;
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
