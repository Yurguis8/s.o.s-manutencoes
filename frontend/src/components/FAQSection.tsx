import React, { useState } from 'react';
import { FAQS } from '../data/landingData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Esclarecimentos institucionais
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Tudo o que você precisa saber sobre o funcionamento técnico dos contratos semestrais e anuais.
            </p>

            <div className="p-6 rounded-xl bg-[#F6F8FA] border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Precisa de um plano customizado?</h4>
              <p className="text-xs text-gray-600 mb-4">Para coberturas em múltiplas residências ou edifícios corporativos, fale diretamente com nossa equipe técnica.</p>
              <a 
                href="https://wa.me/5511998823456?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20planos%20corporativos%20customizados."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8E0E1A] hover:underline"
              >
                Falar com consultor corporativo →
              </a>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={item.question}
                  className="rounded-lg border border-gray-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-gray-50/50"
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      {item.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-gray-900' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
