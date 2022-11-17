import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts.entities";

const listAccountByIdService = async (id: string): Promise<Account> => {
  const accountsRepository = AppDataSource.getRepository(Account);

  const accountFound = await accountsRepository.findOneBy({
    id: id,
  });

  return accountFound!;
};

export { listAccountByIdService };
