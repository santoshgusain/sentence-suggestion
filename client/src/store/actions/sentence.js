import axios from "axios";
import { sentenceTypes } from "../types";

export const loadSentence = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: sentenceTypes.IS_LOADING,
      payload: true,
    });

    const sentences = (
      await axios.get("https://sentence-suggestion.herokuapp.com/api/sentence")
    ).data;
    dispatch({
      type: sentenceTypes.LOAD_SENTENCE,
      payload: { sentences },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: sentenceTypes.IS_LOADING,
      payload: true,
    });

    const sentences = [1, 2, 3, 4, 5, 6, 6];
    dispatch({
      type: sentenceTypes.LOAD_SENTENCE,
      payload: { sentences },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};

export const saveSentence = (sentence) => async (dispatch) => {
  try {
    dispatch({
      type: sentenceTypes.IS_LOADING,
      payload: true,
      saved: false,
    });

    console.log("Action::", sentence);
    dispatch({
      type: sentenceTypes.SAVE_SENTENCE,
      payload: { saved: true },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};
