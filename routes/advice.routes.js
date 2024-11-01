import express from 'express';
import { createAdvice, getRandomAdvice } from '../controller/advice.controller.js';

const router = express.Router();

router.post('/sendadvice', createAdvice);

router.get('/getadvice', getRandomAdvice);

export default router;
