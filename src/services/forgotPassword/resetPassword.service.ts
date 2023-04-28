
const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

