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
exports.createTransactionService = void 0;
const accounts_entities_1 = require("../../entities/accounts.entities");
const data_source_1 = require("../../data-source");
const transactions_entities_1 = require("../../entities/transactions.entities");
const users_entities_1 = require("../../entities/users.entities");
const appError_1 = require("../../errors/appError");
const createTransactionService = ({ usernameCredited, value }, userIdDebited) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionsRepository = data_source_1.AppDataSource.getRepository(transactions_entities_1.Transaction);
    const accountsRepository = data_source_1.AppDataSource.getRepository(accounts_entities_1.Account);
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userCredited = yield userRepository.findOne({
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
    const userDebited = yield userRepository.findOne({
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
    yield accountsRepository.update({ id: userDebited.account.id }, userDebited.account);
    userCredited.account.balance += value;
    yield accountsRepository.update({ id: userCredited.account.id }, userCredited.account);
    const transaction = transactionsRepository.create({
        value,
        debitedAccount: userDebited.account,
        creditedAccount: userCredited.account,
    });
    yield transactionsRepository.save(transaction);
    return transaction;
});
exports.createTransactionService = createTransactionService;
//# sourceMappingURL=createTransaction.services.js.map