import express from 'express';
import router from express.Router();
import controller from './video.controller';

router.get('/', controller.getVideos)
  .post('/', controller.createVideo)
  .put('/:id', controller.editVideo)
  .delete('/:id', controller.deleteVideo)

export default router;
