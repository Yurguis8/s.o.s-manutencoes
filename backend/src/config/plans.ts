export const PLANS_MAP = {
  essential: {
    name: 'Plano Essencial',
    semiannualMonthly: 29.9,
    annualMonthly: 25.42,
    semiannualTotal: 179.4,
    annualTotal: 305.04,
  },
  casa: {
    name: 'Plano Casa',
    semiannualMonthly: 79.9,
    annualMonthly: 67.92,
    semiannualTotal: 479.4,
    annualTotal: 815.04,
  },
  total: {
    name: 'Plano Total',
    semiannualMonthly: 129.9,
    annualMonthly: 110.42,
    semiannualTotal: 779.4,
    annualTotal: 1325.04,
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
