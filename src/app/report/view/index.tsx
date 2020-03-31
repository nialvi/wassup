import * as React from "react";
import { useRouteNode } from "react-router5";

const Report = () => {
  const { route } = useRouteNode("report");

  if (route.name === "report.all") {
    return <div>all reports</div>;
  }
  return <div>report</div>;
};

export default Report;
