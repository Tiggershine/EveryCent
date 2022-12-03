const express = require('express');
const bodyParser = require('body-parser'); //Middleware to handle form data such as user registration
const cors = require('cors');  //Cross Origin Resource Sharing
const morgan = require('morgan');  //Logging middleware
const helmet = require('helmet');  //Set various HTTP header => improve security

const PORT = 4000;
const app = express();
const api = require('./api')

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/api', api);
app.get('/', (req, res) => {
  res.send('Hello from Server!')
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`On port ${PORT} ${new Date()}`)
}); 
