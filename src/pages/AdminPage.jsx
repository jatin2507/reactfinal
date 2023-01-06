import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Space, Table, Tag, ConfigProvider, Badge } from "antd";
import {
  RetweetOutlined,
  ClockCircleOutlined,
  MailOutlined,
  WhatsAppOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
const { Column, ColumnGroup } = Table;
export default function AdminPage({ axios }) {
  const [data, setdata] = useState();
  const [loader, setloader] = useState(true);
  function showdata() {
    axios
      .post("/admin/radheykrishna/show")
      .then((e) => {
        console.log(e.data);
        if (e.data.code === 200) {
          toast("Data Fetch ...");
          setdata(e.data.data);
        }
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    setloader(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    showdata();
  }, []);

  return (
    <div>
      <Cursor />

      <div style={{ textAlign: "right", marginRight: "5%" }}>
        {" "}
        <RetweetOutlined onClick={showdata} />
      </div>

      <Loader loader={loader} />

      <Table
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
        dataSource={data}
      >
        <Column title="Name" dataIndex="name" key="name" width={200} />
        <Column title="Email" dataIndex="email" key="email" width={200} />

        <Column
          title="Services"
          dataIndex="serviceType"
          key="serviceType"
          width={200}
        />
        <ColumnGroup title="phone num">
          <Column
            title="PhoneNum"
            dataIndex="phonenum"
            key="phonenum"
            width={100}
          />
          <Column
            title="PhoneCode"
            dataIndex="phonecode"
            key="phonecode"
            width={80}
          />
        </ColumnGroup>
        <Column title="Message" dataIndex="message" key="message" />
        <Column
          title="Action"
          key="action"
          width={150}
          render={(_, record) => (
            <Space size="middle">
              <Link
                onClick={() => {
                  const newWindow = window.open(`mailto: ${_.email}`, "_blank");
                }}
              >
                <MailOutlined />
              </Link>
              <Link
                onClick={() => {
                  const newWindow = window.open(
                    `https://api.whatsapp.com/send?phone=${_.phonenum}&text=Hello,We are Dark ninja solutions`,
                    "_blank"
                  );
                }}
              >
                <WhatsAppOutlined />
              </Link>
            </Space>
          )}
        />
      </Table>
      <Badge
        className="site-badge-count-109"
        count={data?.length}
        style={{
          backgroundColor: "#0052D4",
          color: "white",
          textAlign: "right",
        }}
      />

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
