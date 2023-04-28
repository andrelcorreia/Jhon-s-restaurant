import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUsers/createUsersController";
import { InactiveUsersController } from "../modules/user/useCases/inactiveUsers/inactiveUsersController";
import { ListUsersController } from "../modules/user/useCases/listUsers/listUsersController";
import { UpdateUsersController } from "../modules/user/useCases/updateUsers/updateUsersController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUsersController = new UpdateUsersController();
const inactiveUsersController = new InactiveUsersController();
const usersRouters = Router();

usersRouters.post("/", createUserController.handle);
usersRouters.get("/", listUsersController.handle);
usersRouters.put("/", updateUsersController.handle);
usersRouters.patch("/", inactiveUsersController.handle);

export { usersRouters };
