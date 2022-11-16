import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user";
import { Account } from "../../entities/accounts.entities";

const createUserService = async ({
  username,
  password,
}: IUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const accountsRepository = AppDataSource.getRepository(Account);

  const userFound = await userRepository.findOneBy({
    username,
  });

  if (userFound) {
    throw new AppError("User already exists", 409);
  }

  const account = accountsRepository.create({
    balance: 100,
  });

  await accountsRepository.save(account);

  const user = userRepository.create({
    username,
    password: await hash(password, 10),
    account: account,
  });

  await userRepository.save(user);

  return user;
};

export { createUserService };
