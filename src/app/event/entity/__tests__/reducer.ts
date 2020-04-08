import reducer from "../reducer";
import { EventActionTypes, SET_EVENTS } from "../actionsTypes";
import * as actions from "../actionsCreators";

const inititalEvent = {
  meetup_standup: {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
};

const newEvent = {
  meetup_demo: {
    id: "meetup_demo",
    category: "meetup",
    title: "demo",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
};

const expectedSystemEvents = {
  ...inititalEvent,
  ...newEvent,
};

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {} as EventActionTypes)).toEqual(inititalEvent);
  });

  it("should handle SET_EVENTS", () => {
    const state = reducer(undefined, actions.setEvents(newEvent));

    expect(state).toEqual(expectedSystemEvents);
  });

  it("should handle ADD_EVENT", () => {
    // TODO
  });
});
