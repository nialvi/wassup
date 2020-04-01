import { IEvent } from "./interface";

export interface ISetEventAction {
  type: typeof SET_EVENTS;
  payload: {
    events: IEvent[];
  };
}

export interface IAddEventAction {
  type: typeof ADD_EVENT;
  payload: {
    event: IEvent;
  };
}

export const ADD_EVENT = "event/addEvent";
export const SET_EVENTS = "event/setEvents";

export type EventActionTypes = ISetEventAction | IAddEventAction;
