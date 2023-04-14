import { Router } from 'express';
import { deleteAdvertisementController } from '../controllers/deleteAds.controllers';
import { listingAdsController } from '../controllers/listingAds.controller';
import returnTestMiddleware from '../middlewares/returntest.middleware';
import { createAdsController } from '../controllers/createAds.controller';

const adsRoutes = Router();

adsRoutes.get('', returnTestMiddleware, listingAdsController);
adsRoutes.get('/:advertisementId', returnTestMiddleware, listingAdsController);
adsRoutes.post('', returnTestMiddleware, createAdsController);
adsRoutes.delete(
    '/:advertisementId',
    returnTestMiddleware,
    deleteAdvertisementController
);

export { adsRoutes };
