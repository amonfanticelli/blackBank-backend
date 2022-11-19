import { AppDataSource } from "../../data-source";
import { Transaction } from "../../entities/transactions.entities";
import { User } from "../../entities/users.entities";

const listUsersTransacionsService = async (userId: string) => {
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

  const userCredited = await transactionsRepository.find({
    where: [{ creditedAccount: userFound!.account }],
  });

  const newUserCredited = userCredited.map((elem) => {
    return { ...elem, type: "credited" };
  });

  const userDebited = await transactionsRepository.find({
    where: [{ debitedAccount: userFound!.account }],
  });

  const newUserDebited = userDebited.map((elem) => {
    return { ...elem, type: "debited" };
  });

  return [...newUserCredited, ...newUserDebited];
};

export { listUsersTransacionsService };
