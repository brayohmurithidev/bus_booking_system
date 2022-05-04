const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const busesRoute = require('./routes/buses');


// Midlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());
app.use(cors());

// ROUTES GOES HERE
app.use('/buses', busesRoute);


// Handle errors that don't succeed all the above middlewares

app.use((req,res, next)=>{
  const error = new Error('Not Found');
  error.status= 404;
  next(error);
});

// All errors handler
app.use((error, req, res, next) =>{
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})




module.exports = app;
