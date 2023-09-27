const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects', (req, res) => {
  // Fetch project data from your database or use static data
  const projects = [
    {
      title: 'Project 1',
      description: 'Personal Portfolio',
      image: 'project1.jpg',
    },
    // Add more project objects as needed
  ];

  res.render('projects', { projects });
});

router.get('/services', (req, res) => {
  // Define your services here
  const services = ['Web Development', 'Mobile Apps', 'UI/UX Design'];

  res.render('services', { services });
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
