import * as React from "react";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router5";
import createRouter from "../../../route/createRouter";
import PageLayout from "..";

describe("PageLayout", () => {
  it("it should be render child element", () => {
    const router = createRouter();
    const { getByText } = render(
      <RouterProvider router={router}>
        <PageLayout>kek</PageLayout>
      </RouterProvider>
    );
    expect(getByText("kek")).toBeTruthy();
  });
});
