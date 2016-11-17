const mongoose = require('mongoose');
const config = require('./variables.express');

// add promises to model objects
// you setup this only one time before the connexion so after you can work with promise on model instance or class instance
mongoose.Promise = global.Promise;
// initial connection to mongo database
// mongoose.connect(config.MONGODB.URI);
exports.MONGOLAB_URL = process.env.MONGOLAB_URL ||
                       global.MONGOLAB_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://heroku_l8rqwvtq:g5g32e7t0hdc5v08s7g21gqt0u@ds155727.mlab.com:55727/heroku_l8rqwvtq' :
                            'mongodb://localhost/blog');
exports.PORT = process.env.PORT || 8080;

console.log('MONGOLAB_URL: ', process.env.MONGOLAB_URI)
console.log('process.env.PORT: ', process.env.PORT)
console.log('process.env.MONGODB_URI: ',process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, (err, database) => {
  if(err) {
    console.log('Error connecting to database');
    process.exit(1);
  }
});

// We have a pending connection to the database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:
const db = mongoose.connection
  .on('error', console.error.bind(console, 'connection error'))
  .once('open', function() {
    console.log('Connected to mongoDB');
  });
