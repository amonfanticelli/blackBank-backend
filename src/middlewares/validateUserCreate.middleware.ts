import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user";
import * as yup from "yup";

export const userCreateSchema: yup.SchemaOf<IUser> = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup
    .string()
    .required()
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .min(8),
});

export const validateUserCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body = await userCreateSchema.validate(req.body, {
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
