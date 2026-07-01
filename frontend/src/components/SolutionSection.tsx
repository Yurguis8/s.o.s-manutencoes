import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { Reveal, RevealStagger, RevealStaggerItem } from './Reveal';

export const SolutionSection: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { title: 'Previsibilidade orçamentária', desc: 'Faturamento programado semestral ou anual sem taxas surpresas.' },
    { title: 'Prontuário técnico digital', desc: 'Histórico fotográfico de cada ambiente atualizado no portal.' },
    { title: 'SLA prioritário de 24 horas', desc: 'Atendimento técnico preferencial para solicitações corretivas.' },
    { title: 'Peças e componentes originais', desc: 'Homologação direta com os principais fabricantes de ferragens.' },
  ];

  return (
    <section className="py-24 bg-surface-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="bg-surface-card border border-border rounded-xl p-8 sm:p-14 shadow-xl shadow-black/20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand text-white text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>Metodologia S.O.S Manutenções</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                Assinatura técnica de conservação patrimonial
              </h2>

              <p className="text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mb-10">
                Substituímos o modelo reativo de manutenções de emergência por um protocolo sistemático corporativo. Através de ciclos semestrais ou anuais, garantimos vistorias presenciais programadas, calibração mecânica de dobradiças e canais prioritários com custo operacional significativamente reduzido.
              </p>

              <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-8 border-t border-border">
                {benefits.map((item) => (
                  <RevealStaggerItem key={item.title}>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                        <p className="text-xs text-foreground-muted mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </RevealStaggerItem>
                ))}
              </RevealStagger>

              <div className="flex items-center">
                <button
                  onClick={scrollToPlans}
                  className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-hover text-white font-medium text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-md shadow-brand/20"
                >
                  <span>Visualizar planos disponíveis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
