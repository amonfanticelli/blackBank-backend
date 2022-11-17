import { Request, Response, NextFunction } from 'express';
import { ITransacion } from '../interfaces/transactions';
import * as yup from 'yup';

export const transactionCreateSchema: yup.SchemaOf<ITransacion> = yup
  .object()
  .shape({
    value: yup.number().required().min(1),
    usernameCredited: yup.string().required().min(3),
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
      error: err.errors?.join(', '),
    });
  }
};
