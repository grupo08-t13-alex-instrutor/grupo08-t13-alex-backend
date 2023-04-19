import { AppDataSource } from '../../data-source';
import { Advertisement } from '../../entities/adverts.entity';
import { Image } from '../../entities/images.entity';
import AppError from '../../errors/AppError';
import { IAdResponse, IAdUpdateRequest } from '../../interfaces/Ads';
import { adsResponseSerializer } from '../../serializers/ads.serializers';

const updateAdsService = async ( data: IAdUpdateRequest, advertisementId: string ): Promise<IAdResponse> => {
    const { images, ...dataAd } = data;
    
    const advertisementRespository = AppDataSource.getRepository(Advertisement);

    const findAd = await advertisementRespository.findOneOrFail({
        where: { 
            id: advertisementId 
        },
        relations: {
            images: true,
            user: true
        }
    }).catch( reason => { throw new AppError( 404, "Advertisement not exist!" )})

    const updatedAd = advertisementRespository.create({
        ...findAd,
        ...dataAd
    });    
    
    await advertisementRespository.save(updatedAd);

    if( images ){
        const imagesRespository = AppDataSource.getRepository( Image );

        await Promise.all ( 
            images.map( async image => {
                const { id, ...linkData } = image;

                const findImage = await imagesRespository.findOneBy({ id: id });
                
                await imagesRespository.update( { id: id }, linkData );

                updatedAd.images.map( image => {
                    if( image.id === id ){
                        image.link = linkData.link
                    }
                })
            })
        )
    }

    const validatedDataResponse = await adsResponseSerializer.validate( updatedAd, { stripUnknown: true });
    
    return validatedDataResponse;
};

export { updateAdsService };
