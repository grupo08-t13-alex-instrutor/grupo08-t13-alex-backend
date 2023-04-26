import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import { User } from "../../entities/users.entity";

const userDeletService = async (idUser: string): Promise<object> => {
    const userRespository = AppDataSource.getRepository(User);

    const { address } = await userRespository.findOneOrFail({
        where: {
            id: idUser,
        },
        relations: {
            address: true,
        },
    });

    await userRespository.delete({ id: idUser });

    if (address) {
        await AppDataSource.getRepository(Address).delete({ id: address.id });
    }

    return {};
};

export { userDeletService };
