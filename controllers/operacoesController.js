import operacoes from '../models/operacoes.js'

export default class OperacoesController{
	static getOperacoes = async(req,res)=>{
		try {
			const listaOperacoes = await operacoes.find().populate('categoria')
			res.status(200).json(listaOperacoes)
		} catch (error) {
			res.status(400).json({error: `${error}`})
		}
	}
	static postOperacao = async(req,res)=>{
		try {
			const {subcategoria,categoria,valor,descricao} = req.body
			const data = new Date()
			const novaOperacao = {
				subcategoria,categoria,valor,data,descricao
			}
			console.log(novaOperacao)
			await operacoes.create(novaOperacao)
			res.status(201).json({message: 'nova operação realizada'})
		} catch (error) {
			res.status(400).json({erroDoServidor: `${error}`})
		}
	}
}