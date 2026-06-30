import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#F6F8FA] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-14 shadow-xs">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8E0E1A] text-white text-xs font-medium mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Metodologia S.O.S Manutenções</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Assinatura técnica de conservação patrimonial
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-10">
              Substituímos o modelo reativo de manutenções de emergência por um protocolo sistemático corporativo. Através de ciclos semestrais ou anuais, garantimos vistorias presenciais programadas, calibração mecânica de dobradiças e canais prioritários com custo operacional significativamente reduzido.
            </p>

            {/* Clean Corporate Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Previsibilidade orçamentária</h4>
                  <p className="text-xs text-gray-600 mt-1">Faturamento programado semestral ou anual sem taxas surpresas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Prontuário técnico digital</h4>
                  <p className="text-xs text-gray-600 mt-1">Histórico fotográfico de cada ambiente atualizado no portal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">SLA prioritário de 24 horas</h4>
                  <p className="text-xs text-gray-600 mt-1">Atendimento técnico preferencial para solicitações corretivas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Peças e componentes originais</h4>
                  <p className="text-xs text-gray-600 mt-1">Homologação direta com os principais fabricantes de ferragens.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={scrollToPlans}
                className="px-6 py-3 rounded-lg bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 text-white font-medium text-sm transition-all duration-150 cursor-pointer flex items-center gap-2"
              >
                <span>Visualizar planos disponíveis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
