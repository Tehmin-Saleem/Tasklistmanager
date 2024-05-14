import React, { useState } from "react";
import axios from "axios"; // Import Axios for API calls
import { useNavigate } from "react-router-dom";
import group from "../../Images/Group.png";
import Illustration from "../../Images/illustration.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // Import the spinner icon
import PassLock from "../../svg components/PasswordLock";
import authStore from "../../GlobalStateManagement/globalStore";
import Email from "../../svg components/EmailIcon";

function Login() {
  // Initialize state using useState
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Destructure email and password from formData
  const { email, password } = formData;

  // Handle form input change
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:3000/api/users/login", { email, password })
      .then((result) => {
        const { name, user, token } = result.data;

        // Update Valtio store with user and authentication state
        authStore.user = user;
        authStore.token = token;
        authStore.name = name;
        authStore.isAuthenticated = true;

        // Store token in local storage (if needed)
        localStorage.setItem("token", token);
        console.log(
          "Authentication state after login:",
          authStore.isAuthenticated
        );

        // Navigate to dashboard if authenticated
        console.log("Navigating to dashboard...");
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        setError("Incorrect email or password.");
        console.log(err);
      });
  };

  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px] hidden sm:block ">
        <div className="flex items-center">
          <img src={group} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="right w-full md:w-1/2 flex items-center justify-end md:justify-center h-full pt-[100px]">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl font-poppins">
            Sign In to your Account
          </h5>
          <div className="pb-6 text-[#64748B] text-sm font-medium">
            Welcome Back! Please enter your details
          </div>
          <form onSubmit={onSubmit}>
            <div className="relative">
              <div className="flex">
                <div className="mt-7 ml-2 absolute ">
                  <Email></Email>
                </div>
              </div>

              <input
                id="email"
                className="mt-4 px-11 py-3 w-full bg-white border shadow-sm  placeholder-slate-400 focus:outline-none  rounded-md sm:text-sm focus:ring-1"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="flex">
              <div className="mt-7 ml-3 absolute">
                <PassLock />
              </div>

              <input
                id="password"
                className="mt-4 px-11 py-3 w-full bg-white border shadow-sm  placeholder-slate-400 focus:outline-none  rounded-md sm:text-sm focus:ring-1"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                required
              />
              <div className="absolute top-0 left-0 flex  items-center  h-full px-3">
                <RiLockPasswordLine className="text-gray-400 " />
              </div>
              <div className="absolute top-0 left-0 flex  items-center  h-full px-3">
                <BiHide className="text-gray-400 ml-[340px] " />
              </div>
            </div>
            {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input
                  className="mr-1 mb-4 pt-[20px] size-[20px]"
                  type="checkbox"
                  required="true"
                />
                <span className="font-bold text-black">Remember me</span>
                <span>
                  <button
                    className="pl-[155px] text-[#4BCBEB] "
                    onClick={() => navigate("/resetpassword")}
                  >
                    Forgot Password?
                  </button>
                </span>
              </label>
            </div>
            <div className="text-center md:text-left">
              <button
                className="bg-[#4BCBEB] font-Poppins mt-4 px-4 py-4 font-bold w-4/5   px-4 py-2 text-white  rounded text-xs tracking-wider w-full mb-4  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none   rounded-md py-3 pl-10 pr-6 sm:text-sm "
                type="submit"
              >
                {loading && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-spin text-white"
                    />
                  </div>
                )}
                {!loading && "Log In"}
              </button>
            </div>
          </form>
          <div className="mt-8 mx-[70px] mx-4 font-semibold font-Poppins text-sm text-slate-500 text-center md:text-left">
            Don't have an account?
            <span>
              <a
                className="text-[#4BCBEB] font-Poppins  pl-1 font-[900] text-lg hover:underline hover:underline-offset-4 "
                href="/"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
