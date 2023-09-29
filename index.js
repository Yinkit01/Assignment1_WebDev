process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');
// keepAlive();
// const keepAlive = require('./server');
// const Monitor = require('ping-monitor');
// const monitor = new Monitor({
//   website: '',
//   title: 'NAME',
//   interval: 2
// });