import * as React from "react";
import { Typography, Select, Input, Button, Space } from "antd";
import { format } from "date-fns";
import { IAddEventAction } from "../../entity/actionsTypes";
import { IEvent } from "../../entity/interface";

const { Title, Paragraph } = Typography;
const { Option } = Select;

interface IProps {
  events: IEvent[];
  addEvent: (event: IEvent) => IAddEventAction;
}

const Today = (props: IProps) => {
  const { addEvent, events } = props;

  const onAddEvent = () => {
    addEvent({
      id: "kek",
      category: "task",
      title: "title",
      description: ["desc"],
      date: new Date(),
    });
  };

  function onChange(value: string) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val: string) {
    console.log("search:", val);
  }

  return (
    <div>
      <Typography>
        <Title>{format(new Date(), "<yyyy/MM/dd>")}</Title>
        <Space size={50} direction="vertical">
          <div>
            <Title level={2}>New task</Title>
            <Select
              placeholder="category"
              showSearch
              style={{
                display: "inline-block",
                width: 200,
                marginBottom: "10px",
              }}
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Task</Option>
              <Option value="lucy">Meetup</Option>
              <Option value="tom">common</Option>
            </Select>
            <Select
              placeholder="name"
              showSearch
              style={{ width: 200, marginBottom: "10px" }}
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">VID-123</Option>
              <Option value="lucy">FE Meetup</Option>
              <Option value="tom">1to1</Option>
            </Select>
            <Input.TextArea
              style={{ marginBottom: "10px" }}
              placeholder="description"
            />
            <Button onClick={() => onAddEvent()}>Add</Button>
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
