import React from "react";
import { format } from "date-fns";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import events from "../../../../Event/entity/reducer";

import Today from "../index";

const systemEvents = {
  meetup_demo: {
    id: "meetup_demo",
    category: "meetup",
    title: "demo",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
  meetup_standup: {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: [
      "This is example event with templated description",
      "Another one",
    ],
    date: "2020-03-30",
  },
};

describe("Today connect", () => {
  it("static titles are corrected", () => {
    const store = createStore(combineReducers({ events }), {
      events: systemEvents,
    });
    const { getByText } = render(
      <Provider store={store}>
        <Today />
      </Provider>
    );

    expect(getByText(format(new Date(), "yyyy/MM/dd"))).toBeInTheDocument();
    expect(getByText("New task")).toBeInTheDocument();
    expect(getByText("Summary")).toBeInTheDocument();
  });
});
