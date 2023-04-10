import { Router } from "express";
import { deleteAnnouncementController } from "../controllers/announcement.controllers";

const announcementRoutes = Router();

announcementRoutes.delete('/:announcementId', deleteAnnouncementController);

export { announcementRoutes };
