import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Address } from "../../entities/adresses.entity";
import User from '../../entities/users.entity';
import { iUserRegisterReq } from "../../interfaces/User/request";
import { iUserResponse } from "../../interfaces/User/response";


export const createUserService = async (userData: iUserRegisterReq): Promise<iUserResponse> => {

    const {
        address,
        name,
        email,
        cpf,
        telephone,
        date_of_birth,
        description,
        buyer
    } = userData

    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address);

    const searchUserByEmail = await userRepository.findOneBy({ email: email });
    const searchAddress = await addressRepository.findOneBy({ id: address });

    if (searchUserByEmail) {
        throw new AppError(409, "Email already exists!");
    };

    if (!searchAddress) {
        throw new AppError(409, "You need to register your address!");
    }

    const user = userRepository.create({
        name: name,
        email: email,
        cpf: cpf,
        password: userData.password,
        telephone: telephone,
        date_of_birth: date_of_birth,
        buyer: buyer,
        description: description,
        address: searchAddress,
    });

    const responseDate = await userRepository.save(user);

    const { password, ...userValues } = responseDate

    return userValues;
}; 