"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionService = void 0;
const accounts_entities_1 = require("../../entities/accounts.entities");
const data_source_1 = require("../../data-source");
const transactions_entities_1 = require("../../entities/transactions.entities");
const users_entities_1 = require("../../entities/users.entities");
const appError_1 = require("../../errors/appError");
const createTransactionService = async ({ usernameCredited, value }, userIdDebited) => {
    const transactionsRepository = data_source_1.AppDataSource.getRepository(transactions_entities_1.Transaction);
    const accountsRepository = data_source_1.AppDataSource.getRepository(accounts_entities_1.Account);
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userCredited = await userRepository.findOne({
        where: {
            username: usernameCredited,
        },
        relations: {
            account: true,
        },
    });
    if (!userCredited) {
        throw new appError_1.AppError("User not found");
    }
    const userDebited = await userRepository.findOne({
        where: {
            id: userIdDebited,
        },
        relations: {
            account: true,
        },
    });
    if (userDebited.id === userCredited.id) {
        throw new appError_1.AppError("You can't send money to yourself");
    }
    if (value > userDebited.account.balance) {
        throw new appError_1.AppError("You don't have enough balance");
    }
    userDebited.account.balance -= value;
    await accountsRepository.update({ id: userDebited.account.id }, userDebited.account);
    userCredited.account.balance += value;
    await accountsRepository.update({ id: userCredited.account.id }, userCredited.account);
    const transaction = transactionsRepository.create({
        value,
        debitedAccount: userDebited.account,
        creditedAccount: userCredited.account,
    });
    await transactionsRepository.save(transaction);
    return transaction;
};
exports.createTransactionService = createTransactionService;
//# sourceMappingURL=createTransaction.services.js.map