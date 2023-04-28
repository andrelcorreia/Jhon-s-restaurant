import { Request, Response } from "express";
import { InactiveUsersUseCase } from "./inactiveUsersUseCase";

const inactiveUsersUseCase = new InactiveUsersUseCase();

export class InactiveUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const inactiveUsers = await inactiveUsersUseCase.execute({
      id,
    });

    return response.send({
      statusCode: 200,
      message: "Usuário inativado com sucesso!",
      data: inactiveUsers,
    });
  }
}
