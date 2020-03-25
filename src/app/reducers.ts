import { combineReducers } from "redux";
import { router5Reducer } from "redux-router5";

const initialState = "Hello";

export default combineReducers({
  router: router5Reducer,
  app: (state = initialState, _action) => state
});
