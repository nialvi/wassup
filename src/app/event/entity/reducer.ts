import { IEvent } from "./interface";
import { SET_EVENTS, ADD_EVENT, EventActionTypes } from "./actionsTypes";

type Dictionary<T> = {
  [hash: string]: T;
};

const inititalState: Dictionary<IEvent> = {
  "1": {
    id: "1", // md5(category, title, date)
    category: "task",
    title: "VID-123 card",
    description: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor"],
    date: new Date(), // YYYY-mm-dd
  },
  "2": {
    id: "2",
    category: "meetup",
    title: "standup",
    description: ["Lorem ipsum dolor sit amet,"],
    date: new Date(),
  },
  "3": {
    id: "3",
    category: "meetup",
    title: "demo",
    description: ["Lorem ipsum dolor sit amet,"],
    date: new Date(),
  },
};

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
