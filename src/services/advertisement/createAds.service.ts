import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";
import { User } from "../../entities/users.entity";
import { IAdRequest } from "../../interfaces/Ads";

const createAdsService = async (data: IAdRequest, userId: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const advertisementRespository = AppDataSource.getRepository(Advertisement);

    const foundUser = await userRepository.findOneBy({id: userId})
    
    
    // const foundAd = await advertisementRespository.findOne({
    //     where: { id: userId },
    //     relations: {
    //         images: true,
    //         user: true,
    //     },
    // });

    const newAd = advertisementRespository.create({
        ...data,
        user: foundUser,
    });

    await advertisementRespository.save(newAd);

    return newAd;
};

export { createAdsService };
