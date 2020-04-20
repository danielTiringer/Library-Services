const express = require('express');
const {
} = require('../controllers/customerController');

const router = express.Router();

router
    .route('/')
    // .get(getBooks)
    // .post(addBook)

router
    .route('/:id')
    // .get(getBook)
    // .delete(deleteBook)

module.exports = router;
