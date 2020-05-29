import { ISystemEvent, SystemEvents } from "./interface";
import { SET_EVENTS, ADD_EVENT, EventActionTypes } from "./actionsTypes";

export const inititalState: SystemEvents = {};

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
        description: newDescription,
        ...restEvent,
      };

      return { ...state, [`${systemEvent.id}`]: systemEvent };
    }

    default:
      return state;
  }
};
