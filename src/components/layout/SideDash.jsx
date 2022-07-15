import { Badge, Breadcrumb, Col, Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import ALFAalfa from "../../assets/images/ALFAalfa.png";
import Vectorv from "../../assets/images/Vectorv.svg";
import Item1 from "../../assets/images/Item1.svg";
import Item2 from "../../assets/images/Item2.svg";
import Item3 from "../../assets/images/Item3.svg";
import Item4 from "../../assets/images/Item4-new.svg";
import Item5 from "../../assets/images/Item5.svg";
import Item6 from "../../assets/images/Item6.svg";
import Item7 from "../../assets/images/Item7.svg";
import Item8 from "../../assets/images/Item8.svg";
import Item9 from "../../assets/images/Item9.svg";
import Item10 from "../../assets/images/Item10.svg";
import Item11 from "../../assets/images/Item11.svg";
import Xx from "../../assets/images/Xx.png";
import HeadDash from "./HeadDash";
import ContentDash from "./ContentDash";

const { Header, Sider, Content } = Layout;

const SideDash = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  const resize = () => {
    if (window.innerWidth <= 900) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  return (
    <Layout className="layout-dashboard" style={{ minHeight: "100vh" }}>
      <Sider
        style={{ width: "100%" }}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <div className="logo">
          <img style={{ width: 58, height: 16 }} src={ALFAalfa} alt="" />
          <img style={{ width: 58, height: 65 }} src={Xx} alt="" />
        </div>
        <Menu
          style={{ paddingLeft: 20 }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item1} alt="" />
              ),
              label: "Item 1",
            },
            {
              key: "2",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item2} alt="" />
              ),
              label: "Item 2",
            },
            {
              key: "3",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item3} alt="" />
              ),
              label: "Item 3",
            },
            {
              key: "4",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item4} alt="" />
              ),
              label: "Item 4",
            },
            {
              key: "5",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item5} alt="" />
              ),
              label: "Item 5",
            },
            {
              key: "6",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item6} alt="" />
              ),
              label: "Item 6",
            },
            {
              key: "7",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item7} alt="" />
              ),
              label: "Item 7",
            },
            {
              key: "8",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item8} alt="" />
              ),
              label: "Item 8",
            },
            {
              key: "9",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item9} alt="" />
              ),
              label: "Item 9",
            },
            {
              key: "10",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item10} alt="" />
              ),
              label: "Item 10",
            },
            {
              key: "11",
              icon: (
                <img style={{ width: 20, height: 20 }} src={Item11} alt="" />
              ),
              label: "Item 11",
            },
          ]}
        />
        <div className="aside-footer">
          <hr />
          <div style={{ marginLeft: 10 }}>
            <h4>
              <strong>&copy;Alfa Nova 2022</strong>
            </h4>
            <p style={{ color: "grey", fontSize: 10 }}>
              Lorem ipsum dolar sit ametLorem ipsum dolar sit amet.
            </p>
          </div>
        </div>
      </Sider>

      {/* Below is Header */}
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: "0 30px 0 0",
            position: "relative",
            width: "100%",
          }}
        >
          <HeadDash></HeadDash>
        </Header>

        {/* Below is Content */}
        <Content
          style={{
            padding: "50px 20px 0 35px",
            minHeight: 280,
            position: "relative",
            background: "#E7E5E5",
            width: "100%",
          }}
        >
          <ContentDash></ContentDash>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideDash;
