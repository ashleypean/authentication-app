import mongoose, {Schema, model, Document, Types} from 'mongoose'


export interface ILogin extends Document {
  email: string 
  password: string
  created_at: Date
  updated_at: Date
}

const LoginSchema = new Schema({
  email: {
    type: String,
    required: true, 
    unique: true
  }, 
  password: {
    type: String, 
    required: true
  },
  created_at: {
    type: Date,
    default: new Date()
  }, 
  updated_at: {
    type: Date, 
    default: new Date()
  }
})

export default model<ILogin>('Users', LoginSchema)