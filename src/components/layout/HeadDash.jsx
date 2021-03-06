import {
  Dropdown,
  Row,
  Col,
  Breadcrumb,
  List,
  Button,
} from "antd";
import React from "react";
import { Select } from "antd";
import { useState, useEffect } from "react";
import headImage from "../../assets/images/header-image.svg";
import logout from "../../assets/images/logout.svg";
import ru from "../../assets/images/Russian-flag.svg";
import en from "../../assets/images/USA-flag.svg";
import tr from "../../assets/images/Turkey-flag.svg";
import notificationStatus from "../../assets/images/notification-status.svg";

const { Option } = Select;

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

const data = [
  {
    avatar: (
      <Button
        style={{
          height: "fit-content",
          borderColor: "#fff",
        }}
      >
        <img src={logout} alt="" />
      </Button>
    ),
  },
  {
    avatar: (
      <Button
        style={{
          height: "fit-content",
          borderColor: "#fff",
        }}
      >
        <img style={{ paddingRight: 15 }} src={headImage} alt="" />
      </Button>
    ),
  },
  {
    avatar: (
      <Button
        style={{
          height: "fit-content",
          borderColor: "#fff",
        }}
      >
        <img src={notificationStatus} alt="" />
      </Button>
    ),
  },
  {
    avatar: (
      <Select defaultValue="en" style={{ width: 80 }} bordered={false}>
        <Option value="tr">
          <img style={{ width: 30, height: 30 }} src={tr} alt="" />
        </Option>
        <Option value="ru">
          <img style={{ width: 30, height: 30 }} src={ru} alt="" />
        </Option>
        <Option value="en">
          <img style={{ width: 30, height: 30 }} src={en} alt="" />
        </Option>
      </Select>
    ),
  },
];

const menu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown "
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta avatar={item.avatar} />
      </List.Item>
    )}
  />
);

const HeadDash = (onPress) => {
  const [visible, setVisible] = useState(true);
  const [md, setMd] = useState(18);

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  const resize = () => {
    if (window.innerWidth <= 900) {
      setVisible(false);
      setMd(8);
    } else {
      setVisible(true);
      setMd(18);
    }
  };

  return (
    <>
      <Row gutter={[24, 0]} style={{ justifyContent: "space-between"}}>
        <Col >
          <Breadcrumb className="header-breadcrumb">
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col className="header-control">
          {visible ? (
            <>
              <Select
                defaultValue="en"
                style={{ width: 80, marginTop: 15 }}
                bordered={false}
              >
                <Option value="tr">
                  <img style={{ width: 30, height: 30 }} src={tr} alt="" />
                </Option>
                <Option value="ru">
                  <img style={{ width: 30, height: 30 }} src={ru} alt="" />
                </Option>
                <Option value="en">
                  <img style={{ width: 30, height: 30 }} src={en} alt="" />
                </Option>
              </Select>
              <Button
                style={{
                  height: "fit-content",
                  borderColor: "#fff",
                  margin: "15px 15px 0 0",
                }}
              >
                <img src={notificationStatus} alt="" />
              </Button>
              <Button
                style={{
                  height: "fit-content",
                  borderColor: "#fff",
                  margin: "5px 30px 0 0",
                }}
              >
                <img style={{ paddingRight: 15 }} src={headImage} alt="" />
                <span style={{ color: "grey", paddingRight: 10 }}>
                  John Doe
                </span>
              </Button>
              <Button
                style={{
                  height: "fit-content",
                  borderColor: "#fff",
                  marginTop: 15,
                }}
              >
                <img src={logout} alt="" />
              </Button>
            </>
          ) : (
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href="#pablo"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {toggler}
              </a>
            </Dropdown>
          )}
        </Col>
      </Row>
    </>
  );
};

export default HeadDash;
