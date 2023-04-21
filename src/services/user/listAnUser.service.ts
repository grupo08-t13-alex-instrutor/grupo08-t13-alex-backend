import { AppDataSource } from "../../data-source";
import { iUserResponse } from "../../interfaces/User/response";
import { userResponseSerializer } from "../../serializers/User/users.serializers";
import Users from './../../entities/users.entity';



export const listAnUserService = async (userId: string): Promise<iUserResponse> => {

    const userRepository = AppDataSource.getRepository(Users);
    const user = await userRepository.findOneBy(
        { id: userId },
    );

    const correctUserFormat = userResponseSerializer.validate(user, {
        stripUnknown: true
    });

    return correctUserFormat;
}