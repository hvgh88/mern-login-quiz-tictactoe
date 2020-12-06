import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Winner from '../models/winnerModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/storewinner
// @access  Public
const storeQuizWinner = asyncHandler(async (req, res) => {
  const { name, type, score } = req.body

  const winner = await Winner.create({
    name,
    type,
    score,
  })

  if (winner) {
    res.status(201).json({
      _id: winner._id,
      name: winner.name,
      type: winner.type,
      score: winner.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


export {
  authUser,
  storeQuizWinner
}
