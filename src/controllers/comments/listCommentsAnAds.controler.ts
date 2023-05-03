import { Request, Response } from "express";
import listCommentsAnAdsService from "../../services/comments/listCommentsAnAds.service";


const listCommentsAnAdsController = async (req: Request, res: Response) => {
    const idAds: string = req.params.idAds

    const comment = await listCommentsAnAdsService(idAds)

    return res.status(200).json(comment)
}

export default listCommentsAnAdsController