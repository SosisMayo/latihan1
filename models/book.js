const mongoose = require('mongoose')

const book = mongoose.Schema({
    judul : String,
    tahun : Number,
    pengarang : String,
}) 

module.exports = mongoose.model("books", book)