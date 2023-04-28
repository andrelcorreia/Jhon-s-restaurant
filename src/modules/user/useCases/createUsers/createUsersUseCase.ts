import { AppError, AppResponse } from "../../../../helper";
import { createUser } from "../../interfaces/user";
import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export class CreateUsersUseCase {
  async execute({ name, email, password }: createUser) {
    const emailExists = await userRepository.listByEmail(email);

    if (emailExists) {
      return { message: "Email já em uso" };
    }

    await userRepository.create({ name, email, password });

    return {
      message: "Usuário criado com sucesso!",
      data: emailExists,
    };
  }
}
