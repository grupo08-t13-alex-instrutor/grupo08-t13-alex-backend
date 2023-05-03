import { Request, Response } from "express";
import createCommentService from "../../services/comments/createComment.service";
import { newDataComment } from "../../interfaces/comments";

const createCommentController = async (req: Request, res: Response) => {

    const data: newDataComment = { ...req.body, user: req.user.id, advertisement: req.params.idAds }

    const comment = await createCommentService(data)

    return res.status(200).json(comment)

}

export default createCommentController