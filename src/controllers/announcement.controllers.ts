import { Request, Response } from "express";
import { deleteAnnouncementService } from "../services/announcements/deleteAnnouncement.service";

const deleteAnnouncementController = async ( req: Request, res: Response ) => {
    const announcementId: string = req.params.announcementId;
    const deletedAnnouncement = await deleteAnnouncementService( announcementId );
    
    return res.status(204).json(deletedAnnouncement);
}

export { deleteAnnouncementController };
