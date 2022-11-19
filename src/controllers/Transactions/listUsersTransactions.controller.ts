import { Request, Response } from "express";
import { listUsersTransacionsService } from "../../services/transactions/listUsersTransactions.services";

const listUsersTransacionsController = async (req: Request, res: Response) => {
  const { type } = req.query;

  const userTransactions = await listUsersTransacionsService(
    req.user.id,
    type as string
  );

  return res.status(200).json(userTransactions);
};

export { listUsersTransacionsController };
