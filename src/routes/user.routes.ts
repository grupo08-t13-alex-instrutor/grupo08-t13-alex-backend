import { Router } from 'express';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import { userDeletController } from '../controllers/user/userDelet.controller';
import { userPatchController } from '../controllers/user/userPatch.controller';
import { sessionController } from '../controllers/session/session.controller';
import { userRequestSerializer, userUpdateSerializer } from '../serializers/users.serializers';
import { createUserController } from '../controllers/user/createUser.controller';
import { listAnUserController } from '../controllers/user/listAnUser.controller';
import { listAllUsersController } from '../controllers/user/listAllUsers.controller';

const userRoutes = Router();

userRoutes.post("/login", sessionController)

userRoutes.post('', ensureDataIsValidMiddleware(userRequestSerializer), createUserController)
userRoutes.get('/:userId', listAnUserController)
userRoutes.get('/allUsers', listAllUsersController)
userRoutes.patch("", ensureDataIsValidMiddleware(userUpdateSerializer), ensureAuthMiddleware, userPatchController)
userRoutes.delete("", ensureAuthMiddleware, userDeletController)

export default userRoutes
