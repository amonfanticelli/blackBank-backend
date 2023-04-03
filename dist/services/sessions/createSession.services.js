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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionService = void 0;
const data_source_1 = require("../../data-source");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../../errors/appError");
const users_entities_1 = require("../../entities/users.entities");
const createSessionService = ({ username, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.User);
    const user = yield userRepository.findOneBy({
        username: username,
    });
    if (!user) {
        throw new appError_1.AppError("Invalid user or password", 401);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
    if (!passwordMatch) {
        throw new appError_1.AppError("Invalid user or password", 401);
    }
    const token = jsonwebtoken_1.default.sign({}, process.env.SECRET_KEY, {
        expiresIn: "24h",
        subject: user.id,
    });
    return token;
});
exports.createSessionService = createSessionService;
//# sourceMappingURL=createSession.services.js.map