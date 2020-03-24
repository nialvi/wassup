import * as React from "react";
import { Button } from "antd";
import PageLayout from "./PageLayout";

import "./index.css";

function App() {
  return (
    <PageLayout>
      <Button type="primary">Hello world!</Button>
    </PageLayout>
  );
}

export default App;
