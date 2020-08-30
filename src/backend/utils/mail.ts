import { Transporter, SendMailOptions } from 'nodemailer';

class Mail {
    transport: Transporter;
    setTransport(transport: Transporter) {
        this.transport = transport;
    }

    async send(mail: SendMailOptions, cb: (string) => void) {
        return this.transport.sendMail(mail, cb);
    }
}

export default new Mail();
