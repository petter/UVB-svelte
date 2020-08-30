import expressLoader from './express';
import nodemailerLoader from './nodemailer';
import mongooseLoader from './mongoose';

export default async ({ app, dev }) => {
    const mongoConnection = await mongooseLoader();
    console.log('MongoDB initialized');

    nodemailerLoader();
    console.log('Nodemailer initialized');

    expressLoader({ app, dev });
    console.log('Express initialized');
};
