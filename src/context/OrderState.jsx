import { createContext, useReducer } from "react";
import axios from "axios";
// import OrderReducer from "./OrderReducer";

const API_URL = "http://localhost:8000";


export const OrderContext = createContext();


export const OrderProvider = ({ children }) => {


    const createOrder = async (order) => {
        const token = JSON.parse(localStorage.getItem("token"));
        try {
            await axios.post(API_URL + "/orders", {productIds:order.map((p)=>p.id)},
            {
                headers: {
                    authorization: token
                }
            })
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <OrderContext.Provider
            value={{
               
                createOrder,
               
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}