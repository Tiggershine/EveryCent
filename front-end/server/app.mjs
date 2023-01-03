import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import userRoutes from './api/routes/user.mjs'
import productCardRoutes from './api/routes/productCard.mjs';

const app = express();

// Passport config
import passportconfig from './config/passport.mjs';
passportconfig(passport);

// print the request log on console
app.use(morgan('tiny'));

// parse requests of content-type - json/urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set CORS
app.use(cors());

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes which should handle requests
app.use('/user', userRoutes);
app.use('/card', productCardRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'login success!' });
});
app.post('/', (req, res) => {
  res.json({ message: 'login success!' });
});

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
