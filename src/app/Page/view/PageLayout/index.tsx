import * as React from "react";
import { BaseLink, useRoute } from "react-router5";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.css";

const { Header, Content, Footer } = Layout;

interface IProps {
  children: JSX.Element;
}

const Page = ({ children }: IProps) => {
  const { router } = useRoute();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <BaseLink router={router} routeName="today">
              Today
            </BaseLink>
          </Menu.Item>
          <Menu.Item key="2">
            <BaseLink router={router} routeName="report">
              Report
            </BaseLink>
          </Menu.Item>
          <Menu.Item key="3">
            <BaseLink router={router} routeName="template">
              Template
            </BaseLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Wassup ©2020</Footer>
    </Layout>
  );
};

export default Page;
