// @flow
import { combineReducers } from "redux";

const account = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return { ...state, userInfo: action.data };
    default:
      return state;
  }
};

export default combineReducers({
  account
});
