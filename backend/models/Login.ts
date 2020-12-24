import mongoose, {Schema, model, Document, Types} from 'mongoose'


export interface ILogin extends Document {
  email: string 
  password: string
  githubId: string
  googleId: string
  twitterId: string
  facebookId: string
  tokens: string
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
  
  githubId: String,

  googleId: String,

  twitterId: String, 

  facebookId: String,

  tokens: String,
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