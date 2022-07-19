import { authenticationTypes } from "../types";

const initialState = {
  isLoading: false,
  login: false,
  error: {},
  user: {},
};

export default function authenticateReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case authenticationTypes.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case authenticationTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        user: payload,
        error: null,
      };
    case authenticationTypes.LOGIN_FAILED:
      return {
        ...state,
        login: false,
        error: payload,
      };
    case authenticationTypes.LOGOUT:
      return {
        ...state,
        login: false,
        user: null,
      };
    default:
      return state;
  }
}
