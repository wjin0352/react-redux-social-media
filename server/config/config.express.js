const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
const User = require('../api/user/user.model');
var session = require('express-session');
var userController = require('../api/user/user.controller');

module.exports = function (app) {
  // app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  // passport configuration
  app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session({ secret: 'keyboard cat',
                    cookie: { maxAge: 60000 },
                    resave: false,
                    saveUninitialized: false
                  }));

  // passport strategy
  passport.use(new LocalStrategy(
    function(username, password, callback) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return callback(err); }
        if (!user) {
          return callback(null, false, { message: 'Incorrect username.' });
        }
        user.validatePassword(password, function(err, isValid) {
          if (err) {
            return callback(err);
          }
          if (!isValid) {
            return callback(null, false, {message: 'Incorrect Password'});
          }
          return callback(null, user);
        });
      });
    }
  ));

  // global user if logged in
  app.use(function(req, res, next) { // For get user everywhere
    res.locals.user = req.user;
    next();
  });

  // passport sessions support
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


};
// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
// app.use(express.static(__dirname + '/public'));
