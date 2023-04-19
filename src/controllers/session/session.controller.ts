import { Request, Response } from "express";
import sessionService from "../../services/session/session.service"
import { iUserLoginRequest } from "../../interfaces/login";

const sessionController = async (req: Request, res: Response) => {
    const userData: iUserLoginRequest = req.body;

    const token = await sessionService(userData)

    return res.status(200).json({ token });
};

export { sessionController };
