import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transactions.entities";
import { User } from "../../entities/users.entities";

const listUsersTransacionsService = async (userId: string, type?: string) => {
  const transactionsRepository = AppDataSource.getRepository(Transaction);
  const usersRepository = AppDataSource.getRepository(User);

  const userFound = await usersRepository.findOne({
    where: {
      id: userId,
    },

    relations: {
      account: true,
    },
  });

  const where: FindOptionsWhere<Transaction>[] = [];

  if (type === "credited" || !type) {
    where.push({ creditedAccount: userFound!.account });
  }

  if (type === "debited" || !type) {
    where.push({ debitedAccount: userFound!.account });
  }

  const transactions = await transactionsRepository.find({
    where,
    relations: {
      debitedAccount: true,
      creditedAccount: true,
    },
  });

  return transactions.map((transaction) => ({
    ...transaction,
    type:
      transaction.debitedAccount.id === userFound?.account.id
        ? "debited"
        : "credited",
    creditedAccount: undefined,
    debitedAccount: undefined,
  }));
};

export { listUsersTransacionsService };
