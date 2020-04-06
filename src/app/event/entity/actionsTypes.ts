import { IEvent, ISystemEvent } from "./interface";

export interface ISetEventAction {
  type: typeof SET_EVENTS;
  payload: {
    events: ISystemEvent[];
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
