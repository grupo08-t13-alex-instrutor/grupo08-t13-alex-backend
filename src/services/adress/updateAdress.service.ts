import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import { iAdressRespopnse, iAdressUpdate } from "../../interfaces/Adress";
import { adressResponseSerializer, adressUpdateSerializer } from "../../serializers/adress.serializers";

export const updateAdressService = async (updateDate: iAdressUpdate, adressId: string): Promise<iAdressRespopnse> =>{
    const adressRepository = AppDataSource.getRepository(Address);

    const findAdress = await adressRepository.findOneBy({
            id: adressId
    })

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