import { Request, Response } from "express";
import { resetPasswordService } from "../../services/forgotPassword/sendEmail.service";


export const resetPasswordController = async (req: Request, res: Response) => {
    const resetToken: string = req.params.token
    const password: { password: string } = req.body
    const newPassword = password.password
    const data = await resetPasswordService(newPassword, resetToken)
    return res.status(200).json(data)
};