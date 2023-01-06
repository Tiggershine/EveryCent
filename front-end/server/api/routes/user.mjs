import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import passport from 'passport';
import User from '../models/user.model.mjs'

// Register new user
router.post('/register', (req, res) => {
  let { email, username, password }  = req.body;

  User.findOne( { email: email }, async (err, user) => {
    try {
      if (user) {
        return res.status(409).send("This email has already registered!");
      } 
      else {
        const user = new User({
          email: email,
          username: username,
          password: password,
          createdAt: Date.now()
        })

        // Hash the password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, async (err, hash) => {
            if (err) throw err;
            user.password = hash;
            await user.save()
            return res.json({ success: true });
          })
        })
      }
    } catch (err) {
      console.log(err);
      return res.json({ success: false });
    }
  })
})


// Login 
router.post('/login', passport.authenticate('local', {
  successRedirect: 'user/login-success',
  failureRedirect: 'user/login-failure'
}));


// Logout
router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('user/login');
});


// Logged In
router.get('/user/login-success', (req, res) => {
  res.send('login-success');
});
router.post('/user/login-success', (req, res) => {
  res.send('login-success');
});

router.get('/login-failure', (req, res) => {
  res.send('login-failure');
});

export default router;


