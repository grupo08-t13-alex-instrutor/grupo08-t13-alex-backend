import { Router } from "express";
import { deleteAdvertisementController } from "../controllers/advertisement.controllers";

const advertisementRoutes = Router();

advertisementRoutes.delete('/:advertisementId', deleteAdvertisementController);

export { advertisementRoutes };
