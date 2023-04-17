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

    const { user, ...newAdResponse } = newAd;

    // let imagesResponse = ["Olá teste"];
    const imagesResponse = await Promise.all(images.map( async (image) => {        
        const newImage = imageRepository.create({
            ...image,
            advertisement: newAdResponse
        })
        
        await imageRepository.save( newImage );

        return { 
            id: newImage.id,
            link: newImage.link, 
            advertisementId: newImage.advertisement.id
        };
    }))    

    return { ...newAdResponse, images: imagesResponse };
};

export { createAdsService };
