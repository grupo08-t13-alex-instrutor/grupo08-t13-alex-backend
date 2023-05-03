import { Request, Response } from "express";
import patchCommentsAnAdsService from "../../services/comments/patchCommentsAnAds.service";


const patchCommentsAnAdsController = async (req: Request, res: Response) => {
    const commentId: string = req.params.commentId
    const description: string = req.body.description
    const userId: string = req.user.id

    const data = await patchCommentsAnAdsService(commentId, userId, description)

    return res.status(200).json(data)
}

export default patchCommentsAnAdsController