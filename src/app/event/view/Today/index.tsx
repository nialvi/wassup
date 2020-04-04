import * as React from "react";
import { Typography, Select, Input, Button, Space } from "antd";
import { format } from "date-fns";
import { IAddEventAction } from "../../entity/actionsTypes";
import { IEvent } from "../../entity/interface";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

interface IProps {
  // TODO events: ;
  addEvent: (event: IEvent) => IAddEventAction;
}

const Today = (props: IProps) => {
  const { addEvent } = props;

  const onAddEvent = () => {
    addEvent({
      id: "kek",
      category: "task",
      title: "title",
      description: "desc",
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
            <Title level={4}>1 - Standup</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              distinctio, quas ipsam nulla possimus eius, animi, molestiae
              similique debitis repellendus voluptates? Esse eius eveniet aut
              expedita at neque omnis officiis? <a href="//">dom tutu</a>
            </Text>
            <Title level={4}>2 - Demo</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              distinctio, quas ipsam nulla possimus eius, animi, molestiae
            </Text>

            <Title level={4}>
              3 - <a href="//">VID-123 card</a>
            </Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quo mollitia magni, quibusdam
              aperiam explicabo
            </Paragraph>
            <Paragraph>
              possimus facilis dolorum delectus aut inventore earum incidunt
              iste eveniet dolorem optio eligendi et! Expedita, aperiam.
            </Paragraph>
            <Paragraph>
              possimus facilis dolorum delectus aut inventore earum incidunt
              iste eveniet dolorem optio eligendi et! Expedita, aperiam.
            </Paragraph>
          </div>
        </Space>
      </Typography>
    </div>
  );
};

export default Today;
