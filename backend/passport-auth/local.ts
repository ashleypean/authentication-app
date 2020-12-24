import passportLocal from 'passport-local'
const LocalStrategy = require('passport-local').Strategy

import Users from '../models/Login'

//Regular sign in using email and password
const local = new LocalStrategy(
  {
    usernameField: 'email', 
    passwordField: 'password'
  }, 

  function(email, password, done) {
    Users.findOne({email: email}, function(err, user:any) {
      //Error handling
      if(err) {return done(err)}
      //User does not exist in database
      if(!user) {
        return done(null, false, {message: 'User not found.'})
      }

      user.comparePassword(password, (err: Error, isMatch: boolean) => {
        //Error handling
        if (err) { return done(err) } 
         //User is found 
        if (isMatch) {return done(undefined, user)}
        //All other possibilites 
        return done(undefined, false, { message: "Invalid email or password." });
      });
    })
  })

export default local