const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const userController = require('../user/user.controller');
const isAuthenticated = require('../auth/auth');

router.get('/', controller.getPosts)
  .post('/', isAuthenticated, controller.createPost)
  .put('/:id', controller.editPost)
  .delete('/:id', controller.deletePost)

module.exports = router;
