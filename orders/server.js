const app = require('./orders.js');
const db = require('./config/db.js');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.ORDERS_PORT || 7777;

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Orders service started on port ${PORT}.`);
            console.log('MongoDB connected.');
        })
    })
