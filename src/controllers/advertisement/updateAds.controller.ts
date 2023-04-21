import { Request, Response } from 'express';
import { updateAdsService } from '../../services/advertisement/updateAds.service';
import { IAdUpdateRequest } from '../../interfaces/Ads/request';

const updateAdsController = async (req: Request, res: Response) => {
    const data : IAdUpdateRequest  = req.body;
    const advertisementId: string = req.params.advertisementId;

    const updatedAd = await updateAdsService(data, advertisementId);

    return res.json(updatedAd);
};

export { updateAdsController };
