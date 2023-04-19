import { Any } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iUserResponse } from "../../interfaces/User";
import { allUsersResponseSerializer } from "../../serializers/users.serializers";
import Users from './../../entities/users.entity';

export const listAllUserService = async (): Promise<iUserResponse[]> => {

    const userRepo = AppDataSource.getRepository(Users);

    const users = await userRepo.find({
        where: { buyer: false}
    });

    const correctUsersFormat = allUsersResponseSerializer.validate(users, {
        stripUnknown: true
    });
    return correctUsersFormat;
}