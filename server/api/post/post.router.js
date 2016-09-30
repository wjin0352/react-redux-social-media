import express from 'express';
import router from express.Router();
import controller from './post.controller';

router.get('/', controller.getPosts)
  .post('/', controller.createPost)
  .put('/:id', controller.editPost)
  .delete('/:id', controller.deletePost)

export default router;
