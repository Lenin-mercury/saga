import produce from "immer"
import { GET_USER_SUCCESS, SET_LOADING } from "../actions/actionTypes"

export const initialState = {
  loading: false,
  userData: null,
}

const userReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      draft.userData = action.payload
      break
      
    case SET_LOADING:
      draft.loading = action.payload
      break
    default:
  }
}, initialState)

export default userReducer
