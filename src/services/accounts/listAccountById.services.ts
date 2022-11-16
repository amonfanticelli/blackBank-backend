import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts.entities";
import { AppError } from "../../errors/appError";

const listAccountByIdService = async (id: string): Promise<Account> => {
  const accountsRepository = AppDataSource.getRepository(Account);

  const accountFound = await accountsRepository.findOneBy({
    id: id,
  });

  if (!accountFound) {
    throw new AppError("Id not found");
  }
  return accountFound;
};

export { listAccountByIdService };
