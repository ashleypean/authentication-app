import { Schema } from 'mongoose'

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

export default UserInfoSchema 
