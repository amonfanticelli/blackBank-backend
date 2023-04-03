"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../data-source");
const users_entities_1 = require("../../entities/users.entities");
const appError_1 = require("../../errors/appError");
const accounts_entities_1 = require("../../entities/accounts.entities");
const createUserService = async ({ username, password, }) => {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const accountsRepository = data_source_1.AppDataSource.getRepository(accounts_entities_1.Account);
    const userFound = await userRepository.findOneBy({
        username,
    });
    if (userFound) {
        throw new appError_1.AppError("User already exists", 409);
    }
    const account = accountsRepository.create({
        balance: 100,
    });
    await accountsRepository.save(account);
    const user = userRepository.create({
        username,
        password: await (0, bcryptjs_1.hash)(password, 10),
        account: account,
    });
    await userRepository.save(user);
    return user;
};
exports.createUserService = createUserService;
//# sourceMappingURL=createUser.services.js.map