import { Request, Response } from 'express';
import { IAdRequest } from '../interfaces/Ads';
import { updateAdsService } from '../services/advertisement/updateAds.service';

const updateAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const  advertisementId: string = req.params.advertisementId;

    const updatedAd = await updateAdsService(data, advertisementId);
    return res.json(updatedAd);
};

export { updateAdsController };
