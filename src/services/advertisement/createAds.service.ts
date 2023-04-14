import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";
import { Image } from "../../entities/images.entity";
import { User } from "../../entities/users.entity";
import { IAdRequest } from "../../interfaces/Ads";

const createAdsService = async (data: IAdRequest, userId: string) => {
    const { images, ...dataAd } = data;
    
    const userRepository = AppDataSource.getRepository(User);
    const advertisementRespository = AppDataSource.getRepository(Advertisement);
    const imageRepository = AppDataSource.getRepository(Image);

    const foundUser = await userRepository.findOneBy({ id: userId });
    
    const newAd = advertisementRespository.create({
        ...dataAd,
        user: foundUser,
    });

    await advertisementRespository.save(newAd);

    let imagesResponse = [];
    images.map( async image => {
        const newImage = imageRepository.create({
            ...image,
            advertisement: newAd
        })

        await imageRepository.save( newImage );

        imagesResponse.push( newImage );
    })

    return { newAd, imagesResponse };
};

export { createAdsService };
