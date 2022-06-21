import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const API_URL = "http://localhost:8000";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
  message: "",
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (user) => {
    const res = await axios.post(API_URL + "/users", user);
    console.log(res.data);
    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  };

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    console.log(res.data);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const getUserInfo = async () => {
    const res = await axios.get(API_URL + "/users/info", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        register,
        login,
        message: state.message,
        token: state.token,
        getUserInfo,
        user: state.user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
