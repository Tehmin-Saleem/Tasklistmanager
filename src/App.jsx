import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Link component
import Task from "./Components/Task";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import ResetPassword from "./Pages/Password/ResetPassword";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <Router>
        <ul className="App-header">
          <button className="px-4  items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/">Home</Link>
          </button>
          <button className="px-4 pl-[100px] items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-4 pl-[100px] items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/signup">SignUp</Link>
          </button>
          <button className="px-4 pl-[100px] items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/menu">Menu</Link>
          </button>
          <button className="px-4 pl-[100px] items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/resetpassword">Password</Link>
          </button>
          <button className="px-4 pl-[100px] items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/user">Users</Link>
          </button>
          <button className="px-4 pl-[100px] items-center text-[#4BCBEB] font-bold text-lg">
            <Link to="/task">Task</Link>
          </button>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/user" element={<Users />}></Route>
          <Route path="/task" element={<Task />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
