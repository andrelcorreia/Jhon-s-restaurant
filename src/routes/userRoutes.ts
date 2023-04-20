import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUsers/createUsersController";

const createUserController = new CreateUserController();

const usersRouters = Router();

usersRouters.post("/", createUserController.handle);

export { usersRouters };
