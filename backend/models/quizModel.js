import mongoose from 'mongoose'


const quizSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    options: [String],
  },
  {
    timestamps: true,
  }
)

const Quiz = mongoose.model('Quiz', quizSchema)

export default Quiz