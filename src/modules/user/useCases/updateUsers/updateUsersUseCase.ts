import { updateUser } from "../../interfaces/user";
import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export class UpdateUsersUseCase {
  async execute({ id, name }: updateUser) {
    const userExist = await userRepository.listById(id);

    if (!userExist) {
      return { message: "Id não encontrado" };
    }

    const updateUser = await userRepository.update({ id, name });

    return updateUser;
  }
}
