import { Router } from 'express';
import { deleteAdvertisementController } from '../controllers/advertisement/deleteAds.controllers';
import { listingAdsController } from '../controllers/advertisement/listingAds.controller';
import { createAdsController } from '../controllers/advertisement/createAds.controller';
import { updateAdsController } from '../controllers/advertisement/updateAds.controller';
import { getOneAdController } from '../controllers/advertisement/getOneAd.controller';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';

const adsRoutes = Router();

adsRoutes.post('', ensureAuthMiddleware, createAdsController);
adsRoutes.delete('/:advertisementId', ensureAuthMiddleware, deleteAdvertisementController);
adsRoutes.patch('/:advertisementId', ensureAuthMiddleware, updateAdsController);

adsRoutes.get('', listingAdsController);
adsRoutes.get('/:advertisementId', getOneAdController);

export { adsRoutes };
