const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
var passport = require('passport');

router.get('/', controller.getUsers)
  .put('/:id',  controller.editUser)
  .delete('/:id', controller.deleteUser)
  .post('/register',  controller.registerUser)
  // login route for redirect if bad login
  .post('/login', passport.authenticate('local'), function (req, res) {
    // console.log('from post /login  req.user: ', req.user)
    res.status(200).json(req.user)
  })
  .get('/logout', controller.logout)
module.exports = router;
