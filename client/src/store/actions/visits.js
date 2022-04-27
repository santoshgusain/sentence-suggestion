import { visitTypes } from "../types";

export const loadVisits = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: visitTypes.IS_LOADING,
      payload: true,
    });

    const visits = [
      { id: 1, name: "Hello", col2: "World" },
      { id: 2, name: "DataGridPro", col2: "is Awesome" },
      { id: 3, name: "MUI", col2: "is Amazing" },
      { id: 4, name: "MUI", col2: "is Amazing" },
      { id: 5, name: "MUI", col2: "is Amazing" },
      { id: 6, name: "MUI", col2: "is Amazing" },
      { id: 7, name: "MUI", col2: "is Amazing" },
      { id: 8, name: "MUI", col2: "is Amazing" },
    ];
    dispatch({
      type: visitTypes.LOAD_VISITS,
      payload: { visits },
    });
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};
