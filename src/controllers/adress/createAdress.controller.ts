import { Request, Response } from 'express';
import { createAdressService } from '../../services/adress/createAdress.service';
import { iAdressRequest } from '../../interfaces/Adress';

 const createAdressController = async (req: Request, res: Response) => {
    const adressData: iAdressRequest = req.body
    const newAdress = await createAdressService(adressData)
    return res.status(201).json(newAdress);
};

export { createAdressController };