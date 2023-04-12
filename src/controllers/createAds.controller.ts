import { Request, Response } from 'express';
import { IAdRequest } from '../interfaces/Ads';

const createAdsController = async (req: Request, res: Response) => {
    const data: IAdRequest = req.body;
    const userId: string = req.user.id;

    const createdAd = await createAdService(data, userId);
    return res.status(201).json(createdAd);
};

export { createAdsController };
function createAdService(data: any, userId: string) {
    throw new Error('Function not implemented.');
}
