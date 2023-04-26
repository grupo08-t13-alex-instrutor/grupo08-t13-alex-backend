import { Request, Response } from 'express';
import { updateAdressService } from '../../services/adress/updateAdress.service';
import { iAdressUpdate } from '../../interfaces/Adress/request';


 const updateAdressController = async (req: Request, res: Response) => {
    const adressData : iAdressUpdate  = req.body
    const adressId: string = req.params.adressId
    const updatedAdress = await updateAdressService(adressData, adressId)
    return res.status(200).json(updatedAdress)
}
export { updateAdressController };
