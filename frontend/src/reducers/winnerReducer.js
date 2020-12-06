import {
  TICTOE_REQUEST,
  TICTOE_SUCCESS,
  TICTOE_FAIL,
  QUIZ_REQUEST,
  QUIZ_SUCCESS,
  QUIZ_FAIL
} from '../constants/winnerConstants'


export const tictoeWinnerDetailsReducer = (state = { twinner: {} }, action) => {
  switch (action.type) {
    case TICTOE_REQUEST:
      return { ...state, loading: true }
    case TICTOE_SUCCESS:
      return { loading: false, twinner: action.payload }
    case TICTOE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const quizWinnerDetailsReducer = (state = { qwinner: {} }, action) => {
  switch (action.type) {
    case QUIZ_REQUEST:
      return { ...state, loading: true }
    case QUIZ_SUCCESS:
      return { loading: false, qwinner: action.payload }
    case QUIZ_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}