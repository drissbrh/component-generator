import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { boxReducer } from "./reducers/boxReducer";
const reducer = combineReducers({
  boxState: boxReducer,
});

const middlware = [thunk];

const mainBoxesFromLocalStorage = localStorage.getItem("mainBoxes")
  ? JSON.parse(localStorage.getItem("mainBoxes"))
  : [];
const initialState = { boxState: { mainBoxes: mainBoxesFromLocalStorage } };
// const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
