import { Router } from 'express';
import { deleteAdvertisementController } from '../controllers/advertisement/deleteAds.controllers';
import { listingAdsController } from '../controllers/advertisement/listingAds.controller';
import { createAdsController } from '../controllers/advertisement/createAds.controller';
import { updateAdsController } from '../controllers/advertisement/updateAds.controller';
import { getOneAdController } from '../controllers/advertisement/getOneAd.controller';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import { ensureIsNotBuyerMiddleware } from '../middlewares/ensureIsNotBuyer.middleware';
import { ensureIsOwnerAdMiddleware } from '../middlewares/ensureIsOwnerAd.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import { adsRequestSerializer, adsUpdateSerializer } from '../serializers/Ads/ads.serializers';
const adsRoutes = Router();

adsRoutes.post('', ensureAuthMiddleware, ensureIsNotBuyerMiddleware, ensureDataIsValidMiddleware(adsRequestSerializer), createAdsController);
adsRoutes.get('', listingAdsController);
adsRoutes.get('/:advertisementId', getOneAdController);
adsRoutes.patch('/:advertisementId', ensureAuthMiddleware, ensureIsNotBuyerMiddleware, ensureIsOwnerAdMiddleware, ensureDataIsValidMiddleware(adsUpdateSerializer), updateAdsController);
adsRoutes.delete('/:advertisementId', ensureAuthMiddleware, ensureIsNotBuyerMiddleware, ensureIsOwnerAdMiddleware, deleteAdvertisementController);


export { adsRoutes };
