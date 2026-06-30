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
    <footer className="bg-white border-t border-gray-200 py-16 text-gray-600 text-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          {/* Company Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-[#8E0E1A] flex items-center justify-center text-white font-bold text-xs">
                S
              </div>
              <span className="text-base font-semibold text-gray-900 tracking-tight">
                S.O.S <span className="text-gray-500 font-normal">Manutenções</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed mb-6">
              Empresa líder em conservação patrimonial preventiva e regulagem milimétrica de móveis planejados sob medida.
            </p>

            <div className="text-xs text-gray-400 font-mono">
              {COMPANY_INFO.address}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Solução Corporativa
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollToSection('como-funciona')} className="hover:text-gray-900 cursor-pointer">
                  Metodologia operacional
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('problema')} className="hover:text-gray-900 cursor-pointer">
                  Por que assinar
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('planos')} className="hover:text-gray-900 cursor-pointer">
                  Planos Semestrais e Anuais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('comparativo')} className="hover:text-gray-900 cursor-pointer">
                  Especificações técnicas
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Canais de Suporte
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  Central de Atendimento via WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gray-900">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="pt-2 text-gray-400 font-mono">
                Atendimento técnico das 08h às 18h úteis
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear} S.O.S Manutenções Patrimoniais Ltda. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/termos" className="hover:text-gray-600">Termos de Serviço</Link>
            <Link to="/privacidade" className="hover:text-gray-600">Política de Privacidade</Link>
            <Link to="/consentimento" className="hover:text-gray-600">Termo de Consentimento</Link>
            <Link to="/contrato" className="hover:text-gray-600">Contrato de Adesão</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
