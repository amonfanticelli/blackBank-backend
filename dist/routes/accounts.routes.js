"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsRoutes = void 0;
const express_1 = require("express");
const listAccountById_controller_1 = __importDefault(require("../controllers/Accounts/listAccountById.controller"));
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const accountsRoutes = (0, express_1.Router)();
exports.accountsRoutes = accountsRoutes;
accountsRoutes.get("", ensureAuth_middleware_1.ensureAuthMiddleware, listAccountById_controller_1.default);
//# sourceMappingURL=accounts.routes.js.map