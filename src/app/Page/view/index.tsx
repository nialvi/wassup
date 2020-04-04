import * as React from "react";
import PageLayout from "./PageLayout";
import Content from "./Content";

import "./index.css";

function Page() {
  return (
    <PageLayout>
      <Content />
    </PageLayout>
  );
}

export default Page;
