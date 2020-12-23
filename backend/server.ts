const express = require('express')
const app = express()
const PORT = 3001
require('dotenv').config()

//Database config
const mongoose = require('mongoose')
//Schemas
import LoginSchema from './models/Login'
import UserInfoSchema from './models/UserInfo'

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
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
const LocalStrategy = require('passport-local').Strategy
const session = require('cookie-session')


app.use(session({secret: process.env.SECRET_KEY}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy( 
  function(email, password, done) {

  })
)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/login', 
  //local authentication strategy 
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'})
)

app.post('/register')

app.get('/profile/view/:username')

app.patch('/profile/edit')

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
