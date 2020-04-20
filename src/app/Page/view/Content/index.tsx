import * as React from "react";
import { useRoute } from "react-router5";

import Report from "../../../Report/view";
import Today from "../../connects/Today";

const Content = () => {
  const { route } = useRoute() || {};
  const topRouteName = route?.name.split(".")[0];

  if (topRouteName === "today") {
    return <Today />;
  }

  if (topRouteName === "report") {
    return <Report />;
  }

  if (topRouteName === "template") {
    return <div>template</div>;
  }

  return <div>not found</div>;
};

export default Content;
