import * as React from "react";
import { Typography, Select, Input } from "antd";
import { format } from "date-fns";

const { Title } = Typography;
const { Option } = Select;

const Today = () => {
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

        <Title level={2}>New task</Title>

        <Select
          placeholder="category"
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
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>

        <Input.TextArea placeholder="description" />
      </Typography>
    </div>
  );
};

export default Today;
