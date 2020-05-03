import ContactFormEntryService from '../../backend/service/ContactFormEntry';

export const post = (req, res) => {
    const { email, name, phone, message } = req.body;
    ContactFormEntryService.send({ email, name, phone, message, ip: req.ip })
        .then(result => {
            res.send(JSON.stringify(result));
        })
        .catch(error => {
            res.status(400).send(JSON.stringify({ error }));
        });
};
