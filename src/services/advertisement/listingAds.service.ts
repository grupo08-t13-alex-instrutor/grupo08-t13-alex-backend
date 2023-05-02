import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../database/entities/adverts.entity';
import { listingAdsSerializer } from '../../serializers/Ads/ads.serializers';

const PAGE_SIZE = 9

const listingAdsService = async (page: any) => {
    const listingAdsRepository = AppDataSource.getRepository(Advertisement);

    if (page) {
        const pageTransformNumber = parseInt(page)

        const offset = (pageTransformNumber) * PAGE_SIZE;

        const advertisements = await listingAdsRepository
            .createQueryBuilder('advertisement')
            .leftJoinAndSelect('advertisement.images', 'image')
            .leftJoinAndSelect('advertisement.user', 'user')
            .offset(offset)
            .limit(PAGE_SIZE)
            .orderBy("advertisement.price", "ASC")
            .getMany()


        const validatedDataResponse = await listingAdsSerializer.validate(advertisements, { stripUnknown: true });


        const totalPage = await listingAdsRepository.count()

        const response = {
            ads: validatedDataResponse,
            page: pageTransformNumber,
            totalPage: (Math.ceil(totalPage / PAGE_SIZE))
        };

        return response;
    }

    const advertisements = await listingAdsRepository
        .createQueryBuilder('advertisement')
        .leftJoinAndSelect('advertisement.images', 'image')
        .leftJoinAndSelect('advertisement.user', 'user')
        .orderBy("advertisement.price", "ASC")
        .getMany()

    const validatedDataResponse = await listingAdsSerializer.validate(advertisements, { stripUnknown: true });

    return validatedDataResponse
};

export default listingAdsService;
