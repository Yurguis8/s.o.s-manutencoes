import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LegalDocument } from '../data/legalContent';
import { Footer } from './Footer';

interface LegalPageLayoutProps {
  document: LegalDocument;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ document }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#8E0E1A] selection:text-white">
      <header className="border-b border-gray-200 bg-white py-4">
        <div className="max-w-[800px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#8E0E1A] flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-base font-semibold text-gray-900 tracking-tight">
              S.O.S <span className="text-gray-500 font-normal">Manutenções</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="py-12">
        <article className="max-w-[800px] mx-auto px-6">
          <div className="mb-10 pb-8 border-b border-gray-100">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">
              {document.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono">
              <span>{document.version}</span>
              <span className="text-gray-300">·</span>
              <span>Atualizado em {document.lastUpdated}</span>
            </div>
          </div>

          <div className="space-y-8">
            {document.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-bold text-gray-900 mb-3">{section.title}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-sm text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <nav className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Documentos relacionados
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link to="/termos" className="text-[#8E0E1A] hover:underline">
                Termos de Serviço
              </Link>
              <Link to="/privacidade" className="text-[#8E0E1A] hover:underline">
                Política de Privacidade
              </Link>
              <Link to="/consentimento" className="text-[#8E0E1A] hover:underline">
                Termo de Consentimento
              </Link>
              <Link to="/contrato" className="text-[#8E0E1A] hover:underline">
                Contrato de Adesão
              </Link>
            </div>
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
};
