import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";

const getOneAdService = async ( advertisementId: string) => {
    const advertisementRepository = AppDataSource.getRepository( Advertisement );

    const findAd = await advertisementRepository.findOne({
        where: { 
            id: advertisementId,
        },
        relations: {
            images: true,
        }
    })

    return findAd;
};

export { getOneAdService };