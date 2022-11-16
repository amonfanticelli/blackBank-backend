import { listAccountByIdService } from "../../services/accounts/listAccountById.services";
import { Request, Response } from "express";

const listAccountByIdController = async (req: Request, res: Response) => {
  const account = await listAccountByIdService(req.params.id);

  return res.status(200).json(account);
};

export default listAccountByIdController;
