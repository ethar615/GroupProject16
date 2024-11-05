var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('home', {
      title: 'Home'
  
    });
  });
/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.render('home', {
    title: 'Home'

  });
});

  /* GET users listing. */
router.get('/Aboutme', function(req, res, next) {
    res.render('aboutme', {
      title: 'About Me'
  
    });
  });

  /* GET users listing. */
router.get('/projects', function(req, res, next) {
    res.render('projects', {
      title: 'Projects'
  
    });
  });

  /* GET users listing. */
router.get('/contactme', function(req, res, next) {
    res.render('contactme', {
      title: 'Contact Me'
  
    });
  });
module.exports = router;