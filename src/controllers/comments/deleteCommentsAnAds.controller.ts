import { UUID } from "crypto";
import { Request, Response } from "express";
import deleteCommentsAnAdsService from "../../services/comments/deleteCommentsAnAds.service";


const deleteCommentsAnAdsController = async (req: Request, res: Response) => {
    const commentId: string = req.params.commentId
    const userId: string = req.user.id

    const data = await deleteCommentsAnAdsService(commentId, userId)

    return res.status(204).json(data)
}

export default deleteCommentsAnAdsController