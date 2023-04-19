import { AppDataSource }  from "../../data-source";
import AppError from "../../errors/AppError";
import { iUserResponse } from "../../interfaces/User";
import { userResponseSerializer } from "../../serializers/users.serializers"; 
import Users from './../../entities/users.entity';

export const listAnUserService = async (userId: string): Promise<iUserResponse> => {

    const userRepository = AppDataSource.getRepository(Users);
    const user = await userRepository.findOneBy(
        {id: userId}
    ).catch( reason => { throw new AppError( 404, "User not exist!" )})

    const correctUserFormat = await userResponseSerializer.validate(user, {
        stripUnknown: true
    });
    
    return correctUserFormat;
}