import { visitTypes } from "../types";

const initialState = {
  isLoading: false,
  visitors: {
    numRows: 0,
    totalCount: 0,
    rows: [],
  },
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
        visitors: payload?.visitors,
      };
    default:
      return state;
  }
}
