import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserState";

const Header = () => {
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
          <button onClick = {logoutUser}>
            <Link to= '/register'>Logout</Link>
          </button>
          </>
          ):(
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
