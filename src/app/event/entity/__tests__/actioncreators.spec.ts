import * as actions from "../actionsCreators";
import * as actionTypes from "../actionsTypes";
import { ISystemEvent, IEvent } from "../interface";

type Events = {
  system: ISystemEvent;
  user: IEvent;
};

const events: Events = {
  system: {
    id: "task_VID-123-card",
    category: "task",
    title: "VID-123-card",
    description: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor"],
    date: new Date(),
  },
  user: {
    category: "task",
    title: "VID-123-card",
    description: "Lorem ipsum dolor sit amet,",
  },
};

describe("actions", () => {
  it("addEvevnt", () => {
    const expectedAction = {
      type: actionTypes.ADD_EVENT,
      payload: {
        event: events.user,
      },
    };

    expect(actions.addEvent(events.user)).toEqual(expectedAction);
  });

  it("setEvevnts", () => {
    const expectedAction = {
      type: actionTypes.SET_EVENTS,
      payload: {
        events: [events.system],
      },
    };

    expect(actions.setEvents([events.system])).toEqual(expectedAction);
  });
});
