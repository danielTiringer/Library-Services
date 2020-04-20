const app = require('./customers.js');
const db = require('./config/db.js');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.CUSTOMERS_PORT || 5555;

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Customers service started on port ${PORT}.`);
            console.log('MongoDB connected.');
        })
    })
