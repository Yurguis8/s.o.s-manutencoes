import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/landingData';
import { ChevronDown } from 'lucide-react';
import { Reveal, RevealStagger, RevealStaggerItem, APPLE_EASE_OUT } from './Reveal';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5" direction="left">
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
                className="text-xs font-semibold text-brand-muted hover:text-brand transition-colors duration-300"
              >
                Falar com consultor →
              </a>
            </div>
          </Reveal>

          <RevealStagger className="lg:col-span-7 space-y-4">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <RevealStaggerItem key={item.question}>
                  <div className="rounded-lg border border-border bg-surface-card overflow-hidden transition-colors duration-300">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-surface-muted/50 transition-colors duration-300"
                    >
                      <span className="text-sm font-semibold text-foreground">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: APPLE_EASE_OUT }}
                        className="shrink-0"
                      >
                        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-foreground' : 'text-foreground-subtle'}`} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: APPLE_EASE_OUT }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-foreground-muted leading-relaxed border-t border-border">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </RevealStaggerItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
};
