const validateField = val => val !== undefined;

export const post = (req, res) => {
    const { email, phone, subject, name, message } = req.body;
    const valid = [email, phone, subject, name, message].every(validateField);

    if (!valid)
        return res.end(
            JSON.stringify({ error: 'Not all required fields were submitted.' })
        );

    req.emailTransporter.sendMail(
        {
            from: 'pettersmoen@gmail.com',
            to: email,
            subject: subject,
            text: `Mail fra ${name} (${phone}):\n${message}`
        },
        (error, info) => {
            if (error) {
                console.log(error);
                res.end(JSON.stringify({ error }));
            } else {
                res.end(JSON.stringify(info));
            }
        }
    );
};
