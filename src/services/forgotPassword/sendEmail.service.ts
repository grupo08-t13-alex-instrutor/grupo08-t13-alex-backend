import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { randomUUID } from "node:crypto";
import Users from "../../database/entities/users.entity";
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

    const updateUser = emailRepo.create({
        ...user,
        token: randomUUID()
    });

    const saveDataUpdateUserToken = await emailRepo.save(updateUser);

    await transport.sendMail({
        from: process.env.SMTP_USER,
        to: user.email,
        subject: 'Reset Password',
        text: `Redefinasua senha localhost:5173/forgot/pass/resetPassword`,
    })

    return { token: saveDataUpdateUserToken.token };
}

export const resetPasswordService = async (passwordNew: string, resetToken: string): Promise<iUserResponse> => {

    const emailRepo = AppDataSource.getRepository(Users);

    const user = await emailRepo.findOne({
        where: {
            token: resetToken,
        },
    });

    if (!user) {
        throw new AppError(404, "User not exist!");
    }

    const updateUser = emailRepo.create({
        ...user,
        password: passwordNew,
        token: null
    });

    const saveDataUpdateUserTokenNull = await emailRepo.save(updateUser);
    const { password, ...userData } = saveDataUpdateUserTokenNull

    return userData
}



