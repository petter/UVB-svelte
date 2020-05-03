import nodemailer from 'nodemailer';
import mail from '../utils/mail';

export default () => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_SMTP_HOST,
        port: process.env.EMAIL_SMTP_PORT,
        auth: {
            user: process.env.EMAIL_SMTP_USER,
            pass: process.env.EMAIL_SMTP_PASS
        }
    });

    mail.setTransport(transport);
};
