const express = require('express');
const {
    getCustomers,
    addCustomer,
    getCustomer,
    deleteCustomer
} = require('../controllers/customerController');

const router = express.Router();

router
    .route('/')
    .get(getCustomers)
    .post(addCustomer)

router
    .route('/:id')
    .get(getCustomer)
    .delete(deleteCustomer)

module.exports = router;
