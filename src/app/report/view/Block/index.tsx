import * as React from "react";
import { Typography } from "antd";
import { ISystemEvent } from "../../../Event/entity/interface";

const { Title, Paragraph } = Typography;

interface IProps {
  category: string;
  events: ISystemEvent[];
}

const Block = ({ category, events }: IProps) => {
  return (
    <div>
      <Title level={2} style={{ marginTop: "24px" }}>
        {category}
      </Title>

      {events.map((event, index) => {
        return (
          <div>
            <Title level={4}>{`${index + 1} - ${event.title}`}</Title>
            {event.description.map((desc) => {
              return <Paragraph>{desc}</Paragraph>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Block;
