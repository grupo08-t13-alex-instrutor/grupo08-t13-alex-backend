import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import User from '../../entities/users.entity';
import { iUserRequest, iUserResponse } from '../../interfaces/User/index';
import { Address } from "../../entities/adresses.entity";

export const createUserService = async (userData: iUserRequest): Promise<iUserResponse> => {
    const { address, ...user } = userData;

    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address);

    const searchUserByEmail = await userRepository.findOneBy({email: userData.email});
    if (searchUserByEmail){
        throw new AppError(409, "Email already exists");
    };
    
    const searchAddress = await addressRepository.findOneByOrFail({ id: address })
        .catch( reason => { throw new AppError( 409, "Address not found" ) });

    const data = {
        ...user,
        address: {
            ...searchAddress
        }
    }

    const createdUser = userRepository.create(data);
    await userRepository.save(createdUser);

    const { password, ...userWithoutPassword  } = createdUser

    return userWithoutPassword;
}; 
