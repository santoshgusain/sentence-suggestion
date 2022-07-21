import axios from "axios";
import { sentenceTypes, loadingTypes } from "../types";

export const loadSentence = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: loadingTypes.LOADING,
    });

    const sentences = (
      await axios.get(process.env.REACT_APP_BASE_URL + "/api/sentence")
    ).data;
    dispatch({
      type: loadingTypes.LOADED,
    });
    dispatch({
      type: sentenceTypes.LOAD_SENTENCE,
      payload: { sentences },
    });
  } catch (error) {
    dispatch({
      type: loadingTypes.LOADED,
    });
    console.error(JSON.stringify(error));
  }
};

export const listSentences =
  ({ perPage = 5, page = 0, sort = "_id", order = "desc" }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: loadingTypes.LOADING,
      });
      dispatch({
        type: sentenceTypes.IS_LOADING,
        payload: true,
      });

      const sentences = (
        await axios.get(process.env.REACT_APP_BASE_URL + "/api/sentence", {
          params: { perPage, page, sort, order },
        })
      )?.data;

      dispatch({
        type: loadingTypes.LOADED,
      });
      dispatch({
        type: sentenceTypes.LIST_SENTENCES,
        payload: sentences,
      });
    } catch (error) {
      dispatch({
        type: loadingTypes.LOADED,
      });
      console.log("Error=====================", JSON.stringify(error));
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
