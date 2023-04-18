import { Request, Response } from "express";
import { IAdRequest } from "../../interfaces/Ads";
import { createAdsService } from "../../services/advertisement/createAds.service";

const createAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const userId: string = '27d4a406-9930-4e7e-89fa-37b7f8e16e84';
    const createdAd = await createAdsService(data, userId);
    return res.status(201).json(createdAd);
};

export { createAdsController };
