import axios from 'axios'
import {
  TICTOE_REQUEST,
  TICTOE_SUCCESS,
  TICTOE_FAIL,
  QUIZ_REQUEST,
  QUIZ_SUCCESS,
  QUIZ_FAIL
} from '../constants/winnerConstants'
import { USER_LOGOUT } from '../constants/userConstants'

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
  }

export const storeTicToeWinner = (name, type, score) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TICTOE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/storewinner/storewinner`, {name, type, score}, config)
    dispatch({
      type: TICTOE_SUCCESS,
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
      type: TICTOE_FAIL,
      payload: message,
    })
  }
}

export const storeQuizWinner = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUIZ_REQUEST,
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
      type: QUIZ_SUCCESS,
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
      type: QUIZ_FAIL,
      payload: message,
    })
  }
}