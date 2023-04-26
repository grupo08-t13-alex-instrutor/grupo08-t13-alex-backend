import { Request, Response } from 'express';
import { listAdressService } from '../../services/adress/listAdress.service';

const listAdressController = async (req: Request, res: Response) => {
    const adressId: string = req.params.adressId
    const adress = await listAdressService(adressId)
    return res.status(200).json(adress)
}

export { listAdressController };