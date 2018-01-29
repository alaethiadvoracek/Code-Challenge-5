const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messages = require('./routes/messages.router');

// middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());

// routes
app.use('/messages', messages);

/** ---------- MONGOOSE ------------ **/
const mongoose = require('mongoose');
// gamestop is the name of our database
// 27017 is the default mongo port number
const databaseUrl = 'mongodb://localhost:27017/messageBoard';

// connect to mongoDB
mongoose.connect(databaseUrl);

// optional output from connectione events
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection failed');
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on ${port}`);

});