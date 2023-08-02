const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const router = require('./routes/router');
const { connectToDb } = require('./utils/mongoDbConnection');
const PORT = process.env.PORT || 3000;

connectToDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Listening on port ${PORT}`);
});

module.exports = app;
