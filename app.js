const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { mongoUri } = require('./config');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', routes); // Use the routes

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});