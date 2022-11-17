import { Router } from "express";
import { createTransactionController } from "../controllers/Transactions/createTransaction.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { validateTransactionCreate } from "../middlewares/validateTransactionCreate.middleware";
import { listUsersTransacionsController } from "../controllers/Transactions/listUsersTransactions.controller";
const transactionsRoutes = Router();

transactionsRoutes.post(
  "",
  validateTransactionCreate,
  ensureAuthMiddleware,
  createTransactionController
);

transactionsRoutes.get(
  "",
  ensureAuthMiddleware,
  listUsersTransacionsController
);

export { transactionsRoutes };
