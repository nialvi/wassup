import * as actions from "../actionsCreators";
import * as actionTypes from "../actionsTypes";
import { ISystemEvent, IEvent } from "../interface";
import { Dictionary } from "../../../utils/types";
import { format } from "date-fns";

type Events = {
  system: Dictionary<ISystemEvent>;
  user: IEvent;
};

const events: Events = {
  system: {
    "task_VID-123-card": {
      id: "task_VID-123-card",
      category: "task",
      title: "VID-123-card",
      description: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor"],
      date: format(new Date(), "yyyy-MM-dd"),
    },
  },
  user: {
    category: "task",
    title: "VID-123-card",
    description: "Lorem ipsum dolor sit amet,",
    date: format(new Date(), "yyyy-MM-dd"),
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
        events: events.system,
      },
    };

    expect(actions.setEvents(events.system)).toEqual(expectedAction);
  });
});
