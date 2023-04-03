"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const createUser_services_1 = require("../../services/users/createUser.services");
const createUserController = async (req, res) => {
    const createdUser = await (0, createUser_services_1.createUserService)(req.body);
    return res.status(201).json(createdUser);
};
exports.createUserController = createUserController;
//# sourceMappingURL=createUser.controller.js.map