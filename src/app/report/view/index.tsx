import * as React from "react";
import { Typography } from "antd";
import { useRouteNode } from "react-router5";

import { ISystemEvent } from "../../Event/entity/interface";

const { Title } = Typography;

interface IProps {
  events: ISystemEvent[];
}

const Report = ({ events }: IProps) => {
  const { route } = useRouteNode("report") || {};

  if (route.name === "report.all") {
    return <div>all reports</div>;
  }

  return (
    <div>
      <Typography>
        <Title>Weekly report</Title>
        <pre>{JSON.stringify(events, undefined, 4)}</pre>
      </Typography>
    </div>
  );
};

export default Report;
