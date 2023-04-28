import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export class InactiveUsersUseCase {
  async execute(id) {
    const userExist = await userRepository.listById(id);

    if (!userExist) {
      return { message: "Id não encontrado" };
    }

    const updateUser = await userRepository.inactive(id);

    return updateUser;
  }
}
