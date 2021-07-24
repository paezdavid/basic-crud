const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    pages: {type: Number, required: true},
    year: {type: Number, required: true}
})

bookSchema
.virtual('url')
.get(() => {
    return '/book/' + this.id
})

module.exports = mongoose.model('book', bookSchema)