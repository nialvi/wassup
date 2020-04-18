import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router5";
import Page from "../index";
import { store } from "../../store";
import createRouter from "../../route/createRouter";

describe("Page view", () => {
  it("should be render", () => {
    const router = createRouter(store);

    router.start();

    const { getByText } = render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Page />
        </RouterProvider>
      </Provider>
    );

    expect(getByText("New task")).toBeInTheDocument();
    expect(getByText("Summary")).toBeInTheDocument();
  });
});
