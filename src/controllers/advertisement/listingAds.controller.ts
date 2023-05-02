import { Request, Response } from 'express';
import listingAdsService from '../../services/advertisement/listingAds.service';

const listingAdsController = async (req: Request, res: Response) => {

    let { page } = req.query

    if (page === "") {
        page = undefined
    }
    
    const data = await listingAdsService(page);

    return res.status(200).json(data);
};

export { listingAdsController };
