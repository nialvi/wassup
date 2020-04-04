import { IEvent } from "./interface";
import { SET_EVENTS, ADD_EVENT, EventActionTypes } from "./actionsTypes";

type Dictionary<T> = {
  [hash: string]: T;
};

const inititalState: Dictionary<IEvent> = {};

export default (state = inititalState, action: EventActionTypes) => {
  switch (action.type) {
    case SET_EVENTS: {
      const {
        payload: { events },
      } = action;
      const eventsState = events.map((event) => {
        return { [`${event.id}`]: event };
      });

      return { ...state, ...eventsState };
    }

    case ADD_EVENT: {
      const {
        payload: { event },
      } = action;
      return { ...state, [`${event.id}`]: event };
    }

    default:
      return state;
  }
};
