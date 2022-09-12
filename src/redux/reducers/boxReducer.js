import {
  ADD_BOX,
  ADD_CHILD_BOX,
  DELETE_BOX,
  RESET_BOX,
} from "../constants/boxConstants";

export const boxReducer = (state = { mainBoxes: [], childs: [] }, action) => {
  switch (action.type) {
    case ADD_BOX:
      return {
        ...state,
        mainBoxes: [action.payload, ...state.mainBoxes],
      };
    case ADD_CHILD_BOX:
      return {
        ...state,
        childs: [action.payload, ...state.childs],
      };
    case DELETE_BOX:
      return {
        ...state,
        mainBoxes: state.mainBoxes.filter((box) => box.id !== action.payload),
      };
    case RESET_BOX:
      return { mainBoxes: [], childs: [] };
    default:
      return state;
  }
};
