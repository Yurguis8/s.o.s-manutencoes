import React, { useState } from 'react';
import { PLANS } from '../data/landingData';
import { Plan, BillingCycle } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface PlansSectionProps {
  onSubscribe: (plan: Plan, billingCycle: BillingCycle) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSubscribe }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const handleSubscribe = (plan: Plan) => {
    onSubscribe(plan, billingCycle);
  };

  return (
    <section id="planos" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Planos de assinatura
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Modalidades de cobertura patrimonial
          </h2>
          <p className="text-base text-gray-600">
            Contratos semestrais ou anuais com faturamento programado e vistorias presenciais inclusas.
          </p>

          {/* Clean Corporate Toggle */}
          <div className="mt-8 inline-flex items-center bg-gray-100 p-1 rounded-lg border border-gray-200">
            <button
              onClick={() => setBillingCycle('semiannual')}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-150 cursor-pointer focus:outline-none ${
                billingCycle === 'semiannual'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Plano Semestral
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-150 cursor-pointer focus:outline-none flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#8E0E1A] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Plano Anual</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                billingCycle === 'annual' ? 'bg-black/30 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
              }`}>
                15% off
              </span>
            </button>
          </div>
        </div>

        {/* Corporate Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const isPopular = plan.id === 'casa';
            const monthlyEquiv = billingCycle === 'semiannual' ? plan.priceSemiannualMonthly : plan.priceAnnualMonthly;
            const totalCycle = billingCycle === 'semiannual' ? plan.totalSemiannual : plan.totalAnnual;
            const cycleName = billingCycle === 'semiannual' ? '6 meses' : '12 meses';

            return (
              <div
                key={plan.id}
                className={`rounded-xl p-8 flex flex-col justify-between bg-white border transition-all duration-150 ${
                  isPopular
                    ? 'border-[#8E0E1A] ring-1 ring-[#8E0E1A] shadow-sm relative'
                    : 'border-gray-200 shadow-xs'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#8E0E1A] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    Recomendado
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 mb-6 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Clean Pricing */}
                  <div className="mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-gray-500">R$</span>
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {monthlyEquiv}
                      </span>
                      <span className="text-xs text-gray-500">/mês</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1.5 font-mono">
                      Faturamento total: R$ {totalCycle} por ciclo de {cycleName}
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Escopo de serviços:
                    </div>
                    {plan.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <button
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full py-2.5 rounded-lg font-medium text-xs transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${
                      isPopular
                        ? 'bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <span>Contratar {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <div className="mt-2.5 text-center text-[10px] text-gray-400">
                    Garantia técnica e cancelamento corporativo simplificado
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
