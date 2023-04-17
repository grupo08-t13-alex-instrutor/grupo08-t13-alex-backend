import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../entities/adverts.entity';
import { IAdUpdateRequest } from '../../interfaces/Ads';

const updateAdsService = async (data: IAdUpdateRequest, advertisementId: string) => {
    const advertisementRespository = AppDataSource.getRepository(Advertisement);

    const findAds = await advertisementRespository.findOne({
        where: {
            id: advertisementId
        },  });

    const updatedAds = advertisementRespository.create({
        ...findAds,
        ...data
    });
    
    await advertisementRespository.save(updatedAds);

    return updatedAds;
};

export { updateAdsService };
