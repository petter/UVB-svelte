class Mail {
    setTransport(transport) {
        this.transport = transport;
    }

    send(mail, cb) {
        this.transport.sendMail(mail, cb);
    }
}

export default new Mail();
