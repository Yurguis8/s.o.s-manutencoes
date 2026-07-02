import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoMutedClass = scrolled
    ? 'text-foreground-subtle font-normal'
    : 'text-white/60 font-normal';

  const navLinkClass = scrolled
    ? 'text-sm font-medium text-foreground-muted hover:text-foreground transition-colors focus:outline-none cursor-pointer'
    : 'text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2.5 focus:outline-none">
          <span className="font-semibold tracking-tight">
            <span
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-sos' : 'text-brand'
              }`}
            >
              S.O.S
            </span>{' '}
            <span className={`text-lg ${logoMutedClass}`}>Manutenções</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('como-funciona')} className={navLinkClass}>
            Como funciona
          </button>
          <button onClick={() => scrollToSection('problema')} className={navLinkClass}>
            Problema e Solução
          </button>
          <button onClick={() => scrollToSection('planos')} className={navLinkClass}>
            Planos
          </button>
          <button onClick={() => scrollToSection('comparativo')} className={navLinkClass}>
            Comparativo
          </button>

          <button onClick={() => scrollToSection('faq')} className={navLinkClass}>
            FAQ
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors mr-2 ${
              scrolled ? 'text-foreground-muted hover:text-foreground' : 'text-white/80 hover:text-white'
            }`}
          >
            Contato
          </a>
          <button
            onClick={() => scrollToSection('planos')}
            className="px-4 py-2 rounded-lg bg-brand hover:bg-brand-hover text-white font-medium text-sm transition-all duration-150 cursor-pointer flex items-center gap-1.5 shadow-md shadow-brand/20"
          >
            <span>Assinar planos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-1.5 focus:outline-none transition-colors ${
            scrolled ? 'text-foreground-muted hover:text-foreground' : 'text-white/90 hover:text-white'
          }`}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-elevated border-b border-border px-6 pt-4 pb-6 mt-3.5 shadow-xl">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('planos')} className="text-left text-sm font-medium text-foreground-muted hover:text-foreground py-1">
              Planos e Preços
            </button>
            <button onClick={() => scrollToSection('comparativo')} className="text-left text-sm font-medium text-foreground-muted hover:text-foreground py-1">
              Comparativo
            </button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-left text-sm font-medium text-foreground-muted hover:text-foreground py-1">
              Como funciona
            </button>
            <button onClick={() => scrollToSection('problema')} className="text-left text-sm font-medium text-foreground-muted hover:text-foreground py-1">
              Problema e Solução
            </button>
            
            
            <button onClick={() => scrollToSection('faq')} className="text-left text-sm font-medium text-foreground-muted hover:text-foreground py-1">
              Perguntas Frequentes
            </button>
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('planos')}
                className="w-full py-2.5 rounded-lg bg-brand hover:bg-brand-hover text-white font-medium text-sm text-center"
              >
                Assinar planos
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
