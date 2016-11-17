const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const userController = require('../user/user.controller');
const isAuthenticated = require('../auth/auth');

router.get('/posts', controller.getPosts)
  .get('/posts/users/:user_id', controller.getUserPosts)
  .post('/posts', isAuthenticated, controller.createPost)
  .get('/posts/:id', controller.getCurrentPost)
  .put('/posts/:id', isAuthenticated, controller.editPost)
  .delete('/posts/:id', isAuthenticated, controller.deletePost)

module.exports = router;
