import { Request, Response } from "express";
import { getOneAdService } from "../services/advertisement/getOneAd.service";

const getOneAdController = async ( req: Request, res: Response ) => {
    const advertisementId: string = req.params.advertisementId;
    const data = await getOneAdService( advertisementId );
    
    return res.status(204).json(data);
};

export { getOneAdController };