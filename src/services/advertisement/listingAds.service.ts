import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../entities/adverts.entity';
// import { IAdResponse } from '../../interfaces/Ads';
// import { listingAdsSerializer } from '../../serializers/ads.serializers';

const listingAdsService = async ()/* : Promise<IAdResponse[]> */ => {
    const listingAdsRepository = AppDataSource.getRepository(Advertisement);

    const advertisements = await listingAdsRepository
        .createQueryBuilder('advertisement')
        .leftJoinAndSelect('advertisement.images', 'image')
        .leftJoinAndSelect('advertisement.user', 'user')
        .getMany();

    // const validatedDataResponse = await listingAdsSerializer.validate( advertisements, { stripUnknown: true });

    return advertisements;
};

export default listingAdsService;
