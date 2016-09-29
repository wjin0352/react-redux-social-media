const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.getUsers)
  .post('/', controller.createUser)
  .put('/:id', controller.editUser)
  .delete('/:id', controller.deleteUser)

module.exports = router;
