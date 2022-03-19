const BookSchema = require('../models/book')

const getAllBook = async (req,res)=>{
    const book = await BookSchema.find()
    if(book[0]){
        res.status(200).json(book)
    }
    else{
        res.status(404).json({
            message : "Data tidak ditemukan!"
        })
    }
}

const getBookByTitle = async (req,res)=>{
    const book = await BookSchema.findOne({
        judul : req.params.judul
    })
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(404).json({
            message : "Data tidak ditemukan!"
        })
    }
}

const createBook = async (req,res)=>{
    const book = new BookSchema({
        judul : req.body.judul,
        tahun : req.body.tahun,
        pengarang : req.body.pengarang
    })
    try {
        await book.save()
        res.status(201).json(book)
    } catch (error) {
        console.log(error)
    }
}

const updateBook = async (req,res)=>{
    const book = await BookSchema.findOne({
        judul : req.params.judul
    })
    if(book){
        try {
            await BookSchema.findOneAndUpdate({
                judul : req.params.judul
            },
            {
                judul : req.body.judul,
                tahun : req.body.tahun,
                pengarang : req.body.pengarang
            })
            const book = await BookSchema.findOne({
                judul : req.body.judul
            })
            res.status(200).json(book)
        } catch (error) {
            res.json(error)
        }
    }
    else{
        res.status(404).json({
            message : "Data tidak ditemukan!"
        })
    }
}

const deleteBook = async(req,res)=>{
    const book = await BookSchema.findOne({
        judul : req.params.judul
    })
    if(book){
        try{
            await BookSchema.findOneAndDelete({
                judul : req.params.judul
            })
            res.status(200).json({
                message : "sudah dihapus"
            })
        }
        catch{
            res.json(error)
        }
    }
    else{
        res.status(404).json({
            message : "Data tidak ditemukan!"
        })
    }
}

module.exports = {getAllBook,getBookByTitle,createBook,updateBook,deleteBook}








