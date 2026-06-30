import React from 'react';
import { CheckCircle2, AlertCircle, XCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface PaymentFeedbackModalProps {
  status: string | null;
  preapprovalId: string | null;
  onClose: () => void;
}

export const PaymentFeedbackModal: React.FC<PaymentFeedbackModalProps> = ({ status, preapprovalId, onClose }) => {
  if (!status) return null;

  // Mercado Pago pode retornar status como 'authorized', 'approved', 'pending', 'rejected', 'cancelled', etc.
  const isSuccess = status === 'authorized' || status === 'approved';
  const isPending = status === 'pending' || status === 'in_process';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden p-8 text-center">
        
        {/* Decorative background shape */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-gray-50 rounded-full -z-10" />
        
        {isSuccess ? (
          <div>
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-xs animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Assinatura Confirmada!
            </h3>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Parabéns! Sua residência agora conta com a blindagem patrimonial da <strong className="text-gray-900">S.O.S Manutenções</strong>. Nossa equipe técnica entrará em contato via WhatsApp nas próximas 24 horas úteis para agendar sua primeira vistoria técnica preventiva.
            </p>

            {preapprovalId && (
              <div className="inline-block px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-[10px] text-gray-400 font-mono mb-6">
                Assinatura MP: {preapprovalId}
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
            >
              <span>Acessar Portal do Cliente</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : isPending ? (
          <div>
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6 border border-amber-100 shadow-xs">
              <AlertCircle className="w-8 h-8 animate-pulse" />
            </div>
            
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Pagamento em Análise
            </h3>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              O Mercado Pago está processando a sua transação. Assim que a compensação for confirmada, sua assinatura será ativada automaticamente e enviaremos o cronograma de vistorias no seu e-mail.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#8E0E1A] hover:bg-[#8E0E1A]/90 transition-all cursor-pointer shadow-md"
            >
              Entendido
            </button>
          </div>
        ) : (
          <div>
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-6 border border-rose-100 shadow-xs">
              <XCircle className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Problema no Pagamento
            </h3>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Infelizmente, a transação não pôde ser concluída pelo Mercado Pago. Por favor, revise as informações do seu cartão de crédito ou utilize outro método de pagamento.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 transition-all cursor-pointer shadow-md"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
          <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
          <span>Ambiente Seguro S.O.S Manutenções</span>
        </div>

      </div>
    </div>
  );
};
