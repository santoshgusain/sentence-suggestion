import { authenticationTypes } from "../types";

const initialState = {
  isLoading: false,
  login: "false",
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
    case authenticationTypes.LOGIN:
      return {
        ...state,
        login: payload.login,
        user: payload.user,
      };
    case authenticationTypes.LOGOUT:
      return {
        ...state,
        login: payload.login,
        user: payload.user,
      };
    default:
      return state;
  }
}
