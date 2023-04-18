import { Router } from 'express';
import { deleteAdvertisementController } from '../controllers/advertisement/deleteAds.controllers';
import { listingAdsController } from '../controllers/advertisement/listingAds.controller';
import { createAdsController } from '../controllers/advertisement/createAds.controller';
import { updateAdsController } from '../controllers/advertisement/updateAds.controller';
import { getOneAdController } from '../controllers/advertisement/getOneAd.controller';
import { adsRequestSerializer, adsUpdateSerializer } from '../serializers/ads.serializers';
import returnTestMiddleware from '../middlewares/returntest.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';

const adsRoutes = Router();

adsRoutes.post('', ensureDataIsValidMiddleware(adsRequestSerializer), createAdsController);
adsRoutes.get('', returnTestMiddleware, listingAdsController);
adsRoutes.get('/:advertisementId', returnTestMiddleware, getOneAdController);
adsRoutes.patch('/:advertisementId', ensureDataIsValidMiddleware(adsUpdateSerializer), returnTestMiddleware, updateAdsController);
adsRoutes.delete('/:advertisementId', returnTestMiddleware, deleteAdvertisementController);

export { adsRoutes };
