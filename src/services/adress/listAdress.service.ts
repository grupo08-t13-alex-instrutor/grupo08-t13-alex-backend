import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import { iAdressRespopnse } from "../../interfaces/Adress/response";
import { adressResponseSerializer } from "../../serializers/Adress/adress.serializers";


export const listAdressService = async (adressId: string): Promise<iAdressRespopnse> => {
    const adressRepository = AppDataSource.getRepository(Address);

    const adress = await adressRepository.findOneBy({ id: adressId })

    const validatedDataResponse = await adressResponseSerializer.validate(adress, { stripUnknown: true });

    return validatedDataResponse;
}