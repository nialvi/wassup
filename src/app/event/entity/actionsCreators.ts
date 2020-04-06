import { IEvent, ISystemEvent } from "./interface";
import {
  IAddEventAction,
  ISetEventAction,
  SET_EVENTS,
  ADD_EVENT,
} from "./actionsTypes";

export const setEvents = (events: ISystemEvent[]): ISetEventAction => ({
  type: SET_EVENTS,
  payload: {
    events,
  },
});

export const addEvent = (event: IEvent): IAddEventAction => ({
  type: ADD_EVENT,
  payload: {
    event,
  },
});
