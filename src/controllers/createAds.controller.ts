import { Request, Response } from "express";
import { IAdRequest } from "../interfaces/Ads";
import { createAdsService } from "../services/advertisement/createAds.service";

const createAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const userId: string = 'e89853ee-4cc2-4eef-a4e1-f00fe86a12c2';
    console.log(data, userId)
    const createdAd = await createAdsService(data, userId);
    return res.status(201).json(createdAd);
};

export { createAdsController };
