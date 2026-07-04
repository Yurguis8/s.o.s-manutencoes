import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { PLANS } from '../data/landingData';
import { Plan, BillingCycle } from '../types';
import { Check, ArrowRight } from 'lucide-react';
import { Reveal, RevealStagger, RevealStaggerItem } from './Reveal';
import { APPLE_EASE_OUT } from './Reveal';
import { MercadoPagoTrustBadge } from './MercadoPagoTrustBadge';

interface PlansSectionProps {
  onSubscribe: (plan: Plan, billingCycle: BillingCycle) => void;
}

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

interface PlanCardProps {
  plan: Plan;
  billingCycle: BillingCycle;
  onSubscribe: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, billingCycle, onSubscribe }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.55, margin: '0px' });
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const shouldProject = isMobile && isInView && !reduced;

  const isPopular = plan.id === 'casa';
  const monthlyEquiv = billingCycle === 'semiannual' ? plan.priceSemiannualMonthly : plan.priceAnnualMonthly;
  const totalCycle = billingCycle === 'semiannual' ? plan.totalSemiannual : plan.totalAnnual;
  const cycleName = billingCycle === 'semiannual' ? '6 meses' : '12 meses';

  return (
    <motion.div
      ref={ref}
      className="overflow-visible pt-5 pb-3 px-2"
      initial={false}
      animate={
        reduced
          ? {}
          : {
              y: shouldProject ? -4 : 0,
              scale: shouldProject ? 1.02 : 1,
            }
      }
      transition={{ duration: 0.45, ease: APPLE_EASE_OUT }}
      style={{ transformOrigin: 'center center' }}
    >
      <div
        className={`rounded-xl p-8 flex flex-col justify-between bg-surface-card border transition-shadow duration-300 h-full relative ${
          shouldProject ? 'shadow-[0_12px_40px_rgba(0,0,0,0.14)]' : 'shadow-sm'
        } ${
          isPopular
            ? 'border-brand ring-1 ring-brand'
            : 'border-border hover:border-brand/40'
        }`}
      >
          {isPopular && (
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded z-10">
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
                  {monthlyEquiv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-xs text-foreground-subtle">/mês</span>
              </div>
              <div className="text-xs text-foreground-muted mt-2 leading-relaxed">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-brand-soft text-foreground font-medium">
                  {formatCurrency(totalCycle)} a cada {cycleName}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-8 ">
              <div className="text-[11px] font-semibold text-foreground uppercase tracking-wider mb-4">
                O que está incluso:
              </div>
              {plan.benefits.map((benefit, i) => (
                <div >
                <div key={i} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border mt-auto">
            <button
              onClick={() => onSubscribe(plan)}
              className={`w-full py-2.5 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                isPopular
                  ? 'bg-brand hover:bg-brand-hover text-white'
                  : 'bg-surface-muted hover:bg-brand-soft text-foreground border border-border hover:border-brand/40'
              }`}
            >
              <span>Contratar {plan.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="mt-2.5 flex justify-center">
              <MercadoPagoTrustBadge variant="compact" />
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export const PlansSection: React.FC<PlansSectionProps> = ({ onSubscribe }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const handleSubscribe = (plan: Plan) => {
    onSubscribe(plan, billingCycle);
  };

  return (
    <section id="planos" className="py-24 bg-surface border-b border-border overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 overflow-visible">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Planos de assinatura
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Escolha o plano ideal para sua casa
          </h2>
          <p className="text-base text-foreground-muted">
            Contratos semestrais ou anuais com visitas presenciais inclusas e cobrança simples — sem surpresas.
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
                billingCycle === 'annual' ? 'bg-gray-100 text-accent' : 'bg-accent/10 text-accent'
              }`}>
                10% off
              </span>
            </button>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch overflow-visible">
          {PLANS.map((plan) => (
            <RevealStaggerItem key={plan.id} className="overflow-visible">
              <PlanCard
                plan={plan}
                billingCycle={billingCycle}
                onSubscribe={handleSubscribe}
              />
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-10 flex justify-center">
          <MercadoPagoTrustBadge className="max-w-xl" />
        </Reveal>
      </div>
    </section>
  );
};
