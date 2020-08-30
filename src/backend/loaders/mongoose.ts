import * as mongoose from 'mongoose';

export default async () => {
    const connection = await mongoose.connect('mongodb://localhost/website', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
        authSource: 'admin'
    });

    return connection.connection.db;
};
