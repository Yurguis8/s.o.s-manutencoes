import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { APPLE_EASE_OUT } from './Reveal';
import img1 from '../img/img2.jpg'; 

export const Hero: React.FC = () => {
  const reduced = useReducedMotion();

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolution = () => {
    const el = document.getElementById('problema');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: APPLE_EASE_OUT },
        };

  return (
    <section
      className="relative min-h-[92vh] flex items-center border-b border-border overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/40 to-black/50 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-28 pb-22 md:pt-36 md:pb-34 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand/90 backdrop-blur-sm border border-brand text-white text-xs font-semibold mb-6 shadow-md shadow-brand/30"
            >
              <span>Manutenção inteligente para sua casa</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12] mb-6 drop-shadow-sm"
            >
              Seus móveis planejados{' '}
              <span className="text-brand">sempre no ponto</span>, o ano inteiro.
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-lg text-white/85 font-normal leading-relaxed mb-8 max-w-xl"
            >
              Assine a manutenção preventiva e tenha técnicos especializados cuidando de portas, gavetas e ferragens — com visitas programadas, atendimento rápido e zero dor de cabeça.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-10"
            >
              <button
                onClick={scrollToPlans}
                className="px-6 py-3.5 rounded-lg bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand/40"
              >
                <span>Ver planos a partir de R$ 39,90</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToSolution}
                className="px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-medium text-sm border border-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <span>Por que isso importa?</span>
              </button>
            </motion.div>

            <motion.div
              {...fadeUp(0.65)}
              className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs text-white/80 font-medium">Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs text-white/80 font-medium">Técnicos certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs text-white/80 font-medium">Qualquer marca de móvel</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
