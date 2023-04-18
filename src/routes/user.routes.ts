import { Router } from "express";
import User from "../entities/users.entity";
import { createUserController } from "../controllers/userControllers/createUser.controller";

const userRouter = Router();

userRouter.post('', createUserController)

export default userRouter