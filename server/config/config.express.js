import express from 'express';
import bodyParser from 'body-parser';

module.exports = function (app) {
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
}
