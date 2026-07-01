import React from 'react';
import { GENERAL_BENEFITS } from '../data/landingData';
import { Clock, CheckCircle2, TrendingUp, ShieldCheck, FileText, Calendar } from 'lucide-react';
import { Reveal, RevealStagger, RevealStaggerItem } from './Reveal';

export const GeneralBenefits: React.FC = () => {
  const getIcon = (name: string) => {
    const iconClass = 'w-5 h-5 text-brand';
    switch (name) {
      case 'Clock': return <Clock className={iconClass} />;
      case 'CheckCircle2': return <CheckCircle2 className={iconClass} />;
      case 'TrendingUp': return <TrendingUp className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'FileText': return <FileText className={iconClass} />;
      case 'Calendar': return <Calendar className={iconClass} />;
      default: return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Governança e Operação
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Padrões operacionais corporativos
          </h2>
          <p className="text-base text-foreground-muted">
            Cada pilar do nosso serviço foi estruturado para maximizar a longevidade dos móveis e minimizar o esforço de agendamento do morador.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GENERAL_BENEFITS.map((item) => (
            <RevealStaggerItem key={item.title}>
              <div className="p-8 rounded-xl border border-border bg-surface-card hover:border-brand/20 transition-colors duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
                    {getIcon(item.iconName)}
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-foreground-muted leading-relaxed font-normal">
                    {item.description}
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
