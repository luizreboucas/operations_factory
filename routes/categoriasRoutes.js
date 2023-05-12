import CategoriasController from '../controllers/categoriasController.js'
import express from 'express'
const Router = express.Router()


Router
	.get('/categorias', CategoriasController.getCategorias)
	.get('/categorias/:id', CategoriasController.getCategoria)
	.post('/categorias',CategoriasController.postCategoria)
	.delete('/categorias/:id',CategoriasController.deleteCategoria)
    


export default Router