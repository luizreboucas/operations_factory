import login from '../models/login.js'

export default class LoginController{
	static autorizaLogin = async(req,res)=>{
		try {
			const {user,password} = req.body
			const usuario = {
				user,
				password
			}
			const usuarioCadastrados = await login.find()
			const arrPermissao = usuarioCadastrados.filter(user => user.user === usuario.user && user.password === usuario.password)
			if(arrPermissao.length > 0){
				res.status(200).send('usuário logado')
			}else{
				res.status(400).send('usuario não encontrado')
			}
			
			
		} catch (error) {
			res.status(400).send('Dados não corretos')
		}
	}
}