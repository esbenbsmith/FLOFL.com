var request = require('request')
  , expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('https://flofl.herokuapp.com/', function() {
  it('should have a HTTPS of 200 - success', function(done) {
    request('https://flofl.herokuapp.com/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});




describe('https://flofl.herokuapp.com/house', function() {
  it('should have a HTTPS of 200 - success', function(done) {
    request('https://flofl.herokuapp.com/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});


describe('https://flofl.herokuapp.com/techno', function() {
  it('should have a HTTPS of 200 - success', function(done) {
    request('https://flofl.herokuapp.com/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

describe('https://flofl.herokuapp.com/about', function() {
  it('should have a HTTPS of 200 - success', function(done) {
    request('https://flofl.herokuapp.com/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

describe('https://flofl.herokuapp.com/api/suggestion', function() {
  it('should have a HTTPS of 200 - success', function(done) {
    request('https://flofl.herokuapp.com/api/suggestion', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});