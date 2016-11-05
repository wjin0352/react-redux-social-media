const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const userController = require('../user/user.controller');
const isAuthenticated = require('../auth/auth');

router.get('/', controller.getPosts)
  .get('/user', controller.getUserPosts)
  .post('/', isAuthenticated, controller.createPost)
  .get('/:id', controller.getCurrentPost)
  .put('/:id', isAuthenticated, controller.editPost)
  .delete('/:id', isAuthenticated, controller.deletePost)

module.exports = router;
