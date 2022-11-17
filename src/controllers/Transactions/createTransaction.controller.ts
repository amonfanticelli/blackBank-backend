import { Request, Response } from 'express';
import { createTransactionService } from '../../services/transactions/createTransaction.services';

const createTransactionController = async (req: Request, res: Response) => {
  const createdTransaction = await createTransactionService(
    req.body,
    req.user.id
  );

  return res.status(201).json(createdTransaction);
};

export { createTransactionController };
