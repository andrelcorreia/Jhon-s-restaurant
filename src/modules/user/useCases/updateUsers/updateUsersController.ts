import { Request, Response } from "express";
import { UpdateUsersUseCase } from "./updateUsersUseCase";

const updateUsersUseCase = new UpdateUsersUseCase();

export class UpdateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateUsers = await updateUsersUseCase.execute({
      id,
      name,
    });

    return response.send({
      statusCode: 200,
      message: "Usuário atualizado com sucesso!",
      data: updateUsers,
    });
  }
}
