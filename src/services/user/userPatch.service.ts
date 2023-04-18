import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../erros/AppError"


const userPatchService = async ( dataUpdate, idUser ) => {

    const userRespository = AppDataSource.getRepository(User);
    const findUser = await userRespository.findOneBy({ id: idUser });
    
    if ( !findUser ) {
        throw new AppError(404, "User not exists!");
    };

    if( dataUpdate.password ){

        const updateUser = userRespository.create({
            ...foundUser,
            ...dataUpdate,
            password: hashSync(`${dataUpdate.password}`, 10),
        });
        
        return await userRespository.save(updateUser);
    }

    const updateUser = userRespository.create({
        ...foundUser,
        ...dataUpdate,
    });
    
    const saveDataUpdateUser = await userRespository.save(updateUser);
    
    return saveDataUpdateUser;
}

export { userPatchService }