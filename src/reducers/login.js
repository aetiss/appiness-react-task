import {
  SET_LOGIN_ERROR,
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  LOGOUT_USER,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.payload,
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload,
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case LOGOUT_USER:
      return INITIAL_STATE;

    default:
      return state;
  }
};
