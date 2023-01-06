import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import bcrypt from 'bcryptjs';

import User from '../api/models/user.model.mjs'

export default function (passport) {
  passport.use(
    new LocalStrategy(
      { 
        usernameField: 'email', 
        passwordField: 'password', 
        session: true 
      }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );
  

  // After success of login store the user information into session 
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // Deserialize user info through the info from session
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });
};
