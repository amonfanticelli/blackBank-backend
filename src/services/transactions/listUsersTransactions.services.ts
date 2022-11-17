import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts.entities";
import { Transaction } from "../../entities/transactions.entities";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";

const listUsersTransacionsService = async (
  userId: string
): Promise<Transaction[]> => {
  const accountsRepository = AppDataSource.getRepository(Account);
  const transactionsRepository = AppDataSource.getRepository(Transaction);
  const usersRepository = AppDataSource.getRepository(User);

  const userFound = await usersRepository.findOneBy({
    id: userId,
  });

  const userTransactions = await transactionsRepository.find({
    where: [
      { debitedAccount: userFound!.account },
      { creditedAccount: userFound!.account },
    ],
  });

  //   if (!accountFound) {
  //     throw new AppError("Id not found");
  //   }

  return userTransactions;
};

export { listUsersTransacionsService };
