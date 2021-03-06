// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.create([req.body.name,false], function() {
    res.redirect('/index');
  });
  console.log(req.body.name)
});


// Devour a Burger
router.put('/burger/eat/:id', function (req, res) {
  burger.update({devoured:true}, req.params.id,function() {
    // res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;