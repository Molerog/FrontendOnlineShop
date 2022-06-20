import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserState";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
