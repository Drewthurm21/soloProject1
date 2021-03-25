//import express & initialize app
const express = require('express');
const app = express()

// import packages & requirements for use in app.js
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes')
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

//set & check environment details
const { environment } = require('./config');
const isProduction = environment === 'production';

//initialize app and use general middlewares
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



//ERROR HANDLING
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'SQL Validation error';
  }
  next(err);
});

// Format errors before returning. Return null in stack trace if production.
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;