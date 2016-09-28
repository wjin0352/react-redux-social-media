import express from 'express';
import router from express.Router();
import controller from './video.controller';

router.get('/videos', controller.getVideos)
  .post('/videos', controller.createVideo)
  .put('/videos/:id', controller.editVideo)
  .delete('/videos/:id', controller.deleteVideo)

export default router;
