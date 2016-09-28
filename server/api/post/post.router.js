import express from 'express';
import router from express.Router();
import controller from './post.controller';

router.get('/posts', controller.getPosts)
  .post('/posts', controller.createPost)
  .put('/post/:id', controller.editPost)
  .delete('/post/:id', controller.deletePost)

export default router;
