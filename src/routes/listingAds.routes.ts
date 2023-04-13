import { Router } from "express";
import listingAdsController from "../controllers/listingAds.controller";

const listingAdsRoutes = Router();

listingAdsRoutes.use("/all", listingAdsController)

export default listingAdsRoutes