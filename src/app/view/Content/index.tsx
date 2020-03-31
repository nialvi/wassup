import * as React from "react";
import { Button } from "antd";
import { useRoute } from "react-router5";

const Content = () => {
  // TODO - route = null and all crashed
  const { route } = useRoute();
  const topRouteName = route?.name.split(".")[0];

  if (topRouteName === "today") {
    return <Button type="primary">Hello world!</Button>;
  }

  if (topRouteName === "report") {
    return <div>report</div>;
  }

  if (topRouteName === "template") {
    return <div>template</div>;
  }

  return <div>not found</div>;
};

export default Content;
