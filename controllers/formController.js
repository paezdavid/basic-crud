const Book = require('../models/bookModel')

exports.addBook = function(req, res) {
    
    const newBook = new Book({
        bookName: req.body.bookName,
        author: req.body.author,
        genre: req.body.genre,
        pages: req.body.pages,
        year: req.body.year
    })

    newBook.save((err, data) => {
        if (err) console.log(err)
        console.log("saved!")
        res.redirect('/')
    })

}