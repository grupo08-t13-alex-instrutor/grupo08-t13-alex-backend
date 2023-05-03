import { AppDataSource } from "../../data-source";
import { Comment } from "../../database/entities/comments.entity";
import AppError from "../../errors/AppError";


const deleteCommentsAnAdsService = async (commentId: string, userId: string) => {

    const commentRespository = AppDataSource.getRepository(Comment);

    const comment = await commentRespository.findOne({
        where: {
            id: commentId
        },
        relations: {
            user: true
        }
    })


    if (!comment) {
        throw new AppError(404, "comment not exist");
    }

    if (comment.user.id !== userId) {
        throw new AppError(401, "comment not exist");

    }
    commentRespository.delete(comment.id);

    return {}
}

export default deleteCommentsAnAdsService