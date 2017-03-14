#!/usr/bin/env node

// var app
// require
// ../app
var app = require('../app');

// app
// .set port
// process.env.PORT
// or 5502
app.set('port', process.env.PORT || 5502);

// var
// server
// app
// .listen
// app.get('port')
// func
var server = app.listen(app.get('port'), function() {
  // console log
  // text + server.address().port
  console.log('Express server listening on port ' + server.address().port);
});
