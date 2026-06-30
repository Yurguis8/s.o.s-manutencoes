import React from 'react';
import { COMPARISON_FEATURES } from '../data/landingData';
import { Check, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const renderCell = (val: string | boolean) => {
    if (val === true) {
      return (
        <div className="flex items-center justify-center">
          <Check className="w-4 h-4 text-emerald-600" />
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="flex items-center justify-center">
          <Minus className="w-4 h-4 text-gray-300" />
        </div>
      );
    }
    return <span className="font-medium text-xs text-gray-900">{val}</span>;
  };

  return (
    <section id="comparativo" className="py-24 bg-[#F6F8FA] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Minimalist Corporate Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Especificações técnicas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Comparativo de escopo técnico
          </h2>
          <p className="text-base text-gray-600">
            Detalhamento granular das coberturas mecânicas e operacionais de cada modalidade.
          </p>
        </div>

        {/* Clean Corporate Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/75">
                <th className="py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[240px]">
                  Funcionalidade e Cobertura
                </th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-gray-900 min-w-[140px]">
                  Essencial
                </th>
                <th className="py-4 px-6 text-center text-xs font-bold text-[#8E0E1A] bg-blue-50/40 border-x border-gray-200 min-w-[160px]">
                  Casa (Popular)
                </th>
                <th className="py-4 px-6 text-center text-xs font-semibold text-gray-900 min-w-[140px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {COMPARISON_FEATURES.map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-xs font-medium text-gray-700">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    {renderCell(row.essential)}
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50/20 border-x border-gray-200">
                    {renderCell(row.casa)}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
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
