import { Router } from 'express';
import { createAdressController } from '../controllers/adress/createAdress.controller';
import { listAdressController } from '../controllers/adress/listAdress.controller';
import { updateAdressController } from '../controllers/adress/updateAdress.controller';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';

const adressRoutes = Router();

adressRoutes.post('', createAdressController);
adressRoutes.get('/:adressId', ensureAuthMiddleware, listAdressController);
adressRoutes.patch('/:adressId', ensureAuthMiddleware, ensureAuthMiddleware, updateAdressController);

export { adressRoutes };
