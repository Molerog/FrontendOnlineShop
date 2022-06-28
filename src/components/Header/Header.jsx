import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from 'antd';
import { ProductContext } from "../../context/ProductState";

const Header = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { token, logout } = useContext(UserContext);
  const logoutUser = () => {
    clearCart()
    logout();
  };

  return (
    <header>
        <span>
          <Link to="/home">Home</Link>
        </span>

        {token ? (
          <>
            <span>
              <Link to="/products">Products</Link>
            </span>
            <span>
              <Link to="/profile">Profile</Link>
            </span>
            <span>
              <Link to="/cart">
                <Badge count={cart.length}>
                  <ShoppingCartOutlined style={{ fontSize: '18px', color: "black" }} />
                </Badge>
              </Link>
            </span>
            <button onClick={logoutUser}>
              <Link to="/home">Logout</Link>
            </button>
          </>
        ) : (
          <>
            <div className="ButtonsContainer">
              <button>
                <Link to="/">Register</Link>
              </button>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </div>
          </>
        )}
    </header>
  );
};

export default Header;
