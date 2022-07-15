import {
  Dropdown,
  Row,
  Col,
  Badge,
  Breadcrumb,
  List,
  Avatar,
  Button,
} from "antd";
import { BellFilled, NotificationOutlined } from "@ant-design/icons";
import React from "react";
import { Select } from "antd";
import { useState } from "react";
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


const HeadDash = (onPress) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb className="header-breadcrumb">
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24} md={18} className="header-control">
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
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
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
            <span style={{ color: "grey", paddingRight: 10 }}>John Doe</span>
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
        </Col>
      </Row>
    </>
  );
};

export default HeadDash;
