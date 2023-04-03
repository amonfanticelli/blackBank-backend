"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listAccountById_services_1 = require("../../services/accounts/listAccountById.services");
const listAccountByIdController = async (req, res) => {
    const account = await (0, listAccountById_services_1.listAccountByIdService)(req.user.id);
    return res.status(200).json(account);
};
exports.default = listAccountByIdController;
//# sourceMappingURL=listAccountById.controller.js.map