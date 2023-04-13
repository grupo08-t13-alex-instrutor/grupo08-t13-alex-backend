import { Request, Response } from 'express';
import { IAdRequest } from '../interfaces/Ads';
import { updateAdsService } from '../services/advertisement/updateAds.service';

const updateAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const userId: string = req.user.id;

    const updatedAd = await updateAdsService(data, userId);
    return res.json(updatedAd);
};

export { updateAdsController };
