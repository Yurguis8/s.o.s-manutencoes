import React from 'react';
import { COMPARISON_FEATURES } from '../data/landingData';
import { Check, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const renderCell = (val: string | boolean) => {
    if (val === true) {
      return (
        <div className="flex items-center justify-center">
          <Check className="w-4 h-4 text-accent" />
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="flex items-center justify-center">
          <Minus className="w-4 h-4 text-foreground-subtle" />
        </div>
      );
    }
    return <span className="font-medium text-xs text-foreground">{val}</span>;
  };

  return (
    <section id="comparativo" className="py-24 bg-surface-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Especificações técnicas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Comparativo de escopo técnico
          </h2>
          <p className="text-base text-foreground-muted">
            Detalhamento granular das coberturas mecânicas e operacionais de cada modalidade.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-surface-card shadow-xl shadow-black/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-surface-muted">
                <th className="py-4 px-6 text-xs font-semibold text-foreground-muted uppercase tracking-wider min-w-[240px]">
                  Funcionalidade e Cobertura
                </th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-foreground min-w-[140px]">
                  Essencial
                </th>
                <th className="py-4 px-6 text-center text-xs font-bold text-brand bg-brand/5 border-x border-border min-w-[160px]">
                  Casa (Popular)
                </th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-foreground min-w-[140px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {COMPARISON_FEATURES.map((row) => (
                <tr key={row.feature} className="hover:bg-surface-muted/50 transition-colors">
                  <td className="py-4 px-6 text-xs font-medium text-foreground-muted">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center text-foreground-muted">
                    {renderCell(row.essential)}
                  </td>
                  <td className="py-4 px-6 text-center bg-brand/5 border-x border-border">
                    {renderCell(row.casa)}
                  </td>
                  <td className="py-4 px-6 text-center text-foreground-muted">
                    {renderCell(row.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
