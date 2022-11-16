import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.services";

const createUserController = async (req: Request, res: Response) => {
  const createdUser = await createUserService(req.body);

  return res.status(201).json(createdUser);
};

export { createUserController };
