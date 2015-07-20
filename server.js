var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require("underscore"),
    mongoose = require('mongoose'),
    Suggestion = require('./models/suggestion');


mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/flofl' // plug in the db name you've been using
);


  
// configure bodyParser (for handling data)
app.use(bodyParser.urlencoded({extended: true}));
 

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// root route (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/landing.html');
});

app.get('/house', function (req, res) {
  res.sendFile(__dirname + '/public/views/indexhouse.html');
});

app.get('/techno', function (req, res) {
  res.sendFile(__dirname + '/public/views/indextechno.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/public/views/about.html');
});

// API ROUTES

// get all posts
app.get('/api/suggestion', function (req, res) {
  // find all posts from the database 
  Suggestion.find({}, function(err, allSuggestions){
    if (err){
      console.log("error: ", err);
      res.status(500).send(err);
    } else {
      // send all posts as JSON response
      res.json(allSuggestions); 
    }
  });

});

app.post('/api/suggestion', function (req, res){
 
  var suggestion = new Suggestion ({
    post: req.body.post
  })
    console.log(suggestion)
  suggestion.save(function(err, suggestion) {
    res.json(suggestion)
  })

});

// set server to localhost:3000
app.listen(process.env.PORT || 3000); 