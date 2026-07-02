import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { PROBLEM_ITEMS } from '../data/landingData';
import { Reveal, RevealStagger, RevealStaggerItem } from './Reveal';
import { ShineCard } from './ShineCard';

const CARD_BACKGROUNDS = [
  'bg-surface-muted',
  'bg-surface-muted',
  'bg-surface-muted',
  'bg-surface-muted',
  'bg-surface-muted',
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-24 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <Reveal className="lg:col-span-6" direction="left">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
              Você já passou por isso?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Seus móveis planejados são um{' '}
              <span className="text-brand">grande investimento</span> — e merecem cuidado.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:pt-6" direction="right" delay={0.1}>
            <p className="text-base text-foreground-muted leading-relaxed font-normal mb-6">
              Com o uso diário, umidade e o peso das portas, as ferragens vão se desgastando aos poucos. Um desalinhamento pequeno hoje pode virar um problema caro amanhã.
            </p>
            <div className="p-4 rounded-lg bg-red-500 border border-border border-l-4 border-l-red-700 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-gray-100 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-100 mb-1">
                  Reparar depois pode custar caro
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Um conserto avulso tardio pode chegar a{' '}
                  <strong className="text-gray-100 font-bold">40% do valor</strong> do móvel original.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROBLEM_ITEMS.map((item, index) => (
            <RevealStaggerItem key={item.title}>
              
                <div className='bg-surface-muted p-8 rounded-xl'>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gray-100/80 text-xs font-mono font-bold text-gray-900 mb-4">
                    0{index + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
