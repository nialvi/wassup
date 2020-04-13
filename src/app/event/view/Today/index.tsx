import * as React from "react";
import { Typography, Select, Input, Button, Space } from "antd";
import { format } from "date-fns";
import { IAddEventAction } from "../../entity/actionsTypes";
import { IEvent, ISystemEvent } from "../../entity/interface";

const { useState } = React;
const { Title, Paragraph } = Typography;
const { Option } = Select;

interface IProps {
  events: ISystemEvent[];
  addEvent: (event: IEvent) => IAddEventAction;
}

const Today = (props: IProps) => {
  const { addEvent, events } = props;
  const [eventCategory, setEventCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const onAddEvent = () => {
    addEvent({
      category: eventCategory,
      title: eventName,
      description: eventDescription,
    });

    setEventCategory("");
    setEventName("");
    setEventDescription("");
  };

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val: string) {
    console.log("search:", val);
  }

  const onChangeSelect = (value: string) => {
    setEventCategory(value);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEventDescription(e.target.value);
  };

  return (
    <div>
      <Typography>
        <Title>{format(new Date(), "yyyy/MM/dd")}</Title>
        <Space size={50} direction="vertical">
          <div>
            <Title level={2}>New task</Title>
            <Space size="small" direction="vertical">
              <Select
                placeholder="category"
                showSearch
                style={{
                  display: "inline-block",
                  width: 200,
                }}
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={eventCategory}
              >
                <Option value="task">Task</Option>
                <Option value="meetup">Meetup</Option>
                <Option value="other">other</Option>
              </Select>

              <Input
                placeholder="name"
                value={eventName}
                onChange={onChangeInput}
              />

              <Input.TextArea
                placeholder="description"
                value={eventDescription}
                onChange={onChangeTextArea}
              />
              <Button data-testid="add-event-button" onClick={onAddEvent}>
                Add
              </Button>
            </Space>
          </div>

          <div>
            <Title level={2}>Summary</Title>

            {events.map((event, index) => (
              <React.Fragment key={event.id}>
                <Title level={4}>
                  {index} - {event.title}
                </Title>
                {event.description.map((description) => (
                  <Paragraph key={`${event.id}_${description.length}`}>
                    {description}
                  </Paragraph>
                ))}
              </React.Fragment>
            ))}
          </div>
        </Space>
      </Typography>
    </div>
  );
};

export default Today;
