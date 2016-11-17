const express = require('express');
const router = express.Router();
const controller = require('./comment.controller');
const isAuthenticated = require('../auth/auth');

router.get('/posts/:post_id/comments', controller.getPostComments)
  .post('/posts/:post_id/comments', isAuthenticated, controller.createComment)
  .put('/comments/:id', isAuthenticated, controller.editComment)
  .delete('/comments/:id', isAuthenticated, controller.deleteComment)

module.exports = router;
