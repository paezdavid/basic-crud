const express = require('express')
const router = express.Router;

const bookModel = require('../models/bookModel') 

exports.getBooks = function (req, res) {

    bookModel.countDocuments({}, (err, numberOfDocs) => {
        if (err) console.log(err)

        bookModel.find({}, (err, bookData) => {
            if (err) console.log(err)
    
            res.render('index', {books: bookData, numberOfDocs: numberOfDocs})
    
        })
    })

}


exports.getSingleBook = function (req, res) {

    bookModel.findOne({_id: req.params.id}, (err, book) => {
        if (err) console.log(err)

        res.render('singleBook', {book: book})


    })


}