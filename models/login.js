import mongoose from 'mongoose'

const loginSchema = new mongoose.Schema({
	user: {type: String, required: true},
	password: {type: String}
})

const login = mongoose.model('login', loginSchema)
export default login