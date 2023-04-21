import { Router } from 'express';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { userDeletController } from '../controllers/user/userDelet.controller';
import { userPatchController } from '../controllers/user/userPatch.controller';
import { createUserController } from '../controllers/user/createUser.controller';
import { listAnUserController } from '../controllers/user/listAnUser.controller';
import { listAllUsersController } from '../controllers/user/listAllUsers.controller';

const userRoutes = Router();

userRoutes.post('', createUserController)
userRoutes.get('/allUsers', ensureAuthMiddleware, listAllUsersController)
userRoutes.get('', ensureAuthMiddleware, listAnUserController)
userRoutes.patch("", ensureAuthMiddleware, userPatchController)
userRoutes.delete("", ensureAuthMiddleware, userDeletController)

export default userRoutes
