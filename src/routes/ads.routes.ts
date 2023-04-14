import { Router } from "express";
import { createAdsController } from "../controllers/createAds.controller";
import { deleteAdvertisementController } from "../controllers/deleteAds.controllers";
import { listingAdsController } from "../controllers/listingAds.controller";
import { updateAdsController } from "../controllers/updateAds.controller";
import returnTestMiddleware from "../middlewares/returntest.middleware";

const adsRoutes = Router();

adsRoutes.get("", returnTestMiddleware, listingAdsController);
adsRoutes.get("/:advertisementId", returnTestMiddleware, listingAdsController);

adsRoutes.patch("/:advertisementId", returnTestMiddleware, updateAdsController);

adsRoutes.post("", returnTestMiddleware, createAdsController);

adsRoutes.delete(
    "/:advertisementId",
    returnTestMiddleware,
    deleteAdvertisementController
);

export { adsRoutes };
