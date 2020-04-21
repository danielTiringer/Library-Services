const express = require('express');
const {
    getOrders,
    addOrder,
    getOrder,
    deleteOrder
} = require('../controllers/orderController');

const router = express.Router();

router
    .route('/')
    .get(getOrders)
    .post(addOrder)

router
    .route('/:id')
    .get(getOrder)
    .delete(deleteOrder)

module.exports = router;
