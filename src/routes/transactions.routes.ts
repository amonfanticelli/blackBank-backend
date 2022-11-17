import { Router } from 'express';
import { createTransactionController } from '../controllers/Transactions/createTransaction.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware';
import { validateTransactionCreate } from '../middlewares/validateTransactionCreate.middleware';

const transactionsRoutes = Router();

transactionsRoutes.post(
  '',
  validateTransactionCreate,
  ensureAuthMiddleware,
  createTransactionController
);

export { transactionsRoutes };
