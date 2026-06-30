import dotenv from 'dotenv';

dotenv.config();

export function getBackendUrl(): string {
  return (process.env.BACKEND_URL || `http://127.0.0.1:${process.env.PORT || 3001}`).replace(/\/$/, '');
}

export function getWebhookUrl(): string {
  return `${getBackendUrl()}/api/payments/webhook?source_news=webhooks`;
}

export function getAppUrl(): string {
  return (process.env.APP_URL || 'http://127.0.0.1:3000').replace(/\/$/, '');
}
