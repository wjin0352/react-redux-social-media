const mongoose = require('mongoose');
const config = require('./variables.express');
// const heroku_config_var = require('../env');

// add promises to model objects
// you setup this only one time before the connexion so after you can work with promise on model instance or class instance
mongoose.Promise = global.Promise;
// initial connection to mongo database
// mongoose.connect(config.MONGODB.URI);
// exports.MONGOLAB_URL = process.env.MONGOLAB_URL ||
//                        global.MONGOLAB_URL ||
//                        (process.env.NODE_ENV === 'production' ?


// var MLAB_USER = process.env.MLAB_USER;
// var MLAB_PW = process.env.MLAB_PW;
//
// mongoose.connect('mongodb://' + MLAB_USER + ':' + MLAB_PW + '@ds019970.mlab.com:19970/mongotest', function(err) {
//     if (err) {
//         console.log('connection error', err);
//     } else {
//         console.log('connection successful');
//     }
// });

mongoose.connect(config.MONGOLAB_URI, (err, database) => {
  if(err) {
    console.log('Error connecting to database...ERROR: ', err);
    process.exit(1);
  }
});

// We have a pending connection to the database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:
const db = mongoose.connection
  .on('error', console.error.bind(console, 'connection error'))
  .once('open', () => {
    console.log('Connected to mongoDB');
  });
