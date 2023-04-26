import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adresses.entity";
import AppError from "../../errors/AppError";
import { iAdressUpdate } from "../../interfaces/Adress/request";
import { iAdressRespopnse } from "../../interfaces/Adress/response";
import { adressResponseSerializer } from "../../serializers/Adress/adress.serializers";

export const updateAdressService = async (
    updateDate: iAdressUpdate,
    adressId: string
): Promise<iAdressRespopnse> => {
    const adressRepository = AppDataSource.getRepository(Address);

    const findAdress = await adressRepository
        .findOneByOrFail({
            id: adressId,
        })
        .catch((reason) => {
            throw new AppError(404, "Address not found!");
        });

    const updateAdress = adressRepository.create({
        ...findAdress,
        ...updateDate,
    });

    await adressRepository.save(updateAdress);

    const updatedData = await adressResponseSerializer.validate(updateAdress, {
        stripUnknown: true,
    });

    return updatedData;
};
