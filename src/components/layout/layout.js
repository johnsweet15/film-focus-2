import React, { useState } from "react";
import Head from "next/head";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

const siteTitle = "Starter Site";

export default function StandardLayout({ title, header, subheader, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }
  const collapseButton = React.createElement(
    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
    {
      className: "trigger",
      onClick: toggleCollapsed,
    }
  );
  return (
    <div>
      <Head>
        <title>{title ? title : siteTitle}</title>
      </Head>
      <Layout style={{ overflow: "hidden" }}>
        <Header className="header d-flex align-items-center">
          <div>{collapseButton}</div>
        </Header>
        <Layout>
          <Sider
            width={250}
            style={{ height: "100vh" }}
            className="site-layout-background"
            collapsed={collapsed}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<DesktopOutlined />} title="Title">
                <Menu.Item key="1">Subtitle 1</Menu.Item>
                <Menu.Item key="2">Subtitle 2</Menu.Item>
                <Menu.Item key="3">Subtitle 3</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            className="p-3"
            style={{
              padding: "1rem",
              paddingBottom: "2rem",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            {children}
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
