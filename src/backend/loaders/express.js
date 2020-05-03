import compression from 'compression';
import sirv from 'sirv';
import { json } from 'body-parser';
import * as sapper from '@sapper/server';

import sessionHandler from '../session';

export default ({ app, dev }) => {
    app.use(json())
        .use(compression())
        .use(sirv('static', { dev, maxAge: 31536000 }))
        .use(sapper.middleware({ session: sessionHandler }));

    return app;
};
