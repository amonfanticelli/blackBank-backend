"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const createUser_controller_1 = require("../controllers/users/createUser.controller");
const validateUserCreate_middleware_1 = require("../middlewares/validateUserCreate.middleware");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const listUsers_controller_1 = __importDefault(require("../controllers/users/listUsers.controller"));
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("", validateUserCreate_middleware_1.validateUserCreate, createUser_controller_1.createUserController);
userRoutes.get("", ensureAuth_middleware_1.ensureAuthMiddleware, listUsers_controller_1.default);
//# sourceMappingURL=users.routes.js.map