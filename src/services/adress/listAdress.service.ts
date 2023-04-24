import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import AppError from "../../errors/AppError";
import { iAdressRespopnse } from "../../interfaces/Adress/response";
import { adressResponseSerializer } from "../../serializers/Adress/adress.serializers";

export const listAdressService = async (adressId: string): Promise<iAdressRespopnse> => {
    const adressRepository = AppDataSource.getRepository(Address)

    const adress = await adressRepository.findOneOrFail({
        where: {
            id: adressId
        }
    }).catch( reason => { throw new AppError( 404, "Address not exist!" )} );

    const validatedDataResponse = await adressResponseSerializer.validate(adress, { stripUnknown: true });


    return validatedDataResponse;
}