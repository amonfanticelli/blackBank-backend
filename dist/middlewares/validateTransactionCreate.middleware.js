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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransactionCreate = exports.transactionCreateSchema = void 0;
const yup = __importStar(require("yup"));
exports.transactionCreateSchema = yup
    .object()
    .shape({
    value: yup
        .number()
        .required("é necessário um valor")
        .min(1, "valor não pode ser menor que 1"),
    usernameCredited: yup
        .string()
        .required("É necessário um destinatário")
        .min(3, "usuário precisa ter no mínimo 3 caracteres"),
});
const validateTransactionCreate = async (req, res, next) => {
    try {
        req.body = await exports.transactionCreateSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });
        next();
    }
    catch (err) {
        return res.status(400).json({
            error: err.errors?.join(", "),
        });
    }
};
exports.validateTransactionCreate = validateTransactionCreate;
//# sourceMappingURL=validateTransactionCreate.middleware.js.map