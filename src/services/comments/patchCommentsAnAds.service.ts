import { AppDataSource } from "../../data-source";
import { Comment } from "../../database/entities/comments.entity";
import AppError from "../../errors/AppError";



const patchCommentsAnAdsService = async (commentId: string, userId: string, description: string) => {

    const commentRespository = AppDataSource.getRepository(Comment);

    const comment = await commentRespository.findOne({
        where: {
            id: commentId
        },
        relations: {
            user: true,
            advertisement: true
        }
    })


    if (!comment) {
        throw new AppError(404, "comment not exist");
    }

    if (comment.user.id !== userId) {
        throw new AppError(401, "you not permission patch comment");

    }

    const updateComment = commentRespository.create({
        ...comment,
        description: description
    });

    await commentRespository.save(updateComment)

    const { user: { token, password, ...userData }, } = updateComment

    return {
        id: updateComment.id,
        description: updateComment.description,
        createdAt: updateComment.createdAt,
        user: { ...userData },
        advertisement: { ...updateComment.advertisement }
    }
}

export default patchCommentsAnAdsService