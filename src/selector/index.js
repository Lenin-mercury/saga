import { createSelector } from "reselect";
import { initialState } from "../reducers/userReducer";

const userState = state => state.user || initialState;

export const makeSelectLoading = () => createSelector(userState, state => state.loading)
export const makeSelectUserData = () => createSelector(userState, state => state.userData)

