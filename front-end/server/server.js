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
import * as productCardRepository from './models/productCard.model.js'


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


// Get all cards
app.get('/cards', async (req, res) => {
  const productCards = await productCardRepository.getAll();
  if (productCards) {
    res.status(200).json(productCards);
  } else {
    res.status(400).json({message: 'product-cards are not found'});
  }
})

// Update the card
app.put('/card/:id', async (req, res) => {
  const { title, description, imageUrl, user, district, dealType, contact } = req.body;
  const id = req.params.id;
  const productCard = await productCardRepository.getProductCard(id);
  if (!productCard) {
    res.status(404).json({ message: `can not find product-card with ${id}`});
  }
  const updated = await productCardRepository.updateCard(id, title, description, imageUrl, user, district, dealType, contact);
  res.status(200).json(updated);
})

// Delete the card
app.delete('/card/:id', async (req, res) => {
  const id = req.params.id;
  const productCard = await productCardRepository.getProductCard(id);
  if (!productCard) {
    res.status(404).json({ message: `can not find product-card with ${id}`});
  }
  await productCardRepository.removeCard(id);
  res.sendStatus(204);
})

// Create a card
app.post('/card', async (req, res) => {
  const { title, description, imageUrl, user, district, dealType, contact } = req.body;
  const productCard = await productCardRepository.createCard(title, description, imageUrl, user, district, dealType, contact);
  res.status(201).json(productCard);
})





export { router };
