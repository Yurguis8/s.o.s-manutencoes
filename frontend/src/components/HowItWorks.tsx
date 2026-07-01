import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { Reveal, RevealStagger, RevealStaggerItem } from './Reveal';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 bg-surface-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Fluxo operacional
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Como funciona a contratação
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <RevealStaggerItem key={step.number}>
              <div className="bg-surface-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-brand/30 transition-colors duration-300 h-full">
                <div>
                  <span className="text-xs font-mono font-medium text-brand mb-4 block">
                    {step.number}
                  </span>

                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-foreground-muted leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
