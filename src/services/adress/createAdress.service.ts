import { AppDataSource } from "../../data-source";
import { Address } from "../../database/entities/adresses.entity";
import { iAdressRequest } from "../../interfaces/Adress/request";
import { iAdressRespopnse } from "../../interfaces/Adress/response";
import { adressResponseSerializer } from "../../serializers/Adress/adress.serializers";

export const createAdressService = async (adressData: iAdressRequest): Promise<iAdressRespopnse> => {

    const adressRepository = AppDataSource.getRepository(Address);

    const adress = adressRepository.create(adressData);
    await adressRepository.save(adress);

    const validatedDataResponse = await adressResponseSerializer.validate(adress, { stripUnknown: true });

    return validatedDataResponse;
}; 