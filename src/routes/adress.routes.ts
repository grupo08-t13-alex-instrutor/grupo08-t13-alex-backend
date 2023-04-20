import { Router } from 'express';
import { createAdressController } from '../controllers/adress/createAdress.controller';
import { listAdressController } from '../controllers/adress/listAdress.controller';
import { updateAdressController } from '../controllers/adress/updateAdress.controller';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { adressUpdateSerializer, adressRequestSerializer } from '../serializers/adress.serializers';
import { ensureIsOwnerAddressMiddleware } from '../middlewares/ensureIsOwnerAddress.middleware';


const adressRoutes = Router();

adressRoutes.post('', ensureDataIsValidMiddleware(adressRequestSerializer), createAdressController);
adressRoutes.get('/:adressId', ensureAuthMiddleware, ensureIsOwnerAddressMiddleware, listAdressController);
adressRoutes.patch('/:adressId', ensureAuthMiddleware, ensureIsOwnerAddressMiddleware, ensureDataIsValidMiddleware(adressUpdateSerializer), updateAdressController);

export { adressRoutes };
