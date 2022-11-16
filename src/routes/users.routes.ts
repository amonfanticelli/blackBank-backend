import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { validateUserCreate } from "../middlewares/validateUserCreate.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import listUsersController from "../controllers/users/listUsers.controller";
const userRoutes = Router();

userRoutes.post("", validateUserCreate, createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);

export { userRoutes };
