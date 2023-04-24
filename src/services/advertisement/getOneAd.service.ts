import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../database/entities/adverts.entity";
import AppError from "../../errors/AppError";
import { IAdResponse } from "../../interfaces/Ads/response";
import { adsResponseSerializer } from "../../serializers/Ads/ads.serializers";


const getOneAdService = async (advertisementId: string): Promise<IAdResponse> => {
    const advertisementRepository = AppDataSource.getRepository(Advertisement);


    const findAd = await advertisementRepository.findOneOrFail({
        where: {

            id: advertisementId,
        },
        relations: {
            images: true,
            user: true
        }
    }).catch(reason => { throw new AppError(404, "Advertisement not found!") })

    const validatedDataResponse = await adsResponseSerializer.validate(findAd, { stripUnknown: true });

    return validatedDataResponse;
};

export { getOneAdService };