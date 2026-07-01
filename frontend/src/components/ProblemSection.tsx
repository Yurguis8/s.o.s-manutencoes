import React from 'react';
import { PROBLEM_ITEMS } from '../data/landingData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
              O desafio mecânico
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Móveis planejados representam um investimento patrimonial expressivo.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-base text-foreground-muted leading-relaxed font-normal mb-4">
              Com o ciclo contínuo de abertura, a ação da gravidade e as variações climáticas de umidade, as ferragens sofrem fadiga mecânica. Ignorar desalinhamentos iniciais compromete definitivamente a estrutura das chapas de MDF.
            </p>
            <div className="p-4 rounded-lg bg-surface-muted border border-border text-sm text-foreground font-medium">
              A intervenção corretiva tardia avulsa pode representar até 40% do valor do móvel original.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROBLEM_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="bg-surface-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-brand/20 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-brand mb-3 block">
                  0{index + 1}
                </span>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
