import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import img1 from "../img/img1.jpg";

export const Hero: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolution = () => {
    const el = document.getElementById('problema');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center border-b border-border"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.82) 100%), url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-surface pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-28 pb-22 md:pt-36 md:pb-34 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-6 flex flex-col items-start text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-foreground text-xs font-medium mb-6">
              <span>Gestão Patrimonial de Marcenaria</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-foreground leading-[1.12] mb-6">
              Proteção contínua para móveis planejados.
            </h1>

            <p className="text-lg text-foreground-muted font-normal leading-relaxed mb-8 max-w-xl">
              Assinatura corporativa de vistorias preventivas, calibração mecânica e reparos prioritários para residências e marcenarias de todos os tipos.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-10">
              <button
                onClick={scrollToPlans}
                className="px-6 py-3.5 rounded-lg bg-brand hover:bg-brand-hover text-white font-medium text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand/20"
              >
                <span>Conhecer planos de assinatura</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToSolution}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm text-foreground font-medium text-sm border border-white/20 transition-all duration-150 flex items-center justify-center cursor-pointer"
              >
                <span>Entender a metodologia</span>
              </button>
            </div>

            <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-foreground-muted font-medium">Atendimento em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-foreground-muted font-medium">Técnicos homologados</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-foreground-muted font-medium">Cobertura multimarcas</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
