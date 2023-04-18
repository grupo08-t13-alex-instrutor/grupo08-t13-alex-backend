import { Request, Response } from "express";
import sessionService from "../../services/session/session.service"

const sessionController = async (req: Request, res: Response) => {
    const userData = req.body;

    const token = await sessionService(userData)

    return res.status(200).json({ token });
};

export { sessionController };
