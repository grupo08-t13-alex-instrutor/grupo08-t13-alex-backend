import { Request, Response } from 'express';
import { createUserService } from '../../services/user/createUser.service';
import { iUserRequest } from '../../interfaces/User';

export const createUserController = async (req: Request, res: Response) => {
    const userData: iUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser);
};