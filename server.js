var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require("underscore"),
    cors = require("cors"),
    mongoose = require("mongoose"), 
    Suggestion = require("./models/suggestion"),
    User = require("./models/user"), 
    session = require('express-session');


mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost/flofl" // plug in the db name you've been using
);

  
// configure bodyParser (for handling data)
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
 

// serve js and css files from public folder
app.use(express.static(__dirname + "/public"));


//API ROUTES:
//SUGGESTIONS QUERY
app.get("/api/suggestion", function (req, res) {
  console.log(Suggestion);
  Suggestion.find().sort("-_id").exec(function(err, suggestions){
    console.log(suggestions);
    res.json(suggestions);
  });
});

//SUGGESTIONS CREATE
app.post("/api/suggestion", function (req, res){
  //SAVE TO DB
  var suggestion = new Suggestion({
    text: req.body.text
  });

  suggestion.save(function(err, suggestion){
    res.json(suggestion);
  });
});

//USER CREATE
// create new user with secure password


//PUBLIC ROUTES

// root route (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/views/landing.html");
});

app.get('/house', function (req, res) {
  res.sendFile(__dirname + "/public/views/indexhouse.html");
});

app.get('/techno', function (req, res) {
  res.sendFile(__dirname + "/public/views/indextechno.html");
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get('/login', function (req, res) {
  res.sendFile(__dirname + "/public/views/login.html");
});




// set server to localhost:3000
app.listen(process.env.PORT || 3000); 
