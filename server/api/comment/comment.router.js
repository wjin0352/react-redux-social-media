const express = require('express');
const router = express.Router();
const controller = require('./comment.controller');
const isAuthenticated = require('../auth/auth');

router.get('/', controller.getComments)
  .post('/', isAuthenticated, controller.createComment)
  .put('/:id', isAuthenticated, controller.editComment)
  .delete('/:id', isAuthenticated, controller.deleteComment)

module.exports = router;
