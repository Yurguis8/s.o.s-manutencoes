import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plan, BillingCycle } from '../types';
import { X, ShieldCheck, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

interface SubscribeModalProps {
  plan: Plan | null;
  billingCycle: BillingCycle;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ plan, billingCycle, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsText, setShowTermsText] = useState(false);
  const [showContractText, setShowContractText] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'credit_card'
  });

  if (!plan) return null;

  const monthlyPrice = billingCycle === 'semiannual' ? plan.priceSemiannualMonthly : plan.priceAnnualMonthly;
  const cycleTotal = billingCycle === 'semiannual' ? plan.totalSemiannual : plan.totalAnnual;
  const cycleLabel = billingCycle === 'semiannual' ? 'Semestral (6 meses)' : 'Anual (12 meses)';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Você precisa aceitar os Termos de Serviço e o Contrato de Adesão para prosseguir.');
      return;
    }
    setLoading(true);

    try {
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/payments/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: plan.id,
          billingCycle,
          payer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
          },
          acceptedTerms: true,
          termsVersion: "Termos v1.0 | Privacidade v1.0 | Consentimento v1.0 | Adesão v1.0"
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao criar assinatura no servidor');
      }

      const data = await response.json();
      
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert('Erro ao gerar o link de pagamento do Mercado Pago.');
      }
    } catch (error) {
      console.error('Erro de checkout:', error);
      alert('Ocorreu um erro ao processar sua assinatura. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-xl bg-white border border-gray-200 shadow-xl overflow-hidden my-8 animate-fadeIn">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8E0E1A]" />
            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Contratação Corporativa Digital
            </span>
          </div>
          <button 
            onClick={onClose}
            disabled={loading}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 max-h-[80vh] overflow-y-auto">
          
          {/* Plan Summary */}
          <div className="p-4 rounded-lg bg-[#F6F8FA] border border-gray-200 mb-6 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-gray-900">{plan.name}</h4>
              <p className="text-xs text-gray-500 mt-0.5">Ciclo {cycleLabel}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">R$ {monthlyPrice}<span className="text-xs font-normal text-gray-500">/mês</span></div>
              <div className="text-[11px] text-gray-400 font-mono">Total: R$ {cycleTotal}</div>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Nome completo ou Razão Social</label>
              <input 
                required
                disabled={loading}
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ex: João Silva ou Arquitetura Ltda."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8E0E1A] transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">E-mail corporativo</label>
                <input 
                  required
                  disabled={loading}
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="joao@empresa.com.br"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8E0E1A] transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">WhatsApp para vistorias</label>
                <input 
                  required
                  disabled={loading}
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8E0E1A] transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">CEP e Endereço da Residência</label>
              <input 
                required
                disabled={loading}
                type="text" 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Av. Paulista, 1000 - Apto 42"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8E0E1A] transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          {/* Seção de Termos e Contrato */}
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
            
            {/* Acordeão de Termos de Serviço */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setShowTermsText(!showTermsText)}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span>Termos de Serviço (Resumo)</span>
                {showTermsText ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
              </button>
              {showTermsText && (
                <div className="p-3 bg-white text-[11px] text-gray-600 border-t border-gray-150 leading-relaxed max-h-[150px] overflow-y-auto">
                  <p className="mb-2"><strong>1. Objeto:</strong> A S.O.S Manutenções presta serviços preventivos e emergenciais de infraestrutura civil, elétrica e hidráulica residencial conforme o plano contratado.</p>
                  <p className="mb-2"><strong>2. Escopo:</strong> Estão inclusas vistorias técnicas periódicas e atendimento de chamados sob demanda. Serviços fora do escopo do plano serão orçados e cobrados separadamente.</p>
                  <p className="mb-2"><strong>3. Acesso:</strong> O cliente se compromete a fornecer livre acesso ao imóvel nos dias e horários agendados.</p>
                  <p><strong>4. Rescisão:</strong> O cancelamento antecipado do plano anual está sujeito a multa compensatória de 20% do valor restante das parcelas do contrato.</p>
                </div>
              )}
            </div>

            {/* Acordeão de Contrato de Adesão */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setShowContractText(!showContractText)}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span>Contrato de Adesão (Resumo)</span>
                {showContractText ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
              </button>
              {showContractText && (
                <div className="p-3 bg-white text-[11px] text-gray-600 border-t border-gray-150 leading-relaxed max-h-[150px] overflow-y-auto">
                  <p className="mb-2"><strong>Cláusula 1ª (Vigência):</strong> Este contrato é celebrado por prazo determinado correspondente ao ciclo de faturamento selecionado (6 ou 12 meses), com renovação automática no término.</p>
                  <p className="mb-2"><strong>Cláusula 2ª (Pagamento):</strong> O faturamento é realizado de forma recorrente por meio do gateway de pagamentos parceiro (Mercado Pago). A falta de pagamento suspende o atendimento técnico em 5 dias.</p>
                  <p><strong>Cláusula 3ª (Declarações):</strong> O contratante declara ser o proprietário, inquilino ou representante legal autorizado do imóvel para fins de realização das manutenções necessárias.</p>
                </div>
              )}
            </div>

            {/* Checkbox de Aceite Atualizado */}
            <div className="flex items-start gap-2 bg-red-50/50 p-3 rounded-lg border border-red-100 mt-3">
              <input 
                id="terms"
                required
                disabled={loading}
                type="checkbox" 
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-[#8E0E1A] border-gray-300 rounded focus:ring-[#8E0E1A] cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-gray-600 select-none cursor-pointer leading-normal">
                Declaro que li, compreendi e aceito integralmente os{' '}
                <Link to="/termos" target="_blank" className="text-[#8E0E1A] underline font-medium hover:text-[#8E0E1A]/80">
                  Termos de Serviço
                </Link>
                , a{' '}
                <Link to="/privacidade" target="_blank" className="text-[#8E0E1A] underline font-medium hover:text-[#8E0E1A]/80">
                  Política de Privacidade
                </Link>
                , o{' '}
                <Link to="/consentimento" target="_blank" className="text-[#8E0E1A] underline font-medium hover:text-[#8E0E1A]/80">
                  Termo de Consentimento
                </Link>{' '}
                e o{' '}
                <Link to="/contrato" target="_blank" className="text-[#8E0E1A] underline font-medium hover:text-[#8E0E1A]/80">
                  Contrato de Adesão
                </Link>{' '}
                da plataforma.
              </label>
            </div>

          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading || !acceptedTerms}
              className="px-5 py-2 rounded-lg text-xs font-medium text-white bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <span>Prosseguir para pagamento</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4 text-center text-[10px] text-gray-400">
            Ambiente homologado · Conexão SSL 256-bit · Prontuário gerado automaticamente
          </div>

        </form>
      </div>
    </div>
  );
};
