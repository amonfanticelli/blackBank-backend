import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts.entities";
import { User } from "../../entities/users.entities";

export const listAccountByIdService = async (id: string): Promise<Account> => {
  const accountsRepository = AppDataSource.getRepository(Account);
  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      account: true,
    },
  });

  return userFound?.account!;
};

// export { listAccountByIdService };
