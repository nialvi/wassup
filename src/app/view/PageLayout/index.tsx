import * as React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.css";

const { Header, Content, Footer } = Layout;

interface IProps {
  children: JSX.Element;
}

const Page = ({ children }: IProps) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item key="1">Today</Menu.Item>
        <Menu.Item key="2">Raport</Menu.Item>
        <Menu.Item key="3">Template</Menu.Item>
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

export default Page;
