import { Router } from 'express';
import { createAdressController } from '../controllers/adress/createAdress.controller';
import { listAdressController } from '../controllers/adress/listAdress.controller';
import { updateAdressController } from '../controllers/adress/updateAdress.controller';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { ensureIsOwnerAddressMiddleware } from '../middlewares/ensureIsOwnerAddress.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import { adressRequestSerializer, adressUpdateSerializer } from '../serializers/Adress/adress.serializers';

const adressRoutes = Router();

adressRoutes.post('', ensureDataIsValidMiddleware(adressRequestSerializer), createAdressController);
adressRoutes.get('/:adressId', ensureAuthMiddleware, ensureIsOwnerAddressMiddleware, listAdressController);
adressRoutes.patch('/:adressId', ensureAuthMiddleware, ensureIsOwnerAddressMiddleware, ensureDataIsValidMiddleware(adressUpdateSerializer), updateAdressController);
///:adressId

export { adressRoutes };
