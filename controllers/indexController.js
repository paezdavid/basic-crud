const express = require('express')
const router = express.Router;

const bookModel = require('../models/bookModel') 

// Mostrar lista de documentos en el index
exports.getBooks = function (req, res) {
    bookModel.countDocuments({}, (err, numberOfDocs) => {
        if (err) console.log(err)

        bookModel.find({}, (err, bookData) => {
            if (err) console.log(err)
            res.render('index', {books: bookData, numberOfDocs: numberOfDocs})
    
        })
    })
}

// Buscar un solo documento para mostrarlo en una sola página
exports.getSingleBook = function (req, res) {
    bookModel.findOne({_id: req.params.id}, (err, book) => {
        if (err) console.log(err)
        res.render('singleBook', {book: book})
    })
}

// Buscar y borrar un documento
exports.deleteBook = function (req, res) {
    bookModel.findOneAndDelete({_id: req.params.id}, (err, bookRemoved) => {
        if (err) console.log(err)
        res.redirect('/')
    })
}


exports.findOne = function (req, res) {
    bookModel.findById(req.params.id, (err, bookFound) => {
        if (err) console.log(err)
        res.render('updateForm', {book: bookFound})
    })
}

exports.updateOne = function (req, res) {
    const bookToUpdate = {
        bookName: req.body.bookName,
        author: req.body.author,
        genre: req.body.genre,
        pages: req.body.pages,
        year: req.body.year
    }

    const query = {_id: req.params.id}

    bookModel.findOneAndUpdate(query, bookToUpdate, (err, updatedBook) => {
        if (err) console.log(err)
        res.redirect('/')
    })


}