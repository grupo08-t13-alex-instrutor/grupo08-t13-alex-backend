import { userDeletController } from '../controllers/user/userDelet.controller';
import { userPatchController } from '../controllers/user/userPatch.controller';
import { sessionController } from '../controllers/session/session.controller';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post("/login", sessionController)

userRoutes.patch("", ensureAuthMiddleware, userPatchController)
userRoutes.delete("", ensureAuthMiddleware, userDeletController)

export default userRoutes