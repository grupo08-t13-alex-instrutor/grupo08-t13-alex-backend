import { Router } from "express";
import { listingAdsController } from "../controllers";

const listingAdsRoutes = Router();

listingAdsRoutes.use("/all", listingAdsController)

export default listingAdsRoutes