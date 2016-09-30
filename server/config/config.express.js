const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = function (app) {
  app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(function(req, res, next) {
    // console.log(`This is the req.body ${req.body}`);
    next();
  });
}

// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:

// app.use(express.static(__dirname + '/public'));
