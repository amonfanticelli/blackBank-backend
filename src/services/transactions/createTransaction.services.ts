import { Account } from "../../entities/accounts.entities";
import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transactions.entities";
import { ITransacion } from "../../interfaces/transactions";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";

const createTransactionService = async (
  { usernameCredited, value }: ITransacion,
  userIdDebited: string
) => {
  const transactionsRepository = AppDataSource.getRepository(Transaction);
  const accountsRepository = AppDataSource.getRepository(Account);
  const userRepository = AppDataSource.getRepository(User);

  const userCredited = await userRepository.findOne({
    where: {
      username: usernameCredited,
    },
    relations: {
      account: true,
    },
  });

  if (!userCredited) {
    throw new AppError("User not found");
  }

  const userDebited = await userRepository.findOne({
    where: {
      id: userIdDebited,
    },
    relations: {
      account: true,
    },
  });

  if (userDebited!.id === userCredited.id) {
    throw new AppError("You can't send money to yourself");
  }

  if (value > userDebited!.account.balance) {
    throw new AppError("You don't have enough balance");
  }

  userDebited!.account.balance -= value;
  await accountsRepository.update(
    { id: userDebited!.account.id },
    userDebited!.account
  );

  userCredited.account.balance += value;
  await accountsRepository.update(
    { id: userCredited.account.id },
    userCredited.account
  );

  const transaction = transactionsRepository.create({
    value,
    debitedAccount: userDebited!.account,
    creditedAccount: userCredited.account,
  });

  await transactionsRepository.save(transaction);

  return transaction;
};

export { createTransactionService };
