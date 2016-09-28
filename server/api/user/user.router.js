import express from 'express';
import router from express.Router();
import controller from './user.controller';

router.get('/users', controller.getUsers)
  .post('/users', controller.createUser)
  .put('/users/:id', controller.editUser)
  .delete('/users/:id', controller.deleteUser)

export default router;
