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
    host: "smtp.smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

export const sendEmailService = async (emailData: string): Promise<String> => {

    const emailRepo = AppDataSource.getRepository(Users);

    const user = await emailRepo.findOne({
        where: {
            email: emailData
        },

    })
    if (!user) {
        throw new AppError(404, "User not exist!");
    }

    const resetToken = randomUUID()

    const updateUser = await emailRepo.create({
        where: { email },
        data: {
            token: resetToken,
        },
    })

    const saveData = await emailRepo.save(updateUser)


    const resetPasswordTemplate = emailRepo.update(
        user.email,
        user.name,
        resetToken,
    );

    await transport.sendMail(resetPasswordTemplate)

    return { message: "email enviado com sucesso" };
}

export const resetPasswordService = async (password: string, resetToken: string): Promise<any>=> {
    const mailRepo = AppDataSource.getRepository(Users);
    const user = await mailRepo.findOne({
        where: {
            token: resetToken,
        },
    });

    if (!user) {
        throw new AppError(404, "User not exist!");
    }

    await mailRepo.create({
        where: {
            id: user.id,
        },
        data: {
            password: hashSync(`${password}`, 10),
            token: null,
        },
    });
}



