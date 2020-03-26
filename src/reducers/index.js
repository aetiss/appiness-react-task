import { combineReducers } from "redux";
import dashboard from "./dashboard";
import login from "./login";

const todoApp = combineReducers({ dashboard, login });

export default todoApp;
