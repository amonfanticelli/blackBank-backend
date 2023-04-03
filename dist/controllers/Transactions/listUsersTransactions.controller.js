"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersTransacionsController = void 0;
const listUsersTransactions_services_1 = require("../../services/transactions/listUsersTransactions.services");
const listUsersTransacionsController = async (req, res) => {
    const { type } = req.query;
    const userTransactions = await (0, listUsersTransactions_services_1.listUsersTransacionsService)(req.user.id, type);
    return res.status(200).json(userTransactions);
};
exports.listUsersTransacionsController = listUsersTransacionsController;
//# sourceMappingURL=listUsersTransactions.controller.js.map