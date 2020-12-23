import { Schema } from 'mongoose'

const LoginSchema = new Schema({
  email: String, 
  password: String, 
  created_at: {
    type: Date, 
    default: new Date()
  }, 
  updated_at: {
    type: Date, 
    default: new Date()
  }
})

export default LoginSchema