"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionController = void 0;
const createTransaction_services_1 = require("../../services/transactions/createTransaction.services");
const createTransactionController = async (req, res) => {
    const createdTransaction = await (0, createTransaction_services_1.createTransactionService)(req.body, req.user.id);
    return res.status(201).json(createdTransaction);
};
exports.createTransactionController = createTransactionController;
//# sourceMappingURL=createTransaction.controller.js.map