import { visitTypes } from "../types";

const initialState = {
  isLoading: false,
  visits: [],
};

export default function sentenceReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case visitTypes.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case visitTypes.LOAD_VISITS:
      return {
        ...state,
        isLoading: false,
        visits: payload.visits,
      };
    default:
      return state;
  }
}
