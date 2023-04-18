import { Router } from 'express';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import { adsRequestSerializer, adsUpdateSerializer } from '../serializers/ads.serializers';
import returnTestMiddleware from '../middlewares/returntest.middleware';
import { listingAdsController } from '../controllers/adsControllers/listingAds.controller';
import { getOneAdController } from '../controllers/adsControllers/getOneAd.controller';
import { createAdsController } from '../controllers/adsControllers/createAds.controller';
import { deleteAdvertisementController } from '../controllers/adsControllers/deleteAds.controllers';
import { updateAdsController } from '../controllers/adsControllers/updateAds.controller';

const adsRoutes = Router();

adsRoutes.get('', returnTestMiddleware, listingAdsController);
adsRoutes.get('/:advertisementId', returnTestMiddleware, getOneAdController);
adsRoutes.patch('/:advertisementId', ensureDataIsValidMiddleware(adsUpdateSerializer), returnTestMiddleware, updateAdsController);
adsRoutes.post('', ensureDataIsValidMiddleware(adsRequestSerializer), createAdsController);
adsRoutes.delete(
    '/:advertisementId',
    returnTestMiddleware,
    deleteAdvertisementController
);

export { adsRoutes };
