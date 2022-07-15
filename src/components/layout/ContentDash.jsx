import {
  Avatar,
  Card,
  Row,
  Col,
  Input,
  Button,
  Table,
  Select,
  Space,
  Pagination,
} from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import contentExport from "../../assets/images/content-export.svg";
import contentFilter from "../../assets/images/filter-content.svg";
import contentPlus from "../../assets/images/content-plus.svg";
import johnClavio from "../../assets/images/Jhon-clavio.png";
import alexSmith from "../../assets/images/Alex-smith.png";
import janeCoper from "../../assets/images/Jane-coper.png";
import marsahllCook from "../../assets/images/Marsahll-cook.png";
import raheelRana from "../../assets/images/Richard-rana.png";
import rachelMale from "../../assets/images/Rachel-m-male.png";
import rachelFemale from "../../assets/images/Rachel-m-female.png";

const { Option } = Select;

const columns = [
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
    width: "15%",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
    width: "15%",
    align: "center",
    render: (phone) => <span style={{ color: "#A8B0B9" }}>{phone}</span>,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: "15%",
    align: "center",
    render: (country) => <span style={{ color: "#A8B0B9" }}>{country}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "15%",
    align: "center",
    render: (status) => (
      <Button
        size="large"
        style={{
          background:
            status === "Completed"
              ? "#44C13C"
              : status === "Continues"
              ? "#FFCF0F"
              : "#FF513A",
          borderRadius: 10,
          border: "none",
          color: "#FAFAFA",
        }}
      >
        {status}
      </Button>
    ),
  },
  {
    title: "Created Date",
    dataIndex: "date",
    key: "date",
    width: "12%",
    align: "center",
    render: (date) => <span style={{ color: "#A8B0B9" }}>{date}</span>,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: "20%",
    align: "center",
    render: (action) => (
      <Button
        size="small"
        style={{
          background: "#D6DADE",
          borderRadius: 10,
          height: "fit-content",
        }}
      >
        <Select
          defaultValue="action"
          bordered={false}
          style={{ color: "#fff", }}
        >
          <Option value="delete">Delete</Option>
          <Option value="update">Update</Option>
          <Option value="action">{action}</Option>
        </Select>
      </Button>
    ),
  },
];

const names = [
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={johnClavio}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Jhon Clavio</p>
      <span style={{ color: "#B2AEAE" }}>Male</span>
    </div>
  </>,
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={alexSmith}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Alx Smith</p>
      <span style={{ color: "#B2AEAE" }}>Male</span>
    </div>
  </>,
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={janeCoper}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Jane Coper</p>
      <span style={{ color: "#B2AEAE" }}>Female</span>
    </div>
  </>,
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={marsahllCook}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Marsahll Cook</p>
      <span style={{ color: "#B2AEAE" }}>Male</span>
    </div>
  </>,
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={raheelRana}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Raheel Rana Tariq</p>
      <span style={{ color: "#B2AEAE" }}>Male</span>
    </div>
  </>,
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={rachelMale}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Rachel M. Hughes</p>
      <span style={{ color: "#B2AEAE" }}>Male</span>
    </div>
  </>,
  <>
    <img
      style={{ paddingRight: 15, display: "inline-block", marginBottom: 20 }}
      src={rachelFemale}
      alt=""
    />
    <div style={{ display: "inline-block" }}>
      <p style={{ color: "#A8B0B9", marginBottom: 0 }}>Rachel M. Hughes</p>
      <span style={{ color: "#B2AEAE" }}>Female</span>
    </div>
  </>,
];
const phones = [
  "+1-410-555-0112",
  "+1-202-555-0199",
  "+1-614-555-0111",
  "+1-410-555-0194",
  "801-203-1610",
  "801-203-1610",
  "+1-307-555-0108",
];

const countries = [
  "Bahrain",
  "Canada",
  "India",
  "Luxembourg",
  "Pakistan",
  "United Kingdom",
  "Vatican City",
];

const statuses = [
  "Continues",
  "Completed",
  "Waiting",
  "Continues",
  "Completed",
  "Waiting",
  "Continues",
];

const dates = [
  "02.05.2022",
  "04.05.2022",
  "03.03.2022",
  "01.01.2022",
  "01.01.2022",
  "01.01.2022",
  "01.01.2022",
];

const data = [];

for (let i = 0, j = 1; j <= 100; i++, j++) {
  data.push({
    key: j,
    name: names[i],
    phone: phones[i],
    country: countries[i],
    status: statuses[i],
    date: dates[i],
    actions: "Actions",
  });
  if (i === 6) i = 0;
}

// const selectComponentClass = (props) => {
//   return (
//     <Select style={{ height: "fit-content" }}>
//       {React.Children.map(props.children, (child) => {
//         return React.cloneElement(child, {
//           onClick: props.onChange,
//         });
//       })}
//     </Select>
//   );
// };
// selectComponentClass.Option = (props) => {
//   return (
//     <div
//       style={{
//         margin: 5,
//         padding: 5,
//         border: "1px solid black",
//         borderRadius: 3,
//         cursor: "pointer"
//       }}
//       onClick={() => props.onClick(props.value)}
//     >
//       {props.value}
//     </div>
//   );
// };


const ContentDash = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <Row gutter={[24, 16]} style={{ marginBottom: "4%" }}>
        <Col flex="50%">
          <Input
            style={{ borderRadius: 8, minHeight: 40 }}
            size="large"
            placeholder="Search name, email, or etc."
            prefix={<SearchOutlined style={{ color: "#BDBDBD" }} />}
          />
        </Col>
        <Col  flex="10%">
          <Button
            size="large"
            style={{
              background: "#8484f8",
              borderRadius: 15,
              minHeight: 40,
              minWidth: 116,
            }}
          >
            <img style={{ paddingRight: 8 }} src={contentExport} alt="" />
            <span style={{ color: "#FAFAFA" }}>Export</span>
          </Button>
        </Col>
        <Col flex="10%">
          <Button
            size="large"
            style={{
              background: "#8484f8",
              borderRadius: 15,
              minHeight: 40,
              minWidth: 116,
            }}
          >
            <img style={{ paddingRight: 8 }} src={contentFilter} alt="" />
            <span style={{ color: "#FAFAFA" }}>Filters</span>
          </Button>
        </Col>
        <Col flex="10%">
          <Button
            danger
            size="large"
            style={{
              background: "#FF513A",
              borderRadius: 15,
              minHeight: 41,
              minWidth: 153,
            }}
          >
            <img style={{ paddingRight: 8 }} src={contentPlus} alt="" />
            <span style={{ color: "#FAFAFA" }}>New Modal</span>
          </Button>
        </Col>
      </Row>
      <Table
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        style={{ maxWidth: "95%", }}
        pagination={{
          showSizeChanger: true,
          total: 100,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          size: "default",
        }}
      />
    </>
  );
};

export default ContentDash;
