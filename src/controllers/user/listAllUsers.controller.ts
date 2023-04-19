import { Request, Response } from "express";
import { listAllUserService } from "../../services/user/listAllUsers.service";

export const listAllUsersController = async (req: Request, res: Response) => {
    const users = await listAllUserService()
    return res.status(200).json(users)
}