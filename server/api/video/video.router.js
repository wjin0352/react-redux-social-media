const express = require('express');
const router = express.Router();
const controller = require( './video.controller');

router.get('/', controller.getVideos)
  .post('/', controller.createVideo)
  .put('/:id', controller.editVideo)
  .delete('/:id', controller.deleteVideo)

module.exports = router;
