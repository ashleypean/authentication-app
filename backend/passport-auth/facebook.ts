const FacebookStrategy = require('passport-facebook').Strategy
require('dotenv').config()

import Users from '../models/Login'
import UserInfo from '../models/UserInfo'

const Facebook = new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID, 
  clientSecret: process.env.FACEBOOK_KEY, 
  callbackURL: '/', 
  profileFields: ['name', 'email', 'link'],
  passReqToCallback: true
  }, 
  (req:any, accessToken, refreshToken, profile, done) => {
    if(req.user) {
      Users.findOne({facebook: profile.id}, (err, existingUser) => {
        if(err) {return done(err)}
        if(existingUser) {
          req.flash('errors', {msg: "There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings."})
          done(err)
        }else {
          const user:any = new Users()
          user.email = profile._json.email
          user.tokens.push({kind: 'facebook', accessToken})
          user.save((err:Error) => {
            done(err, user)
          })

          const userInfo:any = new UserInfo()
          userInfo.email = profile._json.email
          userInfo.name = `${profile.name.givenName} ${profile.name.familyName}`
          userInfo.photo = `https://graph.facebook.com/${profile.id}/picture?type=large`
          userInfo.save((err:Error) => {
            done(err, user)
          })
        }
      })
    }
  }
)

export default Facebook