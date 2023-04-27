import { Request, Response } from "express";
import { resetPasswordService } from "../../services/forgotPassword/sendEmail.service";


export const resetPasswordController = async (req: Request, res: Response) => {
    const resetToken: string = req.params.token
    const password: any  = req.body
   await resetPasswordService(password, resetToken)
    return res.status(200)
    {message:"Password reseted "};
};