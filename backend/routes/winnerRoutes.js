import express from 'express'
const router = express.Router()
import {
  storeQuizWinner,
} from '../controllers/winnerController.js'

router.post('/storewinner', storeQuizWinner)
export default router
