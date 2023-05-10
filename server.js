import express from 'express'
import dotenv from 'dotenv'
import categoriasRoutes from './routes/categoriasRoutes.js'
import operacoesRoutes from './routes/operacoesRoutes.js'
import cors from 'cors'
dotenv.config()
import db from './config/bdConfig.js'
db.on('error',(error)=>{
	console.log(error)
})

db.once('open', ()=>{
	console.log('Db Connected')
})
// eslint-disable-next-line no-undef
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(categoriasRoutes)
app.use(operacoesRoutes)
app.listen(PORT,()=>{
	console.log(`server running on port ${PORT}`)
})


export default app




