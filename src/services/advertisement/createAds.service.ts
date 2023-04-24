import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../database/entities/adverts.entity";
import { Image } from "../../database/entities/images.entity";
import { User } from "../../database/entities/users.entity";
import { IAdRequest } from "../../interfaces/Ads/request";
import { IAdResponse } from "../../interfaces/Ads/response";
import { adsResponseSerializer } from "../../serializers/Ads/ads.serializers";

const createAdsService = async (data: IAdRequest, userId: string): Promise<IAdResponse> => {
    const { images, ...dataAd } = data;

    const userRepository = AppDataSource.getRepository(User);
    const advertisementRespository = AppDataSource.getRepository(Advertisement);
    const imageRepository = AppDataSource.getRepository(Image);

    const foundUser = await userRepository.findOneByOrFail({ id: userId });

    const newAd = advertisementRespository.create({
        ...dataAd,
        user: foundUser,
    });

    await advertisementRespository.save(newAd);

    const { ...createdAd } = newAd;

    let newImages = [];

    await Promise.all(
        images.map(async image => {
            const newImage = imageRepository.create({
                ...image,
                advertisement: createdAd
            })

            await imageRepository.save(newImage);

            newImages.push(newImage);
        })
    )

    const createdData = {
        ...newAd,
        images: [
            ...newImages
        ]
    }

    const validatedDataResponse = await adsResponseSerializer.validate(createdData, { stripUnknown: true });

    return validatedDataResponse;
};

export { createAdsService };
