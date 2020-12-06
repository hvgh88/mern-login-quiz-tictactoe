import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import quizRoutes from './routes/quizRoutes.js';
import userRoutes from './routes/userRoutes.js';
import winnerRoutes from './routes/winnerRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3500
app.get('/', (req, res) => {
    res.send('API is running')
})
app.use('/api/quiz', quizRoutes);
app.use('/api/users', userRoutes);
app.use('/api/storewinner', winnerRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${process.env.PORT} `))
