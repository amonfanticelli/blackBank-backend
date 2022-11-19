import { Request, Response, NextFunction } from "express";
import { ITransacion } from "../interfaces/transactions";
import * as yup from "yup";

export const transactionCreateSchema: yup.SchemaOf<ITransacion> = yup
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

export const validateTransactionCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body = await transactionCreateSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    next();
  } catch (err: any) {
    return res.status(400).json({
      error: err.errors?.join(", "),
    });
  }
};
