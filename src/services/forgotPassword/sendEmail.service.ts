import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { randomUUID } from "node:crypto";
import Users from "../../database/entities/users.entity";
import { stringify } from "node:querystring";
import SendmailTransport from "nodemailer/lib/sendmail-transport";
import { Any } from "typeorm";
import { iUserResponse } from "../../interfaces/User/request";
import { hashSync } from "bcryptjs";
const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

export const sendEmailService = async (emailData: any): Promise<any> => {

    const emailRepo = AppDataSource.getRepository(Users);

    const user = await emailRepo.findOne({
        where: {
            email: emailData.email
        },

    })
    if (!user) {
        throw new AppError(404, "User not exist!");
    }

    const resetToken = randomUUID()
    

    await emailRepo.update(
        { email: emailData },
        {
            token: resetToken,
            
        },
    )


    await transport.sendMail({ from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: 'Reset Password',
    text: `Redefinasua senha localhost:5173/forgot/pass/resetPassword`
}, (err, info) => {
    console.log(err)
})
console.log(resetToken)
    return { token: resetToken };
}

export const resetPasswordService = async (password: string, resetToken: string): Promise<iUserResponse>=> {
    const mailRepo = AppDataSource.getRepository(Users);
    const user = await mailRepo.findOne({
        where: {
            token: resetToken,
        },
    });

    if (!user) {
        throw new AppError(404, "User not exist!");
    }

    await mailRepo.update(
        {
            id: user.id,
        },
         {
            password: hashSync(`${password}`, 10),
            token: null,
        },
        
    );
    console.log(user)
    return user
}



