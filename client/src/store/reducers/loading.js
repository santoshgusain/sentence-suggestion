import { loadingTypes } from "../types";

const initialState = {
  isLoading: false,
};

export default function loadingReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case loadingTypes.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case loadingTypes.LOADED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
