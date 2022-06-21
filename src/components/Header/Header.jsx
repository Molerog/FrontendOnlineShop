import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext/UserState";

const Header = () => {
  // const { token, logout } = useContext(UserContext);
  // const logoutUser = () => {
  //   logout();
  // };
  return (
    <header>
      <div className="overlay">
          <h1>Simply The Best</h1>
          <h3>Reasons for Choosing US</h3>
          <div className="LinksContainer">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/profile">Profile</Link>
            <div className="ButtonsContainer">
              <button>
                <Link to="/">Register</Link>
              </button>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
