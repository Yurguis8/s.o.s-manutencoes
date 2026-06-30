import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

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
    <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium mb-6">
              <span>Gestão Patrimonial de Marcenaria</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-900 leading-[1.12] mb-6">
              Proteção contínua para móveis planejados.
            </h1>

            <p className="text-lg text-gray-600 font-normal leading-relaxed mb-8 max-w-xl">
              Assinatura corporativa de vistorias preventivas, calibração mecânica e reparos prioritários para residências e marcenarias de todos os tipos.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-10">
              <button
                onClick={scrollToPlans}
                className="px-6 py-3.5 rounded-lg bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 text-white font-medium text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conhecer planos de assinatura</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={scrollToSolution}
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm border border-gray-200 transition-all duration-150 flex items-center justify-center cursor-pointer"
              >
                <span>Entender a metodologia</span>
              </button>
            </div>

            {/* Corporate Proof points */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-gray-600 font-medium">Atendimento em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-gray-600 font-medium">Técnicos homologados</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-gray-600 font-medium">Cobertura multimarcas</span>
              </div>
            </div>

          </div>

          {/* Right Column Photography */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
                alt="Ambiente arquitetônico moderno com marcenaria planejada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
