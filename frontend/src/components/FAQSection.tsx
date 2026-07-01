import React, { useState } from 'react';
import { FAQS } from '../data/landingData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
              Esclarecimentos institucionais
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-base text-foreground-muted mb-8">
              Tudo o que você precisa saber sobre o funcionamento técnico dos contratos semestrais e anuais.
            </p>

            <div className="p-6 rounded-xl bg-surface-muted border border-border">
              <h4 className="text-sm font-semibold text-foreground mb-1">Precisa de um plano customizado?</h4>
              <p className="text-xs text-foreground-muted mb-4">Para coberturas em múltiplas residências ou edifícios corporativos, fale diretamente com nossa equipe técnica.</p>
              <a
                href="https://wa.me/5511998823456?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20planos%20corporativos%20customizados."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand hover:text-brand-muted transition-colors"
              >
                Falar com consultor corporativo →
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="rounded-lg border border-border bg-surface-card overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-surface-muted/50"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {item.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-foreground-subtle shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-foreground' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-foreground-muted leading-relaxed border-t border-border">
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
