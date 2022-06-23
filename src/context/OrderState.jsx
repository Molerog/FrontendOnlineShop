import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    console.log('soy la api Order',order)
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      await axios.post(
        API_URL + "/orders",
        { ProductId: order.map((p) => p.id) },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{createOrder}}
    >
      {children}
    </OrderContext.Provider>
  );
};
