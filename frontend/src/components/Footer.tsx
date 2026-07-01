import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/landingData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isLanding = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isLanding) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-elevated border-t border-border py-16 text-foreground-muted text-sm">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">

          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-white font-bold text-xs">
                S
              </div>
              <span className="text-base font-semibold text-foreground tracking-tight">
                S.O.S <span className="text-foreground-subtle font-normal">Manutenções</span>
              </span>
            </div>

            <p className="text-xs text-foreground-subtle max-w-sm leading-relaxed mb-6">
              Empresa líder em conservação patrimonial preventiva e regulagem milimétrica de móveis planejados sob medida.
            </p>

            <div className="text-xs text-foreground-subtle font-mono">
              {COMPANY_INFO.address}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Solução Corporativa
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollToSection('como-funciona')} className="hover:text-foreground cursor-pointer transition-colors">
                  Metodologia operacional
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('problema')} className="hover:text-foreground cursor-pointer transition-colors">
                  Por que assinar
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('planos')} className="hover:text-foreground cursor-pointer transition-colors">
                  Planos Semestrais e Anuais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('comparativo')} className="hover:text-foreground cursor-pointer transition-colors">
                  Especificações técnicas
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Canais de Suporte
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Central de Atendimento via WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-foreground transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="pt-2 text-foreground-subtle font-mono">
                Atendimento técnico das 08h às 18h úteis
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle">
          <div>
            © {currentYear} S.O.S Manutenções Patrimoniais Ltda. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos de Serviço</Link>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
            <Link to="/consentimento" className="hover:text-foreground transition-colors">Termo de Consentimento</Link>
            <Link to="/contrato" className="hover:text-foreground transition-colors">Contrato de Adesão</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
