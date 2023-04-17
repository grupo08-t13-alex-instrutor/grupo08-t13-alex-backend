import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";
import { IAdResponse } from "../../interfaces/Ads";
import { adsResponseSerializer } from "../../serializers/ads.serializers";

const getOneAdService = async ( advertisementId: string): Promise<IAdResponse> => {
    const advertisementRepository = AppDataSource.getRepository( Advertisement );

    const findAd = await advertisementRepository.findOne({
        where: { 
            id: advertisementId,
        },
        relations: {
            images: true,
            user: true
        }
    })

    const validatedDataResponse = await adsResponseSerializer.validate( findAd, { stripUnknown: true });
    
    return validatedDataResponse;
};

export { getOneAdService };