import { Request, Response } from "express";
import { IAdRequest } from "../interfaces/Ads";
import { createAdsService } from "../services/advertisement/createAds.service";

const createAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const userId: string = 'd63bfea3-454f-4eea-a326-710b347bad5d';
    const createdAd = await createAdsService(data, userId);
    return res.status(201).json(createdAd);
};

export { createAdsController };
