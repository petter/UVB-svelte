import ContactFormEntryModel from '../models/ContactFormEntry';
import mail from '../utils/mail';

const validateField = val => val !== undefined;

export default {
    send: async ({ email, name, message, phone, ip }) => {
        const valid = [email, name, message].every(validateField);
        if (!valid) {
            throw new Error('Not all required fields were submitted');
        }

        await ContactFormEntryModel.create({
            email,
            name,
            message,
            phone,
            ip,
            time: new Date()
        });

        return mail.send(
            {
                from: `${name} <${email}>`,
                to: process.env['EMAIL_RCV'],
                subject: `Kontaktskjema - ${name}`,
                text: `${message}\n\n${name}${phone != '' ? `\n${phone}` : ''}`
            },
            () => console.log('Mail sendt')
        );
    }
};
