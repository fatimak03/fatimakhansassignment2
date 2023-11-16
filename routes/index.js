var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About'
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'Projects'
  });
});

/* GET workout page. */
router.get('/workout', function(req, res, next) {
  res.render('workout', {
    title: 'Workout Tracker'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;
