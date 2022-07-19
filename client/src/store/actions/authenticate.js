import { authenticationTypes } from "../types";
import { loadingTypes } from "../types";
import axios from "axios";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: loadingTypes.LOADING,
      });

      const login = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + "/api/authenticate/login",
        data: { email, password },
      });

      dispatch({
        type: loadingTypes.LOADED,
      });
      dispatch({
        type: authenticationTypes.LOGIN_SUCCESS,
        payload: login.data,
      });
    } catch (err) {
      dispatch({
        type: loadingTypes.LOADED,
      });
      dispatch({
        type: authenticationTypes.LOGIN_FAILED,
        payload: err.response?.data,
      });
      console.log(err);
    }
  };

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: loadingTypes.LOADING,
    });

    dispatch({
      type: authenticationTypes.LOGOUT,
      payload: null,
    });
    dispatch({
      type: loadingTypes.LOADED,
    });
  } catch (error) {
    dispatch({
      type: loadingTypes.LOADED,
    });
    console.error(JSON.stringify(error));
  }
};
