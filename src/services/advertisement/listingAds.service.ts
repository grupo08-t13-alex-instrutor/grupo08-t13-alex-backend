import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../entities/adverts.entity';

const listingAdsService = async () => {
    const listingAdsRepository = AppDataSource.getRepository(Advertisement);

    const advertisements = await listingAdsRepository
        .createQueryBuilder('advertisement')
        .leftJoinAndSelect('advertisement.images', 'image')
        .getMany();

    return advertisements;
};

export default listingAdsService;
