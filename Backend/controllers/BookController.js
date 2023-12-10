import Book from "../models/bookModel.js";

export const getBooks = async(req, res) =>{
    try{
        const response = await Book.findAll();
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

// Membuat sebuah method untuk mengambil single data 
export const getBookById = async(req, res) =>{
    try{
        const response = await Book.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

// Membuat method untuk create data pada buku
export const createBook = async(req, res) =>{
    try {
        await Book.create(req.body);
        res.status(201).json({msg: "Buku telah dibuat!"});
    } catch (error) {
        console.log(error.message);
    }
}

// Membuat method untuk melakukan update pada buku
export const updateBook = async(req, res) =>{
    try {
        await Book.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Buku telah diupdate!"});
    } catch (error) {
        console.log(error.message);
    }
}

// Membuat method untuk melakukan delete pada buku
export const deleteBook = async(req, res) =>{
    try {
        await Book.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Buku telah dihapus!"});
    } catch (error) {
        console.log(error.message);
    }
}