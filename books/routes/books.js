const express = require('express');
const {
    getBooks,
    addBook,
    getBook,
    deleteBook
} = require('../controllers/bookController');

const router = express.Router();

router
    .route('/')
    .get(getBooks)
    .post(addBook)

router
    .route('/:id')
    .get(getBook)
    .delete(deleteBook)

module.exports = router;
