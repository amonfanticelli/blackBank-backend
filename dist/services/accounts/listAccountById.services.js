"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAccountByIdService = void 0;
const data_source_1 = require("../../data-source");
const accounts_entities_1 = require("../../entities/accounts.entities");
const users_entities_1 = require("../../entities/users.entities");
const listAccountByIdService = async (id) => {
    const accountsRepository = data_source_1.AppDataSource.getRepository(accounts_entities_1.Account);
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userFound = await userRepository.findOne({
        where: {
            id: id,
        },
        relations: {
            account: true,
        },
    });
    return userFound?.account;
};
exports.listAccountByIdService = listAccountByIdService;
// export { listAccountByIdService };
//# sourceMappingURL=listAccountById.services.js.map