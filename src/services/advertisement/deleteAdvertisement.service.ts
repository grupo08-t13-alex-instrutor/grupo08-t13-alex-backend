import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";

const deleteAdvertisementService = async (
    advertisementId: string
): Promise<object> => {
    const advertisementRespository = AppDataSource.getRepository(Advertisement);

    await advertisementRespository
        .findOneByOrFail({ id: advertisementId })
        .catch((reason) => {
            throw new AppError(404, "Advertisement not exist!");
        });

    await advertisementRespository.delete({ id: advertisementId });

    return {};
};

export { deleteAdvertisementService };
