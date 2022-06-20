import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer"

const API_URL = "http://localhost:8000";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    token: token ? token : null,
    user: null,
    message: ""
};

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const register = async (user) => {
        const res = await axios.post(API_URL + "/users", user)
        console.log(res.data)
        dispatch ({
            type: "REGISTER",
            payload: res.data
        })
    }

    return(
        <UserContext.Provider value = {{ register, message: state.message }}>
            {children}
        </UserContext.Provider>
    )
}