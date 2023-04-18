import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";

const deleteAdvertisementService = async (advertisementId: string): Promise<object> => {
    const advertisementRespository = AppDataSource.getRepository(Advertisement);

    const findAdvertisement = await advertisementRespository.findOneBy({ id: advertisementId });
    
    if (!findAdvertisement) {
        throw new AppError(404, "Advertisement not exists!");
    };

    await advertisementRespository.delete({ id: advertisementId });

    return {};
};

export { deleteAdvertisementService };
