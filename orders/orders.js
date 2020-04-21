const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const orders = require('./routes/orders');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/orders', orders);

module.exports = app;
