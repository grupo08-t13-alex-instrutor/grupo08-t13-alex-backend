import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import AppError from "../../errors/AppError";
import { iAdressRespopnse, iAdressUpdate } from "../../interfaces/Adress";
import { adressResponseSerializer, adressUpdateSerializer } from "../../serializers/adress.serializers";

export const updateAdressService = async (updateDate: iAdressUpdate, adressId: string): Promise<iAdressRespopnse> =>{
    const adressRepository = AppDataSource.getRepository(Address);

    const findAdress = await adressRepository.findOneByOrFail({
            id: adressId
    }).catch( reason => { throw new AppError( 404, "Address not found!" )})

    const updateAdress = adressRepository.create({
        ...findAdress,
        ...updateDate
    });

    await adressRepository.update({ id: adressId }, updateAdress)

    const updatedData = await adressResponseSerializer.validate(updateAdress, {
        stripUnknown: true
    })

    return updatedData

}