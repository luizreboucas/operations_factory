import mongoose from 'mongoose'

const operacoesSchema = new mongoose.Schema({
	subcategoria: {type: String, required: true},
	categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categorias', required: [true, 'selecione a categoria!']},
	descricao: {type: String, required: [true, 'informe uma descrição']},
	valor: {type: Number, required: true},
	data: {type: Date} 
})

const operacoes = mongoose.model('operacoes', operacoesSchema)

export default operacoes