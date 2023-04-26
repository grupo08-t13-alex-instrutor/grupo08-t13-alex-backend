import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { oneUserResponseSerializer } from "../../serializers/User/users.serializers";

const listAnUserIdParamsService = async (userId) => {
    const userRepository = AppDataSource.getRepository(User);

    const {
        address: { id },
        ...user
    } = await userRepository
        .findOneOrFail({
            where: {
                id: userId,
            },
            relations: {
                address: true,
            },
        })
        .catch((reason) => {
            throw new AppError(404, "User not exist!");
        });

    const correctUserFormat = await oneUserResponseSerializer.validate(
        { ...user, addressId: id },
        {
            stripUnknown: true,
        }
    );

    return correctUserFormat;
};

export default listAnUserIdParamsService;
