import axios from "axios"
import { put, call, takeLatest, all } from "redux-saga/effects"
import { setLoading, setUserData } from "../actions/action"
import { GET_USER_REQUEST } from "../actions/actionTypes"

export const getUserData = (response) => {
  console.log(response.data, "from saga")
  return response
}

export function* fetchUserDataSaga(payload) {
  try {
    const userResponse = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    )
    if (userResponse) {
      yield put(setUserData(getUserData(userResponse)))
    }
  } catch (error) {
    console.log(error);
  }finally{
    yield put(setLoading(false))
  }
}

export default function* userSaga() {
  yield takeLatest(GET_USER_REQUEST, fetchUserDataSaga);
}