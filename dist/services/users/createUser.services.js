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
exports.createUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../data-source");
const users_entities_1 = require("../../entities/users.entities");
const appError_1 = require("../../errors/appError");
const accounts_entities_1 = require("../../entities/accounts.entities");
const createUserService = ({ username, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const accountsRepository = data_source_1.AppDataSource.getRepository(accounts_entities_1.Account);
    const userFound = yield userRepository.findOneBy({
        username,
    });
    if (userFound) {
        throw new appError_1.AppError("User already exists", 409);
    }
    const account = accountsRepository.create({
        balance: 100,
    });
    yield accountsRepository.save(account);
    const user = userRepository.create({
        username,
        password: yield (0, bcryptjs_1.hash)(password, 10),
        account: account,
    });
    yield userRepository.save(user);
    return user;
});
exports.createUserService = createUserService;
//# sourceMappingURL=createUser.services.js.map