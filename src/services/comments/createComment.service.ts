import { AppDataSource } from "../../data-source";
import User from '../../database/entities/users.entity';
import { Comment } from "../../database/entities/comments.entity";
import { Advertisement } from "../../database/entities/adverts.entity";
import { newDataComment, commentsResponse } from "../../interfaces/comments";



const createCommentService = async (data: newDataComment): Promise<commentsResponse> => {
    const { user, advertisement, description } = data

    const commentRepository = AppDataSource.getRepository(Comment)
    const userRepository = AppDataSource.getRepository(User)
    const advertisementRepository = AppDataSource.getRepository(Advertisement)

    const userFilter = await userRepository.findOneByOrFail({ id: user })

    const ads = await advertisementRepository.findOneByOrFail({ id: advertisement });

    const newDataComment = {
        description: description,
        advertisement: ads,
        user: userFilter
    }

    const comment = commentRepository.create({ ...newDataComment });

    await commentRepository.save(comment)

    const { user: { token, password, ...userData }, } = comment

    return {
        id: comment.id,
        description: comment.description,
        createdAt: comment.createdAt,
        user: { ...userData },
        advertisement: { ...comment.advertisement }
    }

}

export default createCommentService