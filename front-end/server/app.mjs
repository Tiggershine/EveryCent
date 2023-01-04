import dotenv from 'dotenv';
dotenv.config();
const { MONGODB_URI } = process.env;
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import userRoutes from './api/routes/user.mjs'
import productCardRoutes from './api/routes/productCard.mjs';


const app = express();

// parse requests of content-type - json/urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport config
import passportconfig from './config/passport.mjs';
passportconfig(passport);

// Express Session
app.use(session({
  secret: 'everycent secret',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: MONGODB_URI, 
    collectionName: 'sessions'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 3  // 3hours
  }
}));

// Passport initialize
app.use(passport.initialize());
app.use(passport.session());

// print the request log on console
app.use(morgan('tiny'));

// set CORS
app.use(cors());

// TODO: 나중에 지울것
app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
})

// Routes which should handle requests
app.use('/user', userRoutes);
app.use('/card', productCardRoutes);

// TODO: 나중에 지울것
app.get('/', (req, res) => {
  res.send('Hello!')
});
app.post('/', (req, res) => {
});

app.get('/login-success', (req, res) => {
  res.send('loggedin');
})

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


export default app;
