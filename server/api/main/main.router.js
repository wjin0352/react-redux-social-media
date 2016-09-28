import express from 'express';
const router = express.Router();
import controller from './main.controller';

router.get('/', controller.getRoot);

export default router;
