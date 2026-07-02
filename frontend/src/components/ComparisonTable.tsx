import React from 'react';
import { COMPARISON_FEATURES } from '../data/landingData';
import { Check, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

export const ComparisonTable: React.FC = () => {
  const renderCell = (val: string | boolean) => {
    if (val === true) {
      return (
        <div className="flex items-center justify-center">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
        </div>
      );
    }

    if (val === false) {
      return (
        <div className="flex items-center justify-center">
          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-foreground-subtle" />
        </div>
      );
    }

    return (
      <span className="text-[11px] sm:text-xs font-medium text-foreground">
        {val}
      </span>
    );
  };

  return (
    <section
      id="comparativo"
      className="py-24 bg-surface-muted border-b border-border"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Especificações técnicas
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Comparativo de escopo técnico
          </h2>

          <p className="text-base text-foreground-muted">
            Detalhamento granular das coberturas mecânicas e operacionais de cada
            modalidade.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface-card">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border bg-surface-card">
                  <th className="sticky left-0 z-20 bg-surface-card py-3 px-4 sm:px-6 text-left text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-foreground-muted min-w-[190px]">
                    Funcionalidade
                  </th>

                  <th className="py-3 px-3 sm:px-6 text-center text-[11px] sm:text-xs font-semibold text-foreground min-w-[110px]">
                    Essencial
                  </th>

                  <th className="py-3 px-3 sm:px-6 text-center text-[11px] sm:text-xs font-bold text-border-1 bg-gray-900 border-x border-border min-w-[120px]">
                    Casa (Popular)
                  </th>

                  <th className="py-3 px-3 sm:px-6 text-center text-[11px] sm:text-xs font-semibold text-foreground min-w-[110px]">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border text-sm">
                {COMPARISON_FEATURES.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-surface-muted/40 transition-colors duration-300"
                  >
                    <td className="sticky left-0 z-10 bg-surface-card py-3 px-4 sm:px-6 text-[11px] sm:text-xs font-medium text-foreground-muted leading-relaxed">
                      {row.feature}
                    </td>

                    <td className="py-3 px-3 sm:px-6 text-center">
                      {renderCell(row.essential)}
                    </td>

                    <td className="py-3 px-3 sm:px-6 text-center bg-brand/2 border-x border-border">
                      {renderCell(row.casa)}
                    </td>

                    <td className="py-3 px-3 sm:px-6 text-center">
                      {renderCell(row.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-center text-xs text-foreground-subtle md:hidden">
            ← Deslize a tabela para o lado →
          </p>
        </Reveal>
      </div>
    </section>
  );
};