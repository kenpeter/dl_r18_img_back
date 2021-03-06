// use strict
"use strict";

// express
const express = require('express');
// path
const path = require('path');
// serve favicon
const favicon = require('serve-favicon');
// parse cookie on browser
const cookieParser = require('cookie-parser');
// compression, better serve content
const compression = require('compression');
// parse request bogy
const bodyParser = require('body-parser');
//
var cors = require('cors');
// config, like mongo db
const config = require('./config');
// the route we have is home.js, spiderErr.js, statis.js
const routes = require('./routes/index');

// express app
const app = express();

//
app.use(cors());

// app uses favicon
// favicon
// __dirname + "/public/favicon.ico"
app.use(favicon(__dirname + '/public/favicon.ico'));

// app uses compression();
app.use(compression());

// app uses
// body parser with json
app.use(bodyParser.json());

// app uses
// body parser with urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app uses
// cookie parser, parse cookie
app.use(cookieParser());

// app uses
// express static(__dirname/public)
// __dirname/public
// https://expressjs.com/en/starter/static-files.html
app.use('/upload', express.static(config.imgRootPath.publicPath));

// app uses root path with routes
app.use('/', routes);

// app uses
// function
// request url, response 400, next move
app.use(function(req, res, next) {
  // error, not found
  var err = new Error('Not Found');
  // error 404
  err.status = 404;
  // response render error
  // next(err);
  res.render('error', {
    // msg, error msg
    message: err.message,
    // real err
    error: err
  });
});


// 500 error, just use, not executed.
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});



module.exports = app;
