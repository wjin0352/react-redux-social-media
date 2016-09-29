const mongoose = require('mongoose');
const config = require('./variables.express');

// initial connection to mongo database
mongoose.connect(config.MONGODB.URI);

// We have a pending connection to the database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Connected to mongoDB');
});
