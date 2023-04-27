import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { randomUUID } from "node:crypto";
import Users from "../../database/entities/users.entity";
import { stringify } from "node:querystring";
import SendmailTransport from "nodemailer/lib/sendmail-transport";
import { Any } from "typeorm";
const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

