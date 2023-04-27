import { Router } from 'express';
import { resetPasswordController } from '../controllers/forgotPassword/resetPassword.controller';
import { sendEmailController } from '../controllers/forgotPassword/sendEmail.controller';


const resetpassRouter = Router();

resetpassRouter.post("/pass", sendEmailController)
resetpassRouter.patch("/pass/:resetToken", resetPasswordController)

export default resetpassRouter