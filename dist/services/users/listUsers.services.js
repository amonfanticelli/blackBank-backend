"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersService = void 0;
const data_source_1 = require("../../data-source");
const users_entities_1 = require("../../entities/users.entities");
const listUsersService = async () => {
    const accountsRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userFound = await accountsRepository.find();
    return userFound;
};
exports.listUsersService = listUsersService;
//# sourceMappingURL=listUsers.services.js.map