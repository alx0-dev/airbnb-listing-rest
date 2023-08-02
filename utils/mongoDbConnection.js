const connectToDb = () => {
    const mongoose = require('mongoose');
    const DATABASE_URL = process.env.DATABASE_URL;
    mongoose.set('strictQuery', false);

    mongoose.connect(DATABASE_URL);
    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('Database Connected');
    });
};

module.exports = { connectToDb };
