import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserState";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import "antd/dist/antd.css";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="GlobalContainer">
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
