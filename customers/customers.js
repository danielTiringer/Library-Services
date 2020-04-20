const express = require('express');

const app = express();

const customers = require('./routes/customers');

app.use(express.json());

app.use('/customers', customers);

module.exports = app;
