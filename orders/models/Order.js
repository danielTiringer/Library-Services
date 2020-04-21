const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    CustomerID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    BookID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
})

module.exports = Order = mongoose.model('orders', OrderSchema);
