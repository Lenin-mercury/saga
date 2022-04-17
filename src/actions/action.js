import { GET_USER_REQUEST, GET_USER_SUCCESS, SET_LOADING } from "./actionTypes"

export const setUserData = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  }
}

export const fetchUserData = (payload) => {
  return {
    type: GET_USER_REQUEST,
    payload,
  }
}

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  }
}
