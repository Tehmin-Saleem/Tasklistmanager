import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import ResetPassword from "./Pages/Password/ResetPassword";
import Users from "./Components/Users";
import Dashboard from "./Components/Dashboard";
import Task from "./Components/Task";
import Notification from "./Components/Notifications";
import { useSnapshot } from "valtio";
import authStore from "./GlobalStateManagement/globalStore";

function App() {
  const storeSnapshot = useSnapshot(authStore);
  console.log("store", storeSnapshot);
  const isAuthenticated = storeSnapshot.isAuthenticated;
  const userRole = storeSnapshot.role;

  // Cleanup local storage and store on beforeunload event
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      // localStorage.removeItem("token");
      // localStorage.removeItem("role");
      authStore.token = null;
      authStore.role = null;
      authStore.isAuthenticated = false;
    });

    return () => {
      window.removeEventListener("beforeunload", () => {});
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        {isAuthenticated && (
          <>
            {userRole === "admin" && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/tasks" element={<Task />} />
                <Route path="/notifications" element={<Notification />} />
              </>
            )}
            {userRole === "user" && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/tasks" element={<Task />} />
                <Route path="/notifications" element={<Notification />} />
              </>
            )}
            <Route path="/resetpassword" element={<ResetPassword />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
export default App;
