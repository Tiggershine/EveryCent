import express from 'express';
const router = express.Router();
import User from '../models/user.model.mjs'

// Register new user
router.post('/register', (req, res) => {
  let userData  = req.body;

  User.findOne( { email: userData.email }, async (err, user) => {
    try {
      if (user) {
        return res.status(409).send("This email has already registered!");
      } else {
        const user = new User({
          email: userData.email,
          password: userData.password,
          username: userData.username,
          createdAt: Date.now()
        })
        const result = await user.save();
        return res.json({success: true});
      }
    } catch (err) {
      console.log(err);
      return res.json({success: false});
    }
  })
})

// Login user
router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (err, user) => {
    try {
      if (!user || (user.password !== userData.password)) {
        res.json({validUser: false});
        res.status(401).send("Invalid email or password!");
       
      } else {
        res.json({validUser: true});
        res.status(200).send(user);
      }
    } catch (err) {
      console.log(err);
    }
  })
})




export default router;


