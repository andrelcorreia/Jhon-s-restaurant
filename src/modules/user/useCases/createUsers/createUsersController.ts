import { CreateUsersUseCase } from "./createUsersUseCase";
import { Request, Response } from "express";
import { createUser } from "../../interfaces/user";

const createUsersUseCase = new CreateUsersUseCase();

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body as createUser;

    const createUsers = await createUsersUseCase.execute({
      name,
      email,
      password,
    });

    return response.send(createUsers);
  }
}
