import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from 'antd';
import { ProductContext } from "../../context/ProductState";

const Header = () => {
  const {cart} = useContext(ProductContext);
  const { token, logout } = useContext(UserContext);
  const logoutUser = () => {
    logout();
  };

  return (
    <header>
      <div className="overlay">
        <h1>Simply The Best</h1>
        <h3>Reasons for Choosing US</h3>
        <div className="LinksContainer">
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
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </span>
              <button onClick={logoutUser}>
                <Link to="/register">Logout</Link>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
