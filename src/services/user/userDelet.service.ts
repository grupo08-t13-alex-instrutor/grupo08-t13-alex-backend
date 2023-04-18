import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError"

const userDeletService = async (idUser: string): Promise<object> => {

    const userRespository = AppDataSource.getRepository(User);
    const findUser = await userRespository.findOneBy({ id: idUser });

    if (!findUser) {
        throw new AppError(404, "User not exists!");
    };

    await userRespository.delete({ id: idUser });

    return {};
}

export { userDeletService }