import { visitTypes } from "../types";
import axios from "axios";
import { loadingTypes } from "../types";

export const loadVisits =
  ({ perPage = 5, page = 0, sort = "_id", order = "desc" }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: loadingTypes.LOADING,
      });

      const sentences = (
        await axios.get("http://localhost:3001/api/logs", {
          params: { perPage, page, sort, order },
        })
      )?.data;

      dispatch({
        type: loadingTypes.LOADED,
      });
      dispatch({
        type: visitTypes.LOAD_VISITS,
        payload: sentences,
      });
    } catch (error) {
      dispatch({
        type: loadingTypes.LOADED,
      });
      console.log("Error=====================", JSON.stringify(error));
    }
  };
