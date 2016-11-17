const mongoose = require('mongoose');
const config = require('./variables.express');

// add promises to model objects
// you setup this only one time before the connexion so after you can work with promise on model instance or class instance
mongoose.Promise = global.Promise;
// initial connection to mongo database
// mongoose.connect(config.MONGODB.URI);
mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  if(err) {
    console.log('Error connecting to database');
    process.exit(1);
  }
  console.log('Successfully connected to database...')
});

// We have a pending connection to the database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:
const db = mongoose.connection
  .on('error', console.error.bind(console, 'connection error'))
  .once('open', function() {
    console.log('Connected to mongoDB');
  });
