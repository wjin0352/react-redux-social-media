const express = require('express');
const router = express.Router();
const controller = require('./main.controller');

router.get('/', controller.getRoot);
// router.get('/', controller.toReact);
module.exports = router;
