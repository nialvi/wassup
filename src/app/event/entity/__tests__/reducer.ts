import reducer from "../reducer";
import { EventActionTypes, SET_EVENTS } from "../actionsTypes";

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {} as EventActionTypes)).toEqual({
      meetup_standup: {
        id: "meetup_standup",
        category: "meetup",
        title: "standup",
        description: ["This is example event with templated description"],
        date: "2020-03-30",
      },
    });
  });

  it("should handle SET_EVENTS", () => {
    // TODO
    // expect(
    //   reducer(
    //     {},
    //     {
    //       type: SET_EVENTS,
    //       payload: {
    //         events: [
    //           {
    //             id: "task_VID-123-card",
    //             category: "task",
    //             title: "VID-123-card",
    //             description: [
    //               "Lorem ipsum dolor sit amet,",
    //               "Lorem ipsum dolor",
    //             ],
    //             date: "2020-03-30",
    //           },
    //         ],
    //       },
    //     }
    //   )
    // ).toEqual({
    //   "task_VID-123-card": {
    //     id: "task_VID-123-card",
    //     category: "task",
    //     title: "VID-123-card",
    //     description: ["Lorem ipsum dolor sit amet,", "Lorem ipsum dolor"],
    //     date: "2020-03-30",
    //   },
    // });
  });

  it("should handle ADD_EVENT", () => {
    // TODO
  });
});
