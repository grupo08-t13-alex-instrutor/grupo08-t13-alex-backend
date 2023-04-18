import { Router } from "express";
import User from "../entities/users.entity";
import { createUserController } from "../controllers/userControllers/createUser.controller";
import { listAnUserController } from "../controllers/userControllers/listAnUser.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userRequestSerializer } from "../serializers/users.serializers";

const userRouter = Router();

userRouter.post('', ensureDataIsValidMiddleware(userRequestSerializer), createUserController)
userRouter.get('/:userId', listAnUserController)

export default userRouter