class Mail {
    setTransport(transport) {
        this.transport = transport;
    }

    async send(mail, cb) {
        return this.transport.sendMail(mail, cb);
    }
}

export default new Mail();
