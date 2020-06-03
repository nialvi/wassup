import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import Report from "..";
import { configureStore } from "../../../Page/store";
import createRouter from "../../../Page/route/createRouter";

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

describe("Report view", () => {
  // TODO fix this test
  // it("render report without router provider", () => {
  //   const { getByText } = render(<Report />);

  //   expect(getByText("report")).toBeInTheDocument();
  // });

  it("render report without router provider", () => {
    const store = configureStore();
    const router = createRouter(store);

    router.start("/report");

    const { getByText } = render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Report events={events} />
        </RouterProvider>
      </Provider>
    );

    expect(getByText("Weekly report")).toBeInTheDocument();
  });

  it("render report without router provider", () => {
    const store = configureStore();
    const router = createRouter(store);

    router.start("/report/all");

    const { getByText } = render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Report events={events} />
        </RouterProvider>
      </Provider>
    );

    expect(getByText("all reports")).toBeInTheDocument();
  });
});
