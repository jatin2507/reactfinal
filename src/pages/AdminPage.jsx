import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Space, Table, Tag, ConfigProvider } from "antd";
import { ToastContainer, toast } from "react-toastify";
const { Column, ColumnGroup } = Table;

export default function AdminPage({ axios }) {
  const [data, setdata] = useState();

  useEffect(() => {
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
  }, []);

  return (
    <div>
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
            console.log(_),
            (
              <Space size="middle">
                <Link
                  onClick={() => {
                    const newWindow = window.open(
                      `mailto: ${_.email}`,
                      "_blank"
                    );
                  }}
                >
                  Mail
                </Link>
                <Link
                  onClick={() => {
                    const newWindow = window.open(
                      `https://api.whatsapp.com/send?phone=${_.phonenum}&text=Hello,We are Dark ninja solutions`,
                      "_blank"
                    );
                  }}
                >
                  Whatapp
                </Link>
              </Space>
            )
          )}
        />
      </Table>

      <ToastContainer
        position="top-right"
        autoClose={5000}
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
