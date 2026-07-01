import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-surface-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Clientes e Especialistas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Confiança de arquitetos e proprietários
          </h2>
          <p className="text-base text-foreground-muted">
            Saiba como nossa estrutura corporativa resolve definitivamente a instabilidade técnica na manutenção residencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-surface-card border border-border rounded-xl p-8 flex flex-col justify-between hover:border-brand/15 transition-colors"
            >
              <div>
                <Quote className="w-5 h-5 text-brand/40 mb-6" />

                <p className="text-sm text-foreground-muted leading-relaxed font-normal mb-8">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-border"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-foreground-subtle">
                    {item.role} · {item.companyOrLocation}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
