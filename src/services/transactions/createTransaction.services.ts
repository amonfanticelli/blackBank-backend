import { Account } from "../../entities/accounts.entities";
import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transactions.entities";
import { ITransacion } from "../../interfaces/transactions";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";
import { Request, Response } from "express";

const createTransactionService = async (
  req: Request,
  { value }: ITransacion,
  username: string
) => {
  const transactionsRepository = AppDataSource.getRepository(Transaction);
  const accountsRepository = AppDataSource.getRepository(Account);
  const userRepository = AppDataSource.getRepository(User);

  const userCredited = await userRepository.findOne({
    where: {
      username: username,
    },
    relations: {
      account: true,
    },
  });

  const userDebited = await userRepository.findOne({
    where: {
      id: req.user.id,
    },
    relations: {
      account: true,
    },
  });

  if (value > userDebited!.account.balance) {
    throw new AppError("You don't have enough balance");
  }

  await accountsRepository.update(
    {
      id: userDebited!.account.id,
    },
    { balance: userDebited!.account.balance - value }
  );

  const transaction = transactionsRepository.create({
    value,
    debitedAccount: userDebited!.account,
    creditedAccount: userCredited!.account,
  });

  await transactionsRepository.save(transaction);

  return transaction;
};

export { createTransactionService };
