import React, { useState } from 'react';
import { PLANS } from '../data/landingData';
import { Plan, BillingCycle } from '../types';
import { Check, ArrowRight } from 'lucide-react';
import { Reveal, RevealStagger, RevealStaggerItem } from './Reveal';

interface PlansSectionProps {
  onSubscribe: (plan: Plan, billingCycle: BillingCycle) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSubscribe }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const handleSubscribe = (plan: Plan) => {
    onSubscribe(plan, billingCycle);
  };

  return (
    <section id="planos" className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Planos de assinatura
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Modalidades de cobertura patrimonial
          </h2>
          <p className="text-base text-foreground-muted">
            Contratos semestrais ou anuais com faturamento programado e vistorias presenciais inclusas.
          </p>

          <div className="mt-8 inline-flex items-center bg-surface-muted p-1 rounded-lg border border-border">
            <button
              onClick={() => setBillingCycle('semiannual')}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer focus:outline-none ${
                billingCycle === 'semiannual'
                  ? 'bg-surface-card text-foreground shadow-sm'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              Plano Semestral
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              <span>Plano Anual</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                billingCycle === 'annual' ? 'bg-black/30 text-accent' : 'bg-accent/10 text-accent'
              }`}>
                15% off
              </span>
            </button>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const isPopular = plan.id === 'casa';
            const monthlyEquiv = billingCycle === 'semiannual' ? plan.priceSemiannualMonthly : plan.priceAnnualMonthly;
            const totalCycle = billingCycle === 'semiannual' ? plan.totalSemiannual : plan.totalAnnual;
            const cycleName = billingCycle === 'semiannual' ? '6 meses' : '12 meses';

            return (
              <RevealStaggerItem key={plan.id}>
                <div
                  className={`rounded-xl p-8 flex flex-col justify-between bg-surface-card border transition-all duration-300 h-full ${
                    isPopular
                      ? 'border-brand ring-1 ring-brand shadow-lg shadow-brand/10 relative'
                      : 'border-border hover:border-border/80'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                      Recomendado
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-xs text-foreground-muted mb-6 min-h-[36px] leading-relaxed">
                      {plan.tagline}
                    </p>

                    <div className="mb-8 pb-6 border-b border-border">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-semibold text-foreground-subtle">R$</span>
                        <span className="text-4xl font-bold tracking-tight text-foreground">
                          {monthlyEquiv}
                        </span>
                        <span className="text-xs text-foreground-subtle">/mês</span>
                      </div>
                      <div className="text-xs text-foreground-subtle mt-1.5 font-mono">
                        Faturamento total: R$ {totalCycle} por ciclo de {cycleName}
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] font-semibold text-foreground uppercase tracking-wider mb-4">
                        Escopo de serviços:
                      </div>
                      {plan.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                          <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border mt-auto">
                    <button
                      onClick={() => handleSubscribe(plan)}
                      className={`w-full py-2.5 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isPopular
                          ? 'bg-brand hover:bg-brand-hover text-white shadow-md shadow-brand/20'
                          : 'bg-surface-muted hover:bg-surface-subtle text-foreground border border-border'
                      }`}
                    >
                      <span>Contratar {plan.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="mt-2.5 text-center text-[10px] text-foreground-subtle">
                      Garantia técnica e cancelamento corporativo simplificado
                    </div>
                  </div>
                </div>
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
