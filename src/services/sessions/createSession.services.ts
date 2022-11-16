import { AppDataSource } from "../../data-source";
import { IUser } from "../../interfaces/user";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/users.entities";

const createSessionService = async ({
  username,
  password,
}: IUser): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    username: username,
  });
  if (!user) {
    throw new AppError("Invalid user or password", 403);
  }
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 403);
  }
  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  });
  return token;
};
export { createSessionService };
