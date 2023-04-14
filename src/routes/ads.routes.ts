import { Router } from 'express';
import { deleteAdvertisementController } from '../controllers/deleteAds.controllers';
import { listingAdsController } from '../controllers/listingAds.controller';
import returnTestMiddleware from '../middlewares/returntest.middleware';

const adsRoutes = Router();

adsRoutes.get('', returnTestMiddleware, listingAdsController);
adsRoutes.get('/:advertisementId', returnTestMiddleware, listingAdsController);
adsRoutes.post('', returnTestMiddleware, listingAdsController);
adsRoutes.delete(
    '/:advertisementId',
    returnTestMiddleware,
    deleteAdvertisementController
);

export { adsRoutes };
