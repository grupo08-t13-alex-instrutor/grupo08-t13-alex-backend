import { Request, Response } from "express";
import { userPatchService } from "../../services/user/userPatch.service";
import { iUserUpdate } from "../../interfaces/User";

const userPatchController = async (req: Request, res: Response) => {

    const bodyUpdate: iUserUpdate = req.body
    const idUser: string = req.user.id

    const data = await userPatchService( bodyUpdate, idUser)

    return res.status(200).json(data)
}

export { userPatchController }