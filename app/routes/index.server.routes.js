var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
res.render('about', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
res.render('projects', { title: 'Projects' });
});
router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});

router.get('/', (req, res) => {
    res.render('index', { layout: 'layout' }); // Render your view and specify the layout
  });
  
  module.exports = router;
