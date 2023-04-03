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
exports.listUsersTransacionsService = void 0;
const data_source_1 = require("../../data-source");
const transactions_entities_1 = require("../../entities/transactions.entities");
const users_entities_1 = require("../../entities/users.entities");
const listUsersTransacionsService = (userId, type) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionsRepository = data_source_1.AppDataSource.getRepository(transactions_entities_1.Transaction);
    const usersRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userFound = yield usersRepository.findOne({
        where: {
            id: userId,
        },
        relations: {
            account: true,
        },
    });
    const where = [];
    if (type === "credited" || !type) {
        where.push({ creditedAccount: userFound.account });
    }
    if (type === "debited" || !type) {
        where.push({ debitedAccount: userFound.account });
    }
    const transactions = yield transactionsRepository.find({
        where,
        relations: {
            debitedAccount: true,
            creditedAccount: true,
        },
    });
    return transactions.map((transaction) => (Object.assign(Object.assign({}, transaction), { type: transaction.debitedAccount.id === (userFound === null || userFound === void 0 ? void 0 : userFound.account.id)
            ? "debited"
            : "credited", creditedAccount: undefined, debitedAccount: undefined })));
});
exports.listUsersTransacionsService = listUsersTransacionsService;
//# sourceMappingURL=listUsersTransactions.services.js.map