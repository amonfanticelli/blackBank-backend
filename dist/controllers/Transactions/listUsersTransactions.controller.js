"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersTransacionsController = void 0;
const listUsersTransactions_services_1 = require("../../services/transactions/listUsersTransactions.services");
const listUsersTransacionsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.query;
    const userTransactions = yield (0, listUsersTransactions_services_1.listUsersTransacionsService)(req.user.id, type);
    return res.status(200).json(userTransactions);
});
exports.listUsersTransacionsController = listUsersTransacionsController;
//# sourceMappingURL=listUsersTransactions.controller.js.map