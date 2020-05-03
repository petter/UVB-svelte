import mail from '../../backend/utils/mail';

const validateField = val => val !== undefined;

export const post = (req, res) => {
    console.log(req.body);
    const { email, name, phone, message } = req.body;
    const valid = [email, name, message].every(validateField);
    if (!valid)
        return res.status(400).end(
            JSON.stringify({
                error: 'Not all required fields were submitted.'
            })
        );

    mail.send(
        {
            from: `${name} <${email}>`,
            to: process.env['EMAIL_RCV'],
            subject: `Kontaktskjema - ${name}`,
            text: `${message}\n\n${name}${phone != '' ? `\n${phone}` : ''}`
        },
        (error, info) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.end(JSON.stringify({ error }));
            } else {
                console.log('success');
                res.end(JSON.stringify(info));
            }
        }
    );
};
