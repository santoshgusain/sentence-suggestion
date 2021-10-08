import axios from "axios";
import { sentenceTypes } from "../types";

export const loadSentence = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: sentenceTypes.IS_LOADING,
      payload: true,
    });

    const sentences = (await axios.get("https://sentence-suggestion.herokuapp.com/sentence")).data;
    dispatch({
      type: sentenceTypes.LOAD_SENTENCE,
      payload: { sentences },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};
