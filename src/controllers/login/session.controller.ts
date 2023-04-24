import { Request, Response } from "express";
import sessionService from "../../services/login/session.service"
import { iUserLoginReq } from "../../interfaces/session/request";

const sessionController = async (req: Request, res: Response) => {
    const userData: iUserLoginReq = req.body;

    const token = await sessionService(userData)

    return res.status(200).json(token);
};

export { sessionController };
