import React from "react";
import { Layout } from "antd";
const { Header, Content } = Layout;

const Login = ({ children }) => {
  return (
    <Layout className="login-layout">
      <Header>Login</Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="login-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default Login;
