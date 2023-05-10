import mongoose from 'mongoose'

const categoriaSchema = new mongoose.Schema({
	nome: String,
})

const categorias = mongoose.model('categorias', categoriaSchema)

export default categorias