import { createStore } from "redux";

const authReducer = (state = { isLoggedIn: false }, action) => {
  if (action.type === "LOG_IN") {
    return { isLoggedIn: true };
  }
  if (action.type === "LOG_OUT") {
    return { isLoggedIn: false };
  }
  return state;
};

const store = createStore(authReducer);

export default store;
