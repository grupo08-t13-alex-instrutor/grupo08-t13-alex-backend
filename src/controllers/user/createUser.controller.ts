import { Request, Response } from 'express';
import { createUserService } from '../../services/user/createUser.service';
import { iUserRegisterReq } from '../../interfaces/User/request';

export const createUserController = async (req: Request, res: Response) => {
    const userData: iUserRegisterReq = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser);
};