import * as React from "react";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router5";
import createRouter from "../../../../../App/Page/route/createRouter";
import Content from "..";

const router = createRouter();

describe("Content", () => {
  it("should render not found page (without route provider)", () => {
    const { getByText } = render(<Content />);

    expect(getByText("not found")).toBeTruthy();
  });

  it("should be render not found page (with rote provider)", () => {
    const { getByText } = render(
      <RouterProvider router={router}>
        <Content />
      </RouterProvider>
    );

    expect(getByText("not found")).toBeTruthy();
  });

  it("should be render template page", () => {
    router.start("/template");
    const { getByText } = render(
      <RouterProvider router={router}>
        <Content />
      </RouterProvider>
    );
    expect(getByText("template")).toBeTruthy();
  });

  it("should be render report page", () => {
    // TODO
    // router.start("/report");
    // const { getByText } = render(
    //   <RouterProvider router={router}>
    //     <Content />
    //   </RouterProvider>
    // );
    // expect(getByText("report")).toBeTruthy();
  });
});
