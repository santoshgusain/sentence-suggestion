import { authenticationTypes } from "../types";

export const loginAction = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: authenticationTypes.IS_LOADING,
      payload: true,
    });

    dispatch({
      type: authenticationTypes.LOGIN,
      payload: {
        login: "true",
        user: { name: "santosh", email: "santosh@gmal.com" },
      },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: authenticationTypes.IS_LOADING,
      payload: true,
    });

    dispatch({
      type: authenticationTypes.LOGOUT,
      payload: {
        login: "false",
        user: {},
      },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};
