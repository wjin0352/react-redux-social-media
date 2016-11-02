const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const userController = require('../user/user.controller');
const isAuthenticated = require('../auth/auth');

router.get('/', controller.getPosts)
  .get('/user', controller.getUserPosts)
  .get('/:id', controller.getCurrentPost)
  .post('/', isAuthenticated, controller.createPost)
  .put('/:id', isAuthenticated, controller.editPost)
  .delete('/:id', isAuthenticated, controller.deletePost)

module.exports = router;
