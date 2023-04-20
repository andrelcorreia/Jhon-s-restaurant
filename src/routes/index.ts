import { Router } from "express";
import { usersRouters } from "./userRoutes";

const router = Router();

router.use("/users", usersRouters);

export { router };
