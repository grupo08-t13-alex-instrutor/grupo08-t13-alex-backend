import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import User from '../../database/entities/users.entity';
import { Address } from "../../database/entities/adresses.entity";
import { iUserRequest } from "../../interfaces/User/request";
import { iUserResponse } from "../../interfaces/User/response";


export const createUserService = async (userData: iUserRequest): Promise<iUserResponse> => {

    const {
        addressId,
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

    if (searchUserByEmail) {
        throw new AppError(409, "Email already exists!");
    };

    const searchAddress = await addressRepository.findOneBy({ id: addressId });

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

    await userRepository.save(user).catch(error => console.log(error));

    const { password, ...userWithoutPassword } = user

    return userWithoutPassword
}

