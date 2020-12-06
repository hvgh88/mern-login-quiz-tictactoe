import {
  QUIZ_DETAILS_FAIL,
  QUIZ_DETAILS_REQUEST,
  QUIZ_DETAILS_RESET,
  QUIZ_DETAILS_SUCCESS,
} from '../constants/quizConstants'


export const quizDetailsReducer = (state = { quiz: {} }, action) => {
  switch (action.type) {
    case QUIZ_DETAILS_REQUEST:
      return { ...state, loading: true }
    case QUIZ_DETAILS_SUCCESS:
      return { loading: false, quiz: action.payload }
    case QUIZ_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case QUIZ_DETAILS_RESET:
      return { quiz: {} }
    default:
      return state
  }
}
