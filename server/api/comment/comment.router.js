const express = require('express');
const router = express.Router();
const controller = require('./comment.controller');
const isAuthenticated = require('../auth/auth');

router.get('/:post_id', controller.getPostComments)
  .post('/', isAuthenticated, controller.createComment)
  .put('/:id', isAuthenticated, controller.editComment)
  .delete('/:id', isAuthenticated, controller.deleteComment)

module.exports = router;
