const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Import routes
const indexRouter = require('./routes/index');

// Use routes
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log('Server running at http://localhost:3000/');
});
