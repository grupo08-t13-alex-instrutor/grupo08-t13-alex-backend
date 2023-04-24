import { AppDataSource } from "../../data-source";
import { iUserResponse } from "../../interfaces/User/response";
import { userResponseSerializer } from "../../serializers/User/users.serializers";
import AppError from "../../errors/AppError";
import Users from './../../entities/users.entity';


export const listAnUserService = async (userId: string): Promise<iUserResponse> => {

    const userRepository = AppDataSource.getRepository(Users);

    const user = await userRepository.findOneBy({ id: userId })
        .catch(reason => { throw new AppError(404, "User not exist!") })

    const correctUserFormat = await userResponseSerializer.validate(user, {
        stripUnknown: true
    });

    return correctUserFormat;
}