import express from 'express';
import loaders from './backend/loaders';
require('dotenv-flow').config();

const startServer = async () => {
    const dev = process.env.NODE_ENV === 'development';

    const app = express();

    await loaders({ app, dev });

    app.listen(process.env.PORT, err => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Server successfully initialized');
    });
};

startServer();
