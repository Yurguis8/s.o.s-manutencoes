import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

interface MercadoPagoTrustBadgeProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export const MercadoPagoTrustBadge: React.FC<MercadoPagoTrustBadgeProps> = ({
  variant = 'full',
  className = '',
}) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 text-[10px] text-foreground-subtle ${className}`}>
        <Lock className="w-3 h-3 shrink-0 text-[#009EE3]" aria-hidden />
        <span>Pagamento seguro via <strong className="font-semibold text-[#009EE3]">Mercado Pago</strong></span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border border-[#009EE3]/25 bg-[#009EE3]/5 px-4 py-3 ${className}`}
      role="note"
      aria-label="Pagamento processado pelo Mercado Pago"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#009EE3]/15">
        <ShieldCheck className="h-5 w-5 text-[#009EE3]" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-foreground">
          Pagamento protegido pelo Mercado Pago
        </p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-foreground-muted">
          Nossa plataforma não armazena informações bancárias. Ambiente criptografado e antifraude em tempo real.
        </p>
      </div>
    </div>
  );
};
