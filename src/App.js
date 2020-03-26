import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import "./styles/App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
    </Switch>
  );
};

export default App;
