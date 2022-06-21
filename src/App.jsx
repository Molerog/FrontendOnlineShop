import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserState";
import { ProductProvider } from "./context/ProductState";

import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="GlobalContainer">
      <UserProvider>
        <ProductProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </Router>
        </ProductProvider>
      </UserProvider>
    </div>
  )
}

export default App