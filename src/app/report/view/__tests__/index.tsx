import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import Report from "..";
import { configureStore } from "../../../Page/store";
import createRouter from "../../../Page/route/createRouter";

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
          <Report />
        </RouterProvider>
      </Provider>
    );

    expect(getByText("report")).toBeInTheDocument();
  });

  it("render report without router provider", () => {
    const store = configureStore();
    const router = createRouter(store);

    router.start("/report/all");

    const { getByText } = render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Report />
        </RouterProvider>
      </Provider>
    );

    expect(getByText("all reports")).toBeInTheDocument();
  });
});
