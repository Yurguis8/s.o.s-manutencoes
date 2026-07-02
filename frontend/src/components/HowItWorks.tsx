import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FileCheck, CreditCard, Calendar, Shield, type LucideIcon } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { Reveal } from './Reveal';
import { APPLE_EASE_OUT } from './Reveal';

const ICON_MAP: Record<string, LucideIcon> = {
  FileCheck,
  CreditCard,
  Calendar,
  Shield,
};

export const HowItWorks: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <section id="como-funciona" className="py-24 bg-surface-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
              Simples e rápido
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Como funciona a contratação
            </h2>
            <p className="mt-4 text-base text-foreground-muted leading-relaxed">
              Da escolha do plano à primeira visita técnica — tudo online, sem burocracia.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border hidden sm:block" />
              <motion.div
                className="absolute left-[19px] top-3 w-px bg-brand origin-top hidden sm:block"
                initial={reduced ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.2, ease: APPLE_EASE_OUT }}
                style={{ height: 'calc(100% - 24px)' }}
              />

              <div className="space-y-0">
                {HOW_IT_WORKS_STEPS.map((step, index) => {
                  const Icon = ICON_MAP[step.iconName] ?? FileCheck;
                  const isLast = index === HOW_IT_WORKS_STEPS.length - 1;

                  return (
                    <motion.div
                      key={step.number}
                      className={`relative flex gap-5 sm:gap-6 ${isLast ? '' : 'pb-10'}`}
                      initial={reduced ? false : { opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, delay: index * 0.1, ease: APPLE_EASE_OUT }}
                    >
                      <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border-2 border-brand bg-surface flex items-center justify-center">
                        <Icon className="w-4 h-4 text-brand" strokeWidth={2.5} />
                      </div>

                      <div className={`flex-1 min-w-0 pt-0.5 ${isLast ? '' : 'border-b border-border pb-10'}`}>
                        <span className="text-[10px] font-mono font-semibold text-foreground-subtle tracking-wider">
                          PASSO {step.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-foreground-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
