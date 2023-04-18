import {userPatchService} from "../../service/user/userPatch.service"
import { Request, Response } from "express";


const userPatchController = async (req: Request, res: Response) => {

    const bodyUpdate = req.params.body
    const idUser = req.user.id

    const data = await userPatchService( bodyUpdate, idUser)

    return res.json(200).json(data)
}

export { userPatchController }