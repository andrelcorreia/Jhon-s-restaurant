import { User } from "../../interfaces/user";
import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export class ListUsersUseCase {
  async execute(): Promise<User> {
    const users = await userRepository.listAll();

    return users;
  }
}
