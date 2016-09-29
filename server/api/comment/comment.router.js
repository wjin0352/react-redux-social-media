import express from 'express';
import router from express.Router();
import controller from './comment.controller';

router.get('/comments', controller.getPost)
  .post('/comments', controller.createComment)
  .put('/comments/:id', controller.editComment)
  .delete('/comments/:id', controller.deleteComment)

export default router;
