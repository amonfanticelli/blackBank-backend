import { Request, Response } from "express";
import { createTransactionService } from "../../services/transactions/createTransaction.services";

const createTransactionController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const userName = req.user.username;
  const transaction = req.body;
  const createdTransaction = await createTransactionService(
    userId,
    transaction,
    userName
  );

  return res.status(201).json(createdTransaction);
};

export { createTransactionController };
