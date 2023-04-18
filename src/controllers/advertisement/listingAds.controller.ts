import { Request, Response } from 'express';
import listingAdsService from '../../services/advertisement/listingAds.service';

const listingAdsController = async (req: Request, res: Response) => {
    const data = await listingAdsService();

    return res.status(200).json(data);
};

export { listingAdsController };
