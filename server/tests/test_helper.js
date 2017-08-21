const mongoose = require('mongoose');

// use this es6 implementation of promises in node js
mongoose.Promise = global.Promise;

// seperate db setup for tests

// connect to database only once before entire test suite
before((done) => {
  mongoose.connect('mongodb://localhost/blog');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('Warning ', error);
    })
})

// before each test drop collection users
beforeEach(function(done) {
  mongoose.connection.collections.users.drop(function() {
    done();
  });
});