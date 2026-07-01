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
    <div className="min-h-screen bg-surface text-foreground font-sans">
      <header className="border-b border-border bg-surface-elevated py-4">
        <div className="max-w-[800px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">
              S.O.S <span className="text-foreground-subtle font-normal">Manutenções</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-foreground-subtle hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="py-12">
        <article className="max-w-[800px] mx-auto px-6">
          <div className="mb-10 pb-8 border-b border-border">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              {document.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-subtle font-mono">
              <span>{document.version}</span>
              <span className="text-border">·</span>
              <span>Atualizado em {document.lastUpdated}</span>
            </div>
          </div>

          <div className="space-y-8">
            {document.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-bold text-foreground mb-3">{section.title}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-sm text-foreground-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <nav className="mt-12 pt-8 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle mb-4">
              Documentos relacionados
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link to="/termos" className="text-brand hover:text-brand-muted transition-colors">
                Termos de Serviço
              </Link>
              <Link to="/privacidade" className="text-brand hover:text-brand-muted transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/consentimento" className="text-brand hover:text-brand-muted transition-colors">
                Termo de Consentimento
              </Link>
              <Link to="/contrato" className="text-brand hover:text-brand-muted transition-colors">
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
