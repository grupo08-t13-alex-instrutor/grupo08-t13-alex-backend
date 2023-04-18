import { Request, Response } from "express";
import { userDeletService } from "../../services/user/userDelet.service";

const userDeletController = async (req: Request, res: Response) => {

    const userId: string = req.user.id;

    const data = await userDeletService(userId)

    return res.status(204).json(data)
}

export { userDeletController }