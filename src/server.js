import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import { json } from 'body-parser';
import * as sapper from '@sapper/server';
import nodemailer from 'nodemailer';
require('dotenv').config();

const { EMAIL_ACC, EMAIL_PWD } = process.env;
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_ACC,
        pass: EMAIL_PWD
    }
});

polka()
    .use(json())
    .use((req, _, next) => {
        req.emailTransporter = transporter;
        next();
    })
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
