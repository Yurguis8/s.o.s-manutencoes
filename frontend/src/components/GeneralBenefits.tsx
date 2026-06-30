import React from 'react';
import { GENERAL_BENEFITS } from '../data/landingData';
import { Clock, CheckCircle2, TrendingUp, ShieldCheck, FileText, Calendar } from 'lucide-react';

export const GeneralBenefits: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock': return <Clock className="w-5 h-5 text-[#8E0E1A]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#8E0E1A]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#8E0E1A]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#8E0E1A]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#8E0E1A]" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-[#8E0E1A]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#8E0E1A]" />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Minimalist Corporate Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Governança e Operação
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Padrões operacionais corporativos
          </h2>
          <p className="text-base text-gray-600">
            Cada pilar do nosso serviço foi estruturado para maximizar a longevidade dos móveis e minimizar o esforço de agendamento do morador.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GENERAL_BENEFITS.map((item) => (
            <div 
              key={item.title}
              className="p-8 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center mb-6">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
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
