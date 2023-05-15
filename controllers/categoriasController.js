import categorias from '../models/categoria.js'



export default class CategoriasController{
	static getCategorias = async(req,res)=>{
		try {
			const categoriasLista = await categorias.find()
			res.status(200).json(categoriasLista)
		} catch (error) {
			res.status(500).json({error: `${error}`})
		}
	}
	static postCategoria = async(req,res)=>{
		try {
			const {nome,subcategorias} = req.body
			const novaCategoria = {
				nome,
				subcategorias
			}
			await categorias.create(novaCategoria)
			res.status(201).json({message: 'categoria criada com sucesso'})
		} catch (error) {
			res.status(400).json({error: `${error}`})
		}
	}
	static deleteCategoria = async(req,res) =>{
		try {
			const categoriaDeletada = await categorias.findByIdAndDelete(req.params.id)
			res.status(200).json({message: 'categoria deletada', categoria: categoriaDeletada })
		} catch (error) {
			console.log(error)
		}
	}

	static getCategoria = async(req,res)=>{
		try {
			const categoria = await categorias.findById(req.params.id)
			res.status(200).json(categoria)
		} catch (error) {
			res.status(400).json({error: `${error}`})
		}
	}

}