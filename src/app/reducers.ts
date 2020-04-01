import { combineReducers } from "redux";
import { router5Reducer } from "redux-router5";
import events from "./Event/entity/reducer";

const initialState = "Hello";

export default combineReducers({
  router: router5Reducer,
  app: (state = initialState, _action) => state,
  events
});
