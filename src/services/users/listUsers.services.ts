import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";

const listUsersService = async (): Promise<User[]> => {
  const accountsRepository = AppDataSource.getRepository(User);

  const userFound = await accountsRepository.find();

  return userFound;
};

export { listUsersService };
