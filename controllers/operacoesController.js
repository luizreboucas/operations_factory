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
			const {tipo,categoria,valor,descricao} = req.body
			const data = new Date()
			const novaOperacao = {
				tipo,categoria,valor,data,descricao
			}
			await operacoes.create(novaOperacao)
			res.status(201).json({message: 'nova operação realizada'})
		} catch (error) {
			res.status(400).json({error: `${error}`})
		}
	}
}