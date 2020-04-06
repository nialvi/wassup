import { ISystemEvent } from "./interface";
import { SET_EVENTS, ADD_EVENT, EventActionTypes } from "./actionsTypes";

type Dictionary<T> = {
  [hash: string]: T;
};

const inititalState: Dictionary<ISystemEvent> = {
  "task_VID-123-card": {
    id: "task_VID-123-card", // md5(category, title, date)
    category: "task",
    title: "VID-123-card",
    description: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor"],
    date: new Date(), // YYYY-mm-dd
  },
  meetup_standup: {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: ["Lorem ipsum dolor sit amet,"],
    date: new Date(),
  },
  meetup_demo: {
    id: "meetup_demo",
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
      const { description: descriptionEvent, ...restEvent } = event;
      const id = `${event.category}_${event.title}`;
      const newDescription = state[id]?.description
        ? [...state[id].description, descriptionEvent]
        : [descriptionEvent];

      const systemEvent: ISystemEvent = {
        id,
        date: new Date(),
        description: newDescription,
        ...restEvent,
      };

      return { ...state, [`${systemEvent.id}`]: systemEvent };
    }

    default:
      return state;
  }
};
