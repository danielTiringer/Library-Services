const express = require('express');
const Book = require('./models/Book');

const app = express();

const books = require('./routes/books');

app.use(express.json());

app.use('/books', books);

module.exports = app;
