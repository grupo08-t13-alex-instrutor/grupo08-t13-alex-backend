import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/adverts.entity";

const deleteAdvertisementService = async ( advertisementId: string ): Promise<object> => {
    const advertisementRespository = AppDataSource.getRepository( Advertisement );
    
    const findAdvertisement = await advertisementRespository.findOneBy({ id: advertisementId });
    if( !findAdvertisement ){
        console.log( 'User not exists', 400 );
    };

    await advertisementRespository.delete({ id: advertisementId });
    
    return {};
};

export { deleteAdvertisementService };
