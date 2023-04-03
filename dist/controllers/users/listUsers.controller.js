"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listUsers_services_1 = require("../../services/users/listUsers.services");
const listUsersController = async (req, res) => {
    const users = await (0, listUsers_services_1.listUsersService)();
    return res.json(users);
};
exports.default = listUsersController;
//# sourceMappingURL=listUsers.controller.js.map