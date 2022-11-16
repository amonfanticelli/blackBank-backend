import { Router } from "express";
import listAccountByIdController from "../controllers/Accounts/listAccountById.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
const accountsRoutes = Router();

accountsRoutes.get("/:id", ensureAuthMiddleware, listAccountByIdController);

export { accountsRoutes };
