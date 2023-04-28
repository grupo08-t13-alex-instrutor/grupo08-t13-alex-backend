import { Request, Response } from "express";
import { sendEmailService } from "../../services/forgotPassword/sendEmail.service";
sendEmailService


export const sendEmailController = async (req: Request, res: Response) => {
    const emailData: { email: string } = req.body
    const token = await sendEmailService(emailData)
    return res.status(200).json(token)
};