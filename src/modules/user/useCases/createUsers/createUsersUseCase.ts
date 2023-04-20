import { AppError, AppResponse } from "../../../../helper";
import { createUser } from "../../interfaces/user";
import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export class CreateUsersUseCase {
  async execute({ name, email, password }: createUser): Promise<AppResponse> {
    const emailExists = await userRepository.listByEmail(email);

    if (emailExists) {
      throw new AppError({ message: "Email já em uso" });
    }

    await userRepository.create({ name, email, password });

    return new AppResponse({
      message: "Usuário criado com sucesso!",
      data: emailExists,
    });
  }
}
