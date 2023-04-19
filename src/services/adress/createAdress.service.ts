import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import { iAdressRequest, iAdressRespopnse } from "../../interfaces/Adress";
import { adressResponseSerializer } from "../../serializers/adress.serializers";

export const createAdressService = async (adressData: iAdressRequest): Promise<iAdressRespopnse> => {

    const adressRepository = AppDataSource.getRepository(Address);


    const adress = adressRepository.create(adressData);
    await adressRepository.save(adress);

    const validatedDataResponse = await adressResponseSerializer.validate( adress, { stripUnknown: true });

    return validatedDataResponse;
}; 