import express from 'express';
import asyncHandler from 'express-async-handler'
import Quiz from '../models/quizModel.js';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async(req, res) => {
    const quizzes = await Quiz.find({})
    res.json(quizzes)
}))

export default router;