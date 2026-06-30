import { Router } from 'express';
import { paymentController } from '../controllers/paymentController.js';

const router = Router();

// Endpoint para criar a assinatura recorrente (Mercado Pago Preapproval)
router.post('/create-subscription', paymentController.createSubscription);

// Endpoint para receber as atualizações de status via webhook (POST e GET)
router.post('/webhook', paymentController.handleWebhook);
router.get('/webhook', paymentController.handleWebhook);

// Endpoint para consultar o status local/sincronizado da assinatura
router.get('/status/:id', paymentController.getSubscriptionStatus);

export default router;
