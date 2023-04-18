import { Router } from "express";
import User from "../entities/users.entity";
import { createUserController } from "../controllers/userControllers/createUser.controller";
import { listAnUserController } from "../controllers/userControllers/listAnUser.controller";

const userRouter = Router();

userRouter.post('', createUserController)
userRouter.get('/:userId', listAnUserController)

export default userRouter