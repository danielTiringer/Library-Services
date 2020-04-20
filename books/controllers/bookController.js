const Book = require('../models/Book');

exports.getBooks = (_, res) => {
    Book.find()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
}

exports.addBook = (req, res) => {
    let newBook = {
        title: req.body.title,
        author: req.body.author,
        numberOfPages: req.body.numberOfPages,
        publisher: req.body.publisher,
    };
    console.log(newBook)
    let book = new Book(newBook);

    book.save()
        .then(() => {
            console.log('Book saved to the database.');
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
    res.status(201).send({ message: 'Book saved to the database.' });
}

exports.getBook = (req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            res.status(200).json(book);
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
}

exports.deleteBook = (req, res) => {
    Book.findOneAndRemove(req.params.id)
        .then(() => {
            res.status(200).send({ message: 'Book has been removed.' });
        })
        .catch(err => {
            if(err) {
                throw err;
            }
        })
}
