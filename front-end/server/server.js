/* ==============================
    Load the dependencies
============================== */
import dotenv from 'dotenv';
dotenv.config();
const { PORT, MONGODB_URI } = process.env;
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import User from './models/user.model.js';


/* ==============================
   Express configuration
============================== */
const app = express();

// set port
const port = PORT || 3000;
// print the request log on console
app.use(morgan('tiny'));
// set CORS
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ message: "Hello from Server!"})
});

app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`)
});


/* ==============================
   Connect to MongoDB server
============================== */
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI).
  then(() => console.log("Connected to MongoDB!")).
  catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit;
  })


  /* ==============================
   Configure api router
============================== */
const router = express.Router();


// User - Register
app.post('/register', (req, res) => {
    let userData  = req.body;

    User.findOne( { email: userData.email }, async (err, user) => {
      try {
        if (user) {
          return res.status(409).send("This email has already registered!");
        } else {
          const user = new User({
            email: userData.email,
            password: userData.password,
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


// User - Login
app.post('/login', (req, res) => {
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





export { router };
