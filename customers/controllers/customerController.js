const Customer = require('../models/Customer');

exports.getCustomers = (_, res) => {
    Customer.find()
        .then(customers => {
            res.status(200).json(customers);
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
}

exports.addCustomer = (req, res) => {
    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    };
    let customer = new Customer(newCustomer);

    customer.save()
        .then(() => {
            console.log('Customer saved to the database.');
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
    res.status(201).send({ message: 'Customer saved to the database.' });
}

exports.getCustomer = (req, res) => {
    Customer.findById(req.params.id)
        .then(customer => {
            if(customer._id) {
                console.log(customer)
                res.status(200).json(customer);
            }
        })
        .catch(err => {
            res.status(404).send({ message: err })
        })
}

exports.deleteCustomer = (req, res) => {
    Customer.findOneAndRemove(req.params.id)
        .then(() => {
            res.status(200).send({ message: 'Customer has been removed.' });
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
}
