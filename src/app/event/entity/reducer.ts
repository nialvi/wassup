import { IEvent } from "./interface";
import { SET_EVENTS, ADD_EVENT, EventActionTypes } from "./actionsTypes";

const inititalState: IEvent[] = [];

export default (state = inititalState, action: EventActionTypes) => {
  switch (action.type) {
    case SET_EVENTS: {
      return state;
    }

    case ADD_EVENT: {
      return state;
    }

    default:
      return state;
  }
};
