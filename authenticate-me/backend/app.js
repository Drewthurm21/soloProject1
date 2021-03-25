// import packages & requirements for use in app.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes')

//set / check environment 
const { environment } = require('./config');
const isProduction = environment === 'production';

//initialize app and use general middlewares
const app = express()
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())

// Security Middleware
// enable cors only in development
if (!isProduction) {
  app.use(cors());
}

// helmet sets a variety of headers to better secure your app
app.use(helmet({
  contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(csurf({
  cookie: {
    secure: isProduction,
    sameSite: isProduction && "Lax",
    httpOnly: true,
  },
}
));

//Begin checking routes
app.use(routes)  // Connect all the routes
module.exports = app;