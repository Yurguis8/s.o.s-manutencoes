import React from 'react';
import { COMPANY_INFO } from '../data/landingData';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-hover opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Garantia contínua para o patrimônio da sua residência.
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-10 max-w-xl">
            Elimine a deterioração dos seus móveis planejados com vistorias preventivas presenciais programadas e calibração milimétrica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={scrollToPlans}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white hover:bg-white/90 text-brand font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Contratar assinatura anual ou semestral</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white font-medium text-sm border border-white/30 transition-all duration-150 flex items-center justify-center cursor-pointer"
            >
              Falar com consultor técnico
            </a>
          </div>

          <div className="mt-10 text-xs text-white/60 font-mono">
            Atendimento prioritário corporativo · Sem taxas ocultas · Homologado multimarcas
          </div>

        </div>
      </div>
    </section>
  );
};
