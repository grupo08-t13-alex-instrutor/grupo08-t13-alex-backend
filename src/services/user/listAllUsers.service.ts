import { AppDataSource } from "../../data-source";
import { allUsersResponseSerializer } from "../../serializers/User/users.serializers";
import Users from '../../database/entities/users.entity';
import { iUserResponse } from "../../interfaces/User/response";

export const listAllUserService = async (): Promise<iUserResponse[]> => {

    const userRepo = AppDataSource.getRepository(Users);

    const users = await userRepo.find();

    const correctUsersFormat = await allUsersResponseSerializer.validate(users, {
        stripUnknown: true
    });

    return correctUsersFormat;
}