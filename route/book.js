const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book')

// Mendapatkan Semua Data Buku
router.get('/',  BookController.getAllBook)

// Mendapatkan Data Buku Berdasarkan Judul
router.get('/:judul', BookController.getBookByTitle)

// Menambahkan Data Buku
router.post('/', BookController.createBook)

// Mengupdate Data Buku
router.put('/:judul', BookController.updateBook)

// Menghapus Data Buku
router.delete('/:judul', BookController.deleteBook)

module.exports = router