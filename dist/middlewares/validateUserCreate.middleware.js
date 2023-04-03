"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.validateUserCreate = exports.userCreateSchema = void 0;
const yup = __importStar(require("yup"));
exports.userCreateSchema = yup.object().shape({
    username: yup.string().required().min(3),
    password: yup
        .string()
        .required()
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .min(8, "Deve conter ao menos 8 caracteres"),
});
const validateUserCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        req.body = yield exports.userCreateSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });
        next();
    }
    catch (err) {
        return res.status(400).json({
            error: (_a = err.errors) === null || _a === void 0 ? void 0 : _a.join(", "),
        });
    }
});
exports.validateUserCreate = validateUserCreate;
//# sourceMappingURL=validateUserCreate.middleware.js.map