import { createUser, updateUser, User } from "./user";

export interface IUserRepositories {
  create(props: createUser): Promise<User>;
  listAll(): Promise<User[]>;
  listById(id: string): Promise<User>;
  update(props: updateUser): Promise<User>;
  inactive(id: string): Promise<User>;
}
