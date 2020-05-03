import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import { json } from 'body-parser';
import * as sapper from '@sapper/server';
import nodemailer from 'nodemailer';

import mail from './backend/utils/mail';
require('dotenv-flow').config();

const {
    EMAIL_SMTP_HOST,
    EMAIL_SMTP_PORT,
    EMAIL_SMTP_USER,
    EMAIL_SMTP_PASS
} = process.env;
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const transport = nodemailer.createTransport({
    host: EMAIL_SMTP_HOST,
    port: EMAIL_SMTP_PORT,
    auth: {
        user: EMAIL_SMTP_USER,
        pass: EMAIL_SMTP_PASS
    }
});
mail.setTransport(transport);

polka()
    .use(json())
    .use(
        compression({ threshold: 0 }),
        sirv('static', {
            dev,
            maxAge: 2623000
        }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
