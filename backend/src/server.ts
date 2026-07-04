import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes.js';
import { initializeMpPlans } from './controllers/paymentController.js';
import { dbService } from './services/dbService.js';
import { getAppUrl, getWebhookUrl } from './config/appUrls.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const appUrl = getAppUrl();

app.set('trust proxy', 1);
app.use(cors({
  origin: appUrl === 'http://127.0.0.1:3000' ? true : appUrl,
  credentials: true,
}));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend S.O.S Manutenções is running',
    webhookUrl: getWebhookUrl(),
  });
});
console.log("MP TOKEN:", process.env.MERCADO_PAGO_ACCESS_TOKEN ? "Existe" : "Não existe");
console.log("APP_URL:", process.env.APP_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);

app.use('/api/payments', paymentRoutes);

dbService.initializeDatabase()
  .then(() => initializeMpPlans())
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Webhook URL: ${getWebhookUrl()}`);
      console.log(`Frontend URL: ${appUrl}`);
      if (!process.env.MERCADO_PAGO_WEBHOOK_SECRET) {
        console.log('Dica: defina MERCADO_PAGO_WEBHOOK_SECRET após configurar o webhook no Mercado Pago.');
      }
    });
  })
  .catch((error) => {
    console.error('Erro crítico ao inicializar o banco de dados:', error);
    process.exit(1);
  });
