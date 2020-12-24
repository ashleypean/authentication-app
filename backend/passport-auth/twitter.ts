const TwitterStrategy = require('passport-twitter').Strategy
require('dotenv').config()

import Users from '../models/Login'
import UserInfo from '../models/UserInfo'

const Twitter = new TwitterStrategy({
  clientID: process.env.TWITTER_APP_ID, 
  clientSecret: process.env.TWITTER_KEY, 
  callbackURL: '/', 
  passReqToCallback: true
  }, 
  (req:any, accessToken, refreshToken, profile, done) => {
    if(req.user) {
      Users.findOne({twitterId: profile.id}, (err, existingUser) => {
        if(err) {return done(err)}
        if(existingUser) {
          req.flash('errors', {msg: "There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings."})
          done(err)
        }else {
          const user:any = new Users()
          user.email = profile._json.email
          user.tokens.push({kind: 'twitter', accessToken})
          user.save((err:Error) => {
            done(err, user)
          })

          const userInfo:any = new UserInfo()
          userInfo.email = profile._json.email
          userInfo.save((err:Error) => {
            done(err, user)
          })
        }
      })
    }
  }
)


export default Twitter