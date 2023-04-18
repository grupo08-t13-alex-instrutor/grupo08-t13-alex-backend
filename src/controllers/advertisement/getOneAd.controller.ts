import { Request, Response } from "express";
import { getOneAdService } from "../../services/advertisement/getOneAd.service";

const getOneAdController = async (req: Request, res: Response) => {
    const advertisementId: string = req.params.advertisementId;
    const data = await getOneAdService(advertisementId);

    return res.json(data);
};

export { getOneAdController };