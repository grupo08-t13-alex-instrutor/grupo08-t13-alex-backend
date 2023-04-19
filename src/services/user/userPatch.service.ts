import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError"
import { iUserResponse, iUserUpdate } from "../../interfaces/User";


const userPatchService = async (dataUpdate: iUserUpdate, idUser: string): Promise<iUserResponse> => {

    const userRespository = AppDataSource.getRepository(User);
    const findUser = await userRespository.findOneBy({ id: idUser });

    if (!findUser) {
        throw new AppError(404, "User not exists!");
    };

    if (dataUpdate.password) {

        const updateUser = userRespository.create({
            ...findUser,
            ...dataUpdate,
            password: hashSync(`${dataUpdate.password}`, 10),
        });

        await userRespository.save(updateUser);

        const { password, ...dataResponse } = updateUser;

        return dataResponse;
    }

    const updateUser = userRespository.create({
        ...findUser,
        ...dataUpdate,
    });

    const saveDataUpdateUser = await userRespository.save(updateUser);    

    const { password, ...dataResponse } = saveDataUpdateUser;

    return dataResponse;
}

export { userPatchService }