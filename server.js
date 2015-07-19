var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require("underscore");



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


// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});