import mongoose from 'mongoose'

const winnerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    score: {
      type: String
    }
  },
  {
    timestamps: true,
  }
)


const Winner = mongoose.model('Winners', winnerSchema)

export default Winner
