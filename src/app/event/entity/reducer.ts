import { ISystemEvent, SystemEvents } from "./interface";
import { SET_EVENTS, ADD_EVENT, EventActionTypes } from "./actionsTypes";

const inititalState: SystemEvents = {
  meetup_standup: {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
};

export default (state = inititalState, action: EventActionTypes) => {
  switch (action.type) {
    case SET_EVENTS: {
      const {
        payload: { events },
      } = action;

      return { ...state, ...events };
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
        // TODO change on normal date
        date: "2020-03-30",
        description: newDescription,
        ...restEvent,
      };

      return { ...state, [`${systemEvent.id}`]: systemEvent };
    }

    default:
      return state;
  }
};
