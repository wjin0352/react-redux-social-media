const mongoose = require('mongoose');
const config = require('./variables.express');
// const heroku_config_var = require('../env');

// add promises to model objects
// you setup this only one time before the connection so after you can work with promise on model instance or class instance
mongoose.Promise = global.Promise;

mongoose.connect(config.MONGOLAB_URI, (err, database) => {
  if(err) {
    console.log('Error connecting to database...ERROR: ', err);
    process.exit(1);
  }
});
