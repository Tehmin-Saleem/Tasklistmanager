import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Link component
import Task from "./Components/Task";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

import ResetPassword from "./Pages/Password/ResetPassword";
import Users from "./Components/Users";
import Dashboard from "./Components/Dashboard";
import Updatepass from "./Pages/Password/Updatepass";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/updatepass" element={<Updatepass />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
