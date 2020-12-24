const express = require('express')
const app = express()
const PORT = 3001
require('dotenv').config()
import * as bcrypt from 'bcrypt'

//Database config
const mongoose = require('mongoose')
//Schemas
import Users from './models/Login'
import UserInfo from './models/UserInfo'

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true
})

const db = mongoose.connection

db.once('open', async () => {
  console.log('Database connected')
})
db.on('error', async() => {
  console.log('error connecting to the database')
})

//Passport config
const passport = require('passport')
passport.serializeUser((user:any, done:any) => {
  done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err, user) => {
      done(err, user);
  });
});

//AUTH STRATEGIES
//Local  
const local = require('./passport-auth/local')
passport.use('local', local)

//Facebook  
const Facebook = require('./passport-auth/facebook')
passport.use('facebook', Facebook)

//Google
const Google = require('./passport-auth/google')
passport.use('google', Google)

//Github 
const Github = require('./passport-auth/github')
passport.use('github', Github)

//Twitter
const Twitter = require('./passport-auth/twitter')
passport.use('twitter', Twitter)


app.get('/', (req:any, res:any) => {
  res.send('hello world')
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
