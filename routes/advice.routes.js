import express from 'express';
import { createAdvice, getRandomAdvice, createMultipleAdvice } from '../controller/advice.controller.js';

const router = express.Router();

router.post('/sendadvice', createAdvice);
router.post('/bulkAdvice', createMultipleAdvice);
router.get('/getadvice', getRandomAdvice);

export default router;
