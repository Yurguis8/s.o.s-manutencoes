import React from 'react';
import { CheckCircle2, AlertCircle, XCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface PaymentFeedbackModalProps {
  status: string | null;
  preapprovalId: string | null;
  onClose: () => void;
}

export const PaymentFeedbackModal: React.FC<PaymentFeedbackModalProps> = ({ status, preapprovalId, onClose }) => {
  if (!status) return null;

  const isSuccess = status === 'authorized' || status === 'approved';
  const isPending = status === 'pending' || status === 'in_process';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl bg-surface-card border border-border shadow-2xl shadow-black/40 overflow-hidden p-8 text-center">

        {isSuccess ? (
          <div>
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6 border border-accent/20 shadow-sm animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-foreground mb-3 tracking-tight">
              Assinatura Confirmada!
            </h3>

            <p className="text-sm text-foreground-muted mb-6 leading-relaxed">
              Parabéns! Sua residência agora conta com a blindagem patrimonial da <strong className="text-foreground">S.O.S Manutenções</strong>. Nossa equipe técnica entrará em contato via WhatsApp nas próximas 24 horas úteis para agendar sua primeira vistoria técnica preventiva.
            </p>

            {preapprovalId && (
              <div className="inline-block px-3 py-1.5 rounded-lg bg-surface-muted border border-border text-[10px] text-foreground-subtle font-mono mb-6">
                Assinatura MP: {preapprovalId}
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-brand hover:bg-brand-hover transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand/20"
            >
              <span>Acessar Portal do Cliente</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : isPending ? (
          <div>
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-6 border border-amber-500/20 shadow-sm">
              <AlertCircle className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-xl font-extrabold text-foreground mb-3 tracking-tight">
              Pagamento em Análise
            </h3>

            <p className="text-sm text-foreground-muted mb-6 leading-relaxed">
              O Mercado Pago está processando a sua transação. Assim que a compensação for confirmada, sua assinatura será ativada automaticamente e enviaremos o cronograma de vistorias no seu e-mail.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-brand hover:bg-brand-hover transition-all cursor-pointer shadow-md shadow-brand/20"
            >
              Entendido
            </button>
          </div>
        ) : (
          <div>
            <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto mb-6 border border-rose-500/20 shadow-sm">
              <XCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-foreground mb-3 tracking-tight">
              Problema no Pagamento
            </h3>

            <p className="text-sm text-foreground-muted mb-6 leading-relaxed">
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

        <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-foreground-subtle">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Ambiente Seguro S.O.S Manutenções</span>
        </div>

      </div>
    </div>
  );
};
