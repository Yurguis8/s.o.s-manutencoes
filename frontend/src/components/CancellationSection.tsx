import React from "react";
import { MessageCircle, ShieldCheck, Clock3 } from "lucide-react";

export const CancellationSection: React.FC = () => {
  const phone = "5575999999999"; // Coloque o número com DDI e DDD
  const message = encodeURIComponent(
    `Olá! Gostaria de solicitar o cancelamento da minha assinatura.

Nome:
CPF:
Plano:
Motivo do cancelamento:
`
  );

  return (
    <section
      id="cancelamento"
      className="py-24 bg-surface border-b border-border"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            Cancelamento
          </p>

          <h2 className="text-4xl font-bold text-foreground mb-4">
            Solicitar cancelamento da assinatura
          </h2>

          <p className="text-foreground-muted max-w-2xl mx-auto">
            Caso deseje cancelar sua assinatura, nossa equipe realizará todo o
            atendimento pelo WhatsApp para garantir um processo rápido, seguro e
            transparente.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface-card p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="text-center">
              <Clock3 className="mx-auto mb-3 h-8 w-8 text-brand" />
              <h3 className="font-semibold mb-2">Atendimento rápido</h3>
              <p className="text-sm text-foreground-muted">
                Nossa equipe responderá sua solicitação o mais breve possível.
              </p>
            </div>

            <div className="text-center">
              <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-brand" />
              <h3 className="font-semibold mb-2">Processo seguro</h3>
              <p className="text-sm text-foreground-muted">
                Confirmaremos seus dados antes de concluir qualquer
                cancelamento.
              </p>
            </div>

            <div className="text-center">
              <MessageCircle className="mx-auto mb-3 h-8 w-8 text-brand" />
              <h3 className="font-semibold mb-2">Suporte humanizado</h3>
              <p className="text-sm text-foreground-muted">
                Você falará diretamente com nossa equipe pelo WhatsApp.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-brand/5 border border-brand/20 p-6 text-center">
            <p className="text-lg font-semibold mb-3">
              Clique no botão abaixo para iniciar sua solicitação.
            </p>

            <p className="text-sm text-foreground-muted mb-8">
              Uma mensagem será preenchida automaticamente para agilizar seu
              atendimento.
            </p>

            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-white font-semibold transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar cancelamento pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};