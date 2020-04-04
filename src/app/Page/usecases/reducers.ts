import { combineReducers } from "redux";
import { router5Reducer } from "redux-router5";
import events from "../../Event/entity/reducer";

const rootReducer = combineReducers({
  router: router5Reducer,
  events,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
