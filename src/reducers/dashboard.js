import { FETCH_USERS } from "../actions/actionTypes";

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.user,
      };
    default:
      return state;
  }
};
