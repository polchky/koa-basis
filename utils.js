const Nodemailer = require('nodemailer');

const utils = {
    async sendEmail(to, subject, html, text) {
        const transporter = Nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            html,
            text,
        });
    },
};

module.exports = utils;
