import {
  FETCH_USERS,
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  LOGOUT_USER,
} from "./actionTypes";
import users from "../data/users.json";

export const login = (email, password) => {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    loginService(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
};

const loginService = (email, password, callback) => {
  setTimeout(() => {
    if (email === "hruday@gmail.com" && password === "hruday123") {
      return callback(null);
    } else {
      return callback("Invalid email and password");
    }
  }, 1000);
};

export const setLoginPending = isLoginPending => {
  return {
    type: SET_LOGIN_PENDING,
    payload: isLoginPending,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const setLoginSuccess = isLoginSuccess => {
  return {
    type: SET_LOGIN_SUCCESS,
    payload: isLoginSuccess,
  };
};

export const setLoginError = loginError => {
  return {
    type: SET_LOGIN_ERROR,
    payload: loginError,
  };
};

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: users,
});
