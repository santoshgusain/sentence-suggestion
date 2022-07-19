import { sentenceTypes } from "../types";

const initialState = {
  isLoading: false,
  saved: false,
  sentences: [],
  savedSentences: {
    numRows: 0,
    totalCount: 0,
    rows: [],
  },
};

export default function sentenceReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case sentenceTypes.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case sentenceTypes.LOAD_SENTENCE:
      return {
        ...state,
        isLoading: false,
        sentences: payload.sentences,
      };
    case sentenceTypes.LIST_SENTENCES:
      console.log(payload, "===========}}}}}}}");
      return {
        ...state,
        isLoading: false,
        savedSentences: payload?.sentences,
      };
    case sentenceTypes.SAVE_SENTENCE:
      return {
        ...state,
        isLoading: false,
        saved: payload.saved,
      };
    case "RESET_SAVED_STATUS":
      return {
        ...state,
        saved: false,
      };
    default:
      return state;
  }
}
