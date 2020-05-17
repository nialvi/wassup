import reducer from "../reducer";
import { EventActionTypes } from "../actionsTypes";
import * as actions from "../actionsCreators";

const inititalState = {};

const systemEvent = {
  meetup_demo: {
    id: "meetup_demo",
    category: "meetup",
    title: "demo",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
};

const userDemoEvent = {
  category: "meetup",
  title: "demo",
  description: "This is example event with templated description",
};

const userStandupEvent = {
  category: "meetup",
  title: "standup",
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
    const state = reducer(undefined, actions.addEvent(userDemoEvent));

    expect(state).toEqual(expectedSystemEvents);
  });

  it("should add description to existed event", () => {
    const firstState = reducer(undefined, actions.addEvent(userStandupEvent));
    const finalState = reducer(firstState, actions.addEvent(userExistedEvent));

    expect(finalState).toEqual(expectedStateWithExistedEvent);
  });
});
