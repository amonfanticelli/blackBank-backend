"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersTransacionsService = void 0;
const data_source_1 = require("../../data-source");
const transactions_entities_1 = require("../../entities/transactions.entities");
const users_entities_1 = require("../../entities/users.entities");
const listUsersTransacionsService = async (userId, type) => {
    const transactionsRepository = data_source_1.AppDataSource.getRepository(transactions_entities_1.Transaction);
    const usersRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userFound = await usersRepository.findOne({
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
    const transactions = await transactionsRepository.find({
        where,
        relations: {
            debitedAccount: true,
            creditedAccount: true,
        },
    });
    return transactions.map((transaction) => ({
        ...transaction,
        type: transaction.debitedAccount.id === userFound?.account.id
            ? "debited"
            : "credited",
        creditedAccount: undefined,
        debitedAccount: undefined,
    }));
};
exports.listUsersTransacionsService = listUsersTransacionsService;
//# sourceMappingURL=listUsersTransactions.services.js.map