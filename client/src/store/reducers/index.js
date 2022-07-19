import { combineReducers } from "redux";

import sentenceReducer from "./sentence";
import visitReducer from "./visits";
import authenticateReducer from "./authenticate";
import loadingReducer from "./loading";

export default combineReducers({
  alert() {
    return { status: false };
  },
  sentenceReducer,
  visitReducer,
  authenticateReducer,
  loadingReducer,
});
