import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsers, logoutUser } from "../actions";
import { Layout, Table, Typography, Button, message } from "antd";
import tableColumns from "./tableColumns";
import { LogoutOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Header, Content } = Layout;

const Home = ({ users, fetchUsers, logoutUser }) => {
  let history = useHistory();
  const dataSource = users;
  const columns = [...tableColumns];

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLogout = () => {
    logoutUser();
    sessionStorage.clear();
    history.push("/login");
    message.success("Log out success");
  };
  if (!sessionStorage.getItem("isLoggedIn")) {
    history.push("/login");
  }

  return (
    <Layout className="login-layout">
      <Header>
        <Text strong style={{ color: "white" }}>
          DASHBOARD
        </Text>
        <Button
          style={{ float: "right", marginTop: 15 }}
          onClick={handleLogout}
        >
          Logout
          <LogoutOutlined />
        </Button>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Table dataSource={dataSource} columns={columns} />
      </Content>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    users: state.dashboard.users,
  };
};
export default connect(mapStateToProps, { fetchUsers, logoutUser })(Home);
