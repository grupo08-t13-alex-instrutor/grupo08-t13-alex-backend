import { Request, Response } from "express";
import { deleteAdvertisementService } from "../../services/advertisement/deleteAdvertisement.service";

const deleteAdvertisementController = async ( req: Request, res: Response ) => {
    const advertisementId: string = req.params.advertisementId;
    const deletedAdvertisement = await deleteAdvertisementService( advertisementId );
    
    return res.status(204).json(deletedAdvertisement);
}

export { deleteAdvertisementController };
