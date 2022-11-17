import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts.entities";
import { Transaction } from "../../entities/transactions.entities";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";

const listTransacionByIdService = async (
  id: string
): Promise<Transaction[]> => {
  const accountsRepository = AppDataSource.getRepository(Account);
  const transactionsRepository = AppDataSource.getRepository(Transaction);
  const usersRepository = AppDataSource.getRepository(User);

  const userFound = await usersRepository.findOneBy({
    id: id,
  });

  const userTransactions = await transactionsRepository.find({
    where: {},
  });

  userFound?.account.id;
  //   if (!accountFound) {
  //     throw new AppError("Id not found");
  //   }
  return transactionsFound;
};

export { listTransacionByIdService };
