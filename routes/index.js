// var express
// require express
var express = require('express');
// var router =
// express.Router()
var router = express.Router();

// var home
// require
// ./../controller/home.js
var home = require('./../controller/home');

router.get('/', home.index);

module.exports = router;
