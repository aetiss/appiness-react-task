import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginLayout from "../layout/Login";
import { MailOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { login, setLoginError } from "../actions";

const LoginForm = ({
  login,
  setLoginError,
  isLoginPending,
  isLoginSuccess,
  loginError,
}) => {
  let history = useHistory();

  const onFinish = values => {
    console.log("Success:", values);
    setLoginError();
    login(values.email, values.password);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      sessionStorage.setItem("isLoggedIn", isLoginSuccess);
      history.push("/");
    }
  });

  if (sessionStorage.getItem("isLoggedIn")) {
    history.push("/");
  }

  return (
    <LoginLayout>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            { required: true, message: "Please input your Username!" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={isLoginPending}
          >
            Log in
            <LoginOutlined />
          </Button>
        </Form.Item>
        {isLoginSuccess && message.success("LogIn success")}
        {loginError && message.error(loginError)}
      </Form>
    </LoginLayout>
  );
};

const mapStateToProps = state => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    setLoginError: () => dispatch(setLoginError(null)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
