import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  // const { token, logout } = useContext(UserContext);
  // const logoutUser = () => {
  //   logout();
  // };

// Añadir que los links del Header cambien cuando ya has hecho LogIn para que aparezca la opción de LogOut

// {token ? (
//   <>
//   <span>
//     <Link to="/products">Products</Link>
//   </span>
//   <span>
//     <Link to="/profile">Profile</Link>
//   </span>
//   <span onClick={logoutUser}>
//     <Link to="/">Logout</Link>
//   </span>
// </>

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
    )
}

export default Header