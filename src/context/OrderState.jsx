import { createContext, useReducer } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";

const API_URL = "http://localhost:8000";


export const OrderContext = createContext();

const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
    token: token ? token : null,
    order: {}
}

export const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

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

    const getOrder = async() => {
        const token = JSON.parse(localStorage.getItem("token"));
        try {
        const res = await axios.get(API_URL + "/orders/orderproducts", {
                headers: {
                    authorization: token,
                  },
            });
            console.log(res)
            dispatch({
                type:'GET_ORDER',
                payload: res
            })
            
        } catch (error) {
            
        }
    }

    return (
        <OrderContext.Provider
            value={{
                createOrder,
                getOrder,
                order:state.order
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}