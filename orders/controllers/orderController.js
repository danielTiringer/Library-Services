const mongoose = require('mongoose');
const axios = require('axios');
const Order = require('../models/Order');

exports.getOrders = (_, res) => {
    Order.find()
        .then(orders => {
            console.log(orders)
            res.status(200).json(orders);
        })
        .catch(err => {
            res.status(404).send({ message: err.message })
        })
}

exports.addOrder = (req, res) => {
    let newOrder = {
        CustomerID: mongoose.Types.ObjectId(req.body.CustomerID),
        BookID: mongoose.Types.ObjectId(req.body.BookID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate,
    };
    let order = new Order(newOrder);

    order.save()
        .then(() => {
            res.status(201).send({ message: 'Order saved to the database.' });
        })
        .catch(err => {
            res.status(404).send({ message: err.message })
        })
}

exports.getOrder = (req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            axios.get(`http://customers-service:5555/customers/${order.CustomerID}`)
                 .then(customerResponse => {
                     let orderObject = {
                         customerName: customerResponse.data.name,
                         bookTitle: ''
                     }
                     axios.get(`http://books-service:4545/books/${order.BookID}`)
                          .then(bookResponse => {
                              orderObject.bookTitle = bookResponse.data.title
                              res.status(200).json(orderObject);
                          })
                 })
        })
        .catch(err => {
            res.status(404).send({ message: err.message })
        })
}

exports.deleteOrder = (req, res) => {
    Order.findOneAndRemove(req.params.id)
        .then(() => {
            res.status(200).send({ message: 'Order has been removed.' });
        })
        .catch(err => {
            res.status(400).send({ message: err.message })
        })
}
