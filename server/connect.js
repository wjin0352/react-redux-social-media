const mongoose = require('mongoose');
const env = require('./environment');

const mongo_uri = process.env.MONGO_URI || 'mongodb:localhost/social-media'

module.exports = function () {
  return new Promise(function(resolve, reject) {
    mongoose.connect(mongo_uri, function(err, db) {
      if (err) {
        console.log(err);
        db.close();
        reject(err);
        return;
      }
      console.log('connected to mongoDB database');
      resolve(db);
    });
  })
}
