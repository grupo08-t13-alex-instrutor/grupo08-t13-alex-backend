import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError"

const userDeletService = async (idUser: string): Promise<object> => {
    const userRespository = AppDataSource.getRepository(User);

    await userRespository.findOneByOrFail({ id: idUser })
        .catch( reason => { throw new AppError( 404, "Address not exist!" )});

    await userRespository.delete({ id: idUser });

    return {};
}

export { userDeletService }