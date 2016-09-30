const express = require('express');
const router = express.Router();
const controller = require('./comment.controller');

router.get('/', controller.getPost)
  .post('/', controller.createComment)
  .put('/:id', controller.editComment)
  .delete('/:id', controller.deleteComment)

module.exports = router;
