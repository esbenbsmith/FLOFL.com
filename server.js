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

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));


// middleware to manage sessions
app.use('/login', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user.id;
  };

  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };

  // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };

  next();
});

//API ROUTES:

// API SUGGESTIONS QUERY
app.get("/api/suggestion", function (req, res) {
  console.log(Suggestion);
  Suggestion.find().sort("-_id").exec(function(err, suggestions){
    console.log(suggestions);
    res.json(suggestions);
  });
});

// API SUGGESTIONS CREATE
app.post("/api/suggestion", function (req, res){
  //SAVE TO DB
  var suggestion = new Suggestion({
    text: req.body.text
  });

  suggestion.save(function(err, suggestion){
    res.json(suggestion);
  });
});


// AUTH ROUTES (SIGN UP, LOG IN, LOG OUT)

// create new user with secure password
app.post('/users', function (req, res) {
  var newUser = req.body.user;
  User.createSecure(newUser, function (err, user) {
    // log in user immediately when created
    // req.login(user);
    console.log(newUser);
    res.redirect('/');
  });
});

// authenticate user and set session
app.post('/login', function (req, res) {
  var userData = req.body.user;
  User.authenticate(userData.email, userData.password, function (err, user) {
    req.login(user);
    res.redirect('/');
  });
});

// log out user (destroy session)
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


//STATIC ROUTES

// root route (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/views/landing.html");
  
});

//house
app.get('/house', function (req, res) {
  res.sendFile(__dirname + "/public/views/indexhouse.html");
});

//techno
app.get('/techno', function (req, res) {
  res.sendFile(__dirname + "/public/views/indextechno.html");
});

//about
app.get('/about', function (req, res) {
  res.sendFile(__dirname + "/public/views/about.html");
});

//login/signup
app.get('/registration', function (req, res) {
  res.sendFile(__dirname + "/public/views/registration.html");
});




// set server to localhost:3000
app.listen(process.env.PORT || 3000); 
