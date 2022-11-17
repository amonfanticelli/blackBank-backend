import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const transactionsRoutes = Router();

transactionsRoutes.post("", ensureAuthMiddleware);

export { transactionsRoutes };
