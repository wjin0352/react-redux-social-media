const express = require('express');
const router = express.Router();
const controller = require('./post.controller');

router.get('/', controller.getPosts)
  .post('/', controller.createPost)
  .put('/:id', controller.editPost)
  .delete('/:id', controller.deletePost)

module.exports = router;
