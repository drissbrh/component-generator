import { ADD_BOX, ADD_CHILD_BOX, DELETE_BOX } from "../constants/boxConstants";

export const addBox = (box) => async (dispatch, getState) => {
  dispatch({
    type: ADD_BOX,
    payload: box,
  });

  localStorage.setItem(
    "mainBoxes",
    JSON.stringify(getState().boxState.mainBoxes)
  );
  localStorage.setItem(
    "mainBoxes",
    JSON.stringify(getState().boxState.mainBoxes)
  );
};
export const addChildBox = (box) => async (dispatch, getState) => {
  dispatch({
    type: ADD_CHILD_BOX,
    payload: box,
  });

  localStorage.setItem("mainBoxes", JSON.stringify(getState().boxState.childs));
};

export const deleteBox = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_BOX,
    payload: id,
  });
  localStorage.setItem(
    "mainBoxes",
    JSON.stringify(getState().boxState.mainBoxes)
  );
};
