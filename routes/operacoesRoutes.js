import express from 'express'
import OperacoesController from '../controllers/operacoesController.js'
const Router = express.Router()

Router
	.get('/operacoes',OperacoesController.getOperacoes)
	.post('/operacoes',OperacoesController.postOperacao)

export default Router