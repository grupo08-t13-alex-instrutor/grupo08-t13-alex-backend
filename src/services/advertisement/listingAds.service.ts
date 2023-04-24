import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../database/entities/adverts.entity';
import { IAdResponse } from '../../interfaces/Ads/response';
import { adsResponseSerializer } from '../../serializers/Ads/ads.serializers';

const listingAdsService = async (): Promise<IAdResponse> => {
    const listingAdsRepository = AppDataSource.getRepository(Advertisement);

    const advertisements = await listingAdsRepository
        .createQueryBuilder('advertisement')
        .leftJoinAndSelect('advertisement.images', 'image')
        .leftJoinAndSelect('advertisement.user', 'user')
        .getMany();

    const validatedDataResponse = await adsResponseSerializer.validate(advertisements, { stripUnknown: true });

    return validatedDataResponse;
};

export default listingAdsService;
