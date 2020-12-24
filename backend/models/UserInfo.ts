import mongoose, {Schema, Document, model} from "mongoose"

interface IUserInfo extends Document {
  photo: Buffer 
  name: string
  bio: string
  email: string
  password: string 
}

const UserInfoSchema = new Schema({
  photo: {
    data: Buffer, 
    contentType: String
  }, 
  name: String, 
  bio: {
    type: String, 
    maxlength: 200
  }, 
  email: String, 
  password: String
})

export default model<IUserInfo>('UserInfo', UserInfoSchema)