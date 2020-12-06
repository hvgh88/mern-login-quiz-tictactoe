import axios from 'axios'
import {
  QUIZ_DETAILS_FAIL,
  QUIZ_DETAILS_REQUEST,
  QUIZ_DETAILS_SUCCESS,
} from '../constants/quizConstants'
import { USER_LOGOUT } from '../constants/userConstants'

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
  }

export const getQuizDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUIZ_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/quiz`, config)
    dispatch({
      type: QUIZ_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: QUIZ_DETAILS_FAIL,
      payload: message,
    })
  }
}
