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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled ? 'border-b border-gray-200 py-3.5 shadow-xs' : 'border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        {/* Institutional Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 focus:outline-none"
        >
          
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            S.O.S <span className="text-gray-500 font-normal">Manutenções</span>
          </span>
        </Link>

        {/* Minimalist Corporate Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('como-funciona')} 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          >
            Como funciona
          </button>
          <button 
            onClick={() => scrollToSection('problema')} 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          >
            Problema e Solução
          </button>
          <button 
            onClick={() => scrollToSection('planos')} 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          >
            Planos
          </button>
          <button 
            onClick={() => scrollToSection('comparativo')} 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          >
            Comparativo
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')} 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Corporate CTA Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mr-2"
          >
            Contato
          </a>
          <button 
            onClick={() => scrollToSection('planos')}
            className="px-4 py-2 rounded-lg bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 text-white font-medium text-sm transition-all duration-150 cursor-pointer flex items-center gap-1.5"
          >
            <span>Assinar planos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-6 mt-3.5 shadow-lg">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('como-funciona')} 
              className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              Como funciona
            </button>
            <button 
              onClick={() => scrollToSection('problema')} 
              className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              Problema e Solução
            </button>
            <button 
              onClick={() => scrollToSection('planos')} 
              className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              Planos e Preços
            </button>
            <button 
              onClick={() => scrollToSection('comparativo')} 
              className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              Comparativo
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')} 
              className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              Perguntas Frequentes
            </button>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('planos')}
                className="w-full py-2.5 rounded-lg bg-[#8E0E1A] text-white font-medium text-sm text-center"
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

