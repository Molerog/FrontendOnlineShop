import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const API_URL = "http://localhost:8000";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    token: token ? token : null,
    user: null,
    message: ""
};

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const register = async (user) => {
        const res = await axios.post(API_URL + "/users", user)
        console.log(res.data)
        dispatch ({
            type: "REGISTER",
            payload: res.data
        })
    };

    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user)
        console.log(res.data)
        dispatch ({
            type: "LOGIN",
            payload: res.data
        })
        if (res.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token))
        }
    }

    return(
        <UserContext.Provider value = {{ register, login, message: state.message, token:state.token }}>
            {children}
        </UserContext.Provider>
    )
}