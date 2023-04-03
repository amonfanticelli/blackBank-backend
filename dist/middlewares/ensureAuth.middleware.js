"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ensureAuthMiddleware = async (req, res, next) => {
    if (!req.headers) {
        return res.status(401).json({ message: "Token required" });
    }
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Missing authorization token" });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: "Missing authorization token" });
        }
        req.user = {
            id: decoded.sub,
        };
        return next();
    });
};
exports.ensureAuthMiddleware = ensureAuthMiddleware;
//# sourceMappingURL=ensureAuth.middleware.js.map