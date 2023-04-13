import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../entities/adverts.entity';
import { User } from '../../entities/users.entity';
import { IAdResponse } from '../../interfaces/Ads';

const updateAdsService = async (data: IAdResponse, userId: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const advertisementRespository = AppDataSource.getRepository(Advertisement);

    const foundUser = await userRepository.findOneBy({ id: userId });

    const updatedAds = advertisementRespository.create({
        ...data,
        user: foundUser,
    });
    await advertisementRespository.save(updatedAds);

    return updatedAds;
};

export { updateAdsService };
