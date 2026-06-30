import dotenv from 'dotenv';
import { getWebhookUrl } from '../config/appUrls.js';

dotenv.config();

const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
const webhookUrl = getWebhookUrl();

if (!accessToken) {
  console.error('❌ MERCADO_PAGO_ACCESS_TOKEN não configurado em backend/.env');
  process.exit(1);
}

const events = [
  'subscription_preapproval',
  'subscription_preapproval_plan',
  'subscription_authorized_payment',
];

async function listWebhooks(): Promise<any[]> {
  const response = await fetch('https://api.mercadopago.com/v1/webhooks', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Falha ao listar webhooks (${response.status}): ${body}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.results || [];
}

async function createWebhook(): Promise<void> {
  const response = await fetch('https://api.mercadopago.com/v1/webhooks', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: webhookUrl,
      events,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Falha ao criar webhook (${response.status}): ${body}`);
  }

  const data = await response.json();
  console.log('✅ Webhook registrado no Mercado Pago:');
  console.log(JSON.stringify(data, null, 2));
}

async function main(): Promise<void> {
  console.log(`\n🔗 URL do webhook: ${webhookUrl}\n`);

  try {
    const existing = await listWebhooks();
    const alreadyRegistered = existing.some((hook) => hook.url === webhookUrl);

    if (alreadyRegistered) {
      console.log('✅ Webhook já está registrado com esta URL.');
      return;
    }

    await createWebhook();
    console.log('\n📋 Eventos configurados:', events.join(', '));
    console.log('\n💡 Copie a chave secreta em: Mercado Pago → Suas integrações → Webhooks');
    console.log('   e adicione em backend/.env como MERCADO_PAGO_WEBHOOK_SECRET\n');
  } catch (error: any) {
    console.error('❌ Erro ao registrar webhook:', error.message);
    console.log('\n📝 Configure manualmente no painel do Mercado Pago:');
    console.log('   1. Acesse https://www.mercadopago.com.br/developers/panel/app');
    console.log('   2. Sua aplicação → Webhooks → Configurar notificações');
    console.log(`   3. URL de produção: ${webhookUrl}`);
    console.log('   4. Eventos: Planos e assinaturas (subscription_preapproval, etc.)');
    console.log('\n   O webhook também é enviado automaticamente em cada assinatura via notification_url.\n');
    process.exit(1);
  }
}

main();
