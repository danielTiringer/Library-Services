const app = require('./books.js');
const db = require('./config/db.js');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.BOOKS_PORT || 4545;

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Books service started on port ${PORT}.`);
            console.log('MongoDB connected.');
        })
    })
