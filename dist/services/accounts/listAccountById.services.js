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
exports.listAccountByIdService = void 0;
const data_source_1 = require("../../data-source");
const accounts_entities_1 = require("../../entities/accounts.entities");
const users_entities_1 = require("../../entities/users.entities");
const listAccountByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsRepository = data_source_1.AppDataSource.getRepository(accounts_entities_1.Account);
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const userFound = yield userRepository.findOne({
        where: {
            id: id,
        },
        relations: {
            account: true,
        },
    });
    return userFound === null || userFound === void 0 ? void 0 : userFound.account;
});
exports.listAccountByIdService = listAccountByIdService;
// export { listAccountByIdService };
//# sourceMappingURL=listAccountById.services.js.map