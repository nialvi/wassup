import * as React from "react";
import { Button } from "antd";
import { useRouteNode } from "react-router5";

const Content = () => {
  const { route } = useRouteNode("");
  const topRouteName = route.name.split(".")[0];

  if (topRouteName === "today") {
    return <Button type="primary">Hello world!</Button>;
  }

  if (topRouteName === "report") {
    return <div>report</div>;
  }

  return <div>not found</div>;
};

export default Content;
