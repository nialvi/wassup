import reducer from "../reducer";
import { EventActionTypes } from "../actionsTypes";
import * as actions from "../actionsCreators";

const inititalState = {
  meetup_standup: {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
};

const systemEvent = {
  meetup_demo: {
    id: "meetup_demo",
    category: "meetup",
    title: "demo",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
};

const userEvent = {
  category: "meetup",
  title: "demo",
  description: "This is example event with templated description",
};

const userExistedEvent = {
  category: "meetup",
  title: "standup",
  description: "This is additional description",
};

const expectedStateWithExistedEvent = {
  meetup_standup: {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: [
      "This is example event with templated description",
      "This is additional description",
    ],
    date: "2020-03-30",
  },
};

const expectedSystemEvents = {
  ...inititalState,
  ...systemEvent,
};

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {} as EventActionTypes)).toEqual(inititalState);
  });

  it("should handle SET_EVENTS", () => {
    const state = reducer(undefined, actions.setEvents(systemEvent));

    expect(state).toEqual(expectedSystemEvents);
  });

  it("should handle ADD_EVENT", () => {
    const state = reducer(undefined, actions.addEvent(userEvent));

    expect(state).toEqual(expectedSystemEvents);
  });

  it("should add description to existed event", () => {
    const state = reducer(undefined, actions.addEvent(userExistedEvent));

    expect(state).toEqual(expectedStateWithExistedEvent);
  });
});
