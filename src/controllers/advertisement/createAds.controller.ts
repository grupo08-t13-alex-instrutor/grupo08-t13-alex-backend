import { Request, Response } from "express";
import { IAdRequest } from "../../interfaces/Ads";
import { createAdsService } from "../../services/advertisement/createAds.service";

const createAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const userId: string = req.user.id;
    const createdAd = await createAdsService(data, userId);
    return res.status(201).json(createdAd);
};

export { createAdsController };
