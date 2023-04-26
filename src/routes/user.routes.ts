import { Router } from 'express';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { userDeletController } from '../controllers/user/userDelet.controller';
import { userPatchController } from '../controllers/user/userPatch.controller';
import { createUserController } from '../controllers/user/createUser.controller';
import { listAnUserController } from '../controllers/user/listAnUser.controller';
import { listAllUsersController } from '../controllers/user/listAllUsers.controller';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import { userRequestSerializer, userUpdateSerializer } from '../serializers/User/users.serializers';
import listAnUserIdParamsController from '../controllers/user/listAnUserIdParams.controller';

const userRoutes = Router();

userRoutes.post('', ensureDataIsValidMiddleware(userRequestSerializer), createUserController)
userRoutes.get('/allUsers', listAllUsersController)
userRoutes.get('', ensureAuthMiddleware, listAnUserController)
userRoutes.get('/:userId', listAnUserIdParamsController)
userRoutes.patch("", ensureAuthMiddleware, ensureDataIsValidMiddleware(userUpdateSerializer), userPatchController)

userRoutes.delete("", ensureAuthMiddleware, userDeletController)

export default userRoutes
