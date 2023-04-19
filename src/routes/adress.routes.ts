import { Router } from 'express';
import { createAdressController } from '../controllers/adress/createAdress.controller';
import { listAdressController } from '../controllers/adress/listAdress.controller';
import { updateAdressController } from '../controllers/adress/updateAdress.controller';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { adressUpdateSerializer, adressRequestSerializer } from '../serializers/adress.serializers';


const adressRoutes = Router();

adressRoutes.post('', ensureDataIsValidMiddleware(adressRequestSerializer), createAdressController);
adressRoutes.get('/:adressId', listAdressController);
adressRoutes.patch('/:adressId', ensureAuthMiddleware, ensureDataIsValidMiddleware(adressUpdateSerializer), updateAdressController);

export { adressRoutes };
