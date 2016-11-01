const express = require('express');
const router = express.Router();
const controller = require('./main.controller');

router.get('/', controller.getRoot);

module.exports = router;
