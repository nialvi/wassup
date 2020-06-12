import * as React from "react";
import { Typography } from "antd";
import { useRouteNode } from "react-router5";

import { ISystemEvent } from "../../Event/entity/interface";
import { getTitle } from "./helper";
import Block from "./Block";

const { Title } = Typography;

interface IProps {
  events: ISystemEvent[];
  startDay: number;
  endDay: number;
}

interface IEventByCategories {
  [key: string]: ISystemEvent[];
}

const Report = ({ events, startDay, endDay }: IProps) => {
  const { route } = useRouteNode("report") || {};

  // TODO move to another view
  if (route.name === "report.all") {
    return <div>all reports</div>;
  }

  const eventByCategories: IEventByCategories = events.reduce(
    (result, event) => {
      if (result[event.category]) {
        result[event.category].push(event);
      } else {
        result[event.category] = [event];
      }

      return result;
    },
    {} as IEventByCategories
  );

  return (
    <div>
      <Typography>
        <Title>{getTitle(startDay, endDay)}</Title>
        {eventByCategories.meetup?.length && (
          <Block category="Meetups" events={eventByCategories.meetup} />
        )}
        {eventByCategories.task?.length && (
          <Block category="Задачи" events={eventByCategories.task} />
        )}
      </Typography>
    </div>
  );
};

export default Report;
