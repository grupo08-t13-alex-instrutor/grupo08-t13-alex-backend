import { listingAdsService } from "../services"
import { Request, Response } from "express";

const listingAdsController = async (req: Request, res: Response) => {

    const data = await listingAdsService()

    return res.status(200).json(data)
}

export default listingAdsController