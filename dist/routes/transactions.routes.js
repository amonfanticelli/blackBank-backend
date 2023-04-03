"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRoutes = void 0;
const express_1 = require("express");
const createTransaction_controller_1 = require("../controllers/Transactions/createTransaction.controller");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const validateTransactionCreate_middleware_1 = require("../middlewares/validateTransactionCreate.middleware");
const listUsersTransactions_controller_1 = require("../controllers/Transactions/listUsersTransactions.controller");
const transactionsRoutes = (0, express_1.Router)();
exports.transactionsRoutes = transactionsRoutes;
transactionsRoutes.post("", validateTransactionCreate_middleware_1.validateTransactionCreate, ensureAuth_middleware_1.ensureAuthMiddleware, createTransaction_controller_1.createTransactionController);
transactionsRoutes.get("", ensureAuth_middleware_1.ensureAuthMiddleware, listUsersTransactions_controller_1.listUsersTransacionsController);
//# sourceMappingURL=transactions.routes.js.map