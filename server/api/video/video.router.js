const express = require('express');
const router = express.Router();
const controller = require( './video.controller');
const isAuthenticated = require('../auth/auth');

router.get('/', controller.getVideos)
  .post('/', isAuthenticated, controller.createVideo)
  .put('/:id', isAuthenticated, controller.editVideo)
  .delete('/:id', isAuthenticated, controller.deleteVideo)

module.exports = router;
