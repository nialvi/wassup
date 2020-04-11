import React from "react";
import { format } from "date-fns";
import { render } from "@testing-library/react";
import { addEvent } from "../../../entity/actionsCreators";
import Today from "../index";

const events = [
  {
    id: "meetup_demo",
    category: "meetup",
    title: "demo",
    description: ["This is example event with templated description"],
    date: "2020-03-30",
  },
  {
    id: "meetup_standup",
    category: "meetup",
    title: "standup",
    description: [
      "This is example event with templated description",
      "Another one",
    ],
    date: "2020-03-30",
  },
];

describe("Today view", () => {
  it("static titles are corrected", () => {
    const { getByText } = render(<Today events={events} addEvent={addEvent} />);

    expect(getByText(format(new Date(), "yyyy/MM/dd"))).toBeInTheDocument();
    expect(getByText("New task")).toBeInTheDocument();
    expect(getByText("Summary")).toBeInTheDocument();
  });
});
