import { Request, Response } from "express";
import { AppResponse } from "../../../../helper";
import { ListUsersUseCase } from "./listUsersUseCase";

const listUsersUseCase = new ListUsersUseCase();

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsers = await listUsersUseCase.execute();

    return response.send({
      statusCode: 200,
      message: "Listagem realizada com sucesso!",
      data: listUsers,
    });
  }
}
