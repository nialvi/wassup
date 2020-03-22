import { Action } from "redux";

const initialState = "Hello";

export default (state = initialState, _action: Action) => {
  return state;
};
