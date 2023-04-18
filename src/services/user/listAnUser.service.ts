import { AppDataSource }  from "../../data-source";
import { iUserResponse } from "../../interfaces/User";
import { userResponseSerializer } from "../../serializers/users.serializers"; 
import Users from './../../entities/users.entity';

export const listAnUserService = async (userId: string): Promise<iUserResponse> => {

    const userRepository = AppDataSource.getRepository(Users);
    const user = await userRepository.findOneBy(
        {id: userId}
    );

    const correctUserFormat = userResponseSerializer.validate(user, {
        stripUnknown: true
    });
    return correctUserFormat;
}