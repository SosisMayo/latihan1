const express = require('express')
const bodyparser = require("body-parser")
const BookRouter = require('./route/book')
const app = express()

// Koneksi Database
require("./Database/connection.js")

// Middleware Untuk Parsing Request Body
app.use(bodyparser.json())

// Middleware Untuk Route Book
app.use('/books',BookRouter)

// Route Root
app.get('/',(req,res)=>{
    res.json({message :"API ada di /books"})
})

// Menjalankan Server di Port 3000
app.listen(3000,()=>{
    console.log('App berjalan')
})