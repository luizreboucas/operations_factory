import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
// eslint-disable-next-line no-undef
mongoose.connect(process.env.CONNECTION_LINK)

const bd = mongoose.connection

export default bd