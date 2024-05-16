import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bro from "../../Images/bro.png";
import vector from "../../Images/Vector.png";

import PassLock from "../../svg components/PasswordLock";
import validator from "validator";
import authStore from "../../GlobalStateManagement/globalStore";
import UserIcon from "../../svg components/UserIcon";
import Email from "../../svg components/EmailIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Eye from "../../svg components/svg";
function SignUp() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
const [ShowPassword, setShowPassword]=useState("false");
  const { name, email, password } = formData;

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });

    if (validator.isEmail(newEmail)) {
      setEmailError("");
    } else {
      setEmailError("The email entered is not correct");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });

    if (newPassword.length < 8) {
      setPasswordError(
        "Your password is not strong enough. Use at least 8 characters"
      );
    } else {
      setPasswordError("");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!ShowPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await axios.post(
            "http://localhost:3000/api/users/signup",
            {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }
        );

        // Extract name from formData
        const { name } = formData;

        // Update authStore with user data and authentication state
        authStore.name = name; // Store the name in authStore
        authStore.isAuthenticated = true;

        // Store name in local storage
        localStorage.setItem("name", name);

        // Clear the form data
        setFormData({ name: "", email: "", password: "" });

        // Redirect to login page (if needed)
        navigate("/login");
    } catch (error) {
        setLoading(false);
        console.log(error);
        // Handle signup error, display appropriate message to the user
    }
};


  return (
    <div className="main flex justify-content-center items-center h-screen w-full">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px] hidden sm:block ">
        <div className="flex items-center ">
          <img src={vector} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={bro} alt="Bro" />
      </div>
      <div className="right w-full md:w-1/2 flex items-center justify-end md:justify-center h-full pt-[100px]">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl font-Poppins">
            Sign Up for an Account
          </h5>
          <div>
            {successMessage && <div>{successMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="flex">
                  <div className="mb-8 ml-2 absolute ">
                    <UserIcon></UserIcon>
                  </div>
                </div>

                <input
                  id="fullName"
                  className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none   rounded-md py-3 pl-10 pr-6 sm:text-sm "
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="relative">
                <div className="flex">
                  <div className="mt-3 ml-2 absolute ">
                    <Email></Email>
                  </div>
                </div>
                <input
                  id="email"
                  className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none   rounded-md py-3 pl-10 pr-6 sm:text-sm "
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && (
                  <div className="text-red-500 text-sm mt-1">{emailError}</div>
                )}
              </div>
              <div className="relative">
                <div className="flex">
                  <div className="mt-3 ml-2 absolute ">
                    <PassLock></PassLock>
                  </div>
                </div>
                <div className="flex">
                  <div className="mt-3 ml-[320px] absolute  ">
                    <Eye onClick={togglePasswordVisibility}></Eye>
                  </div>
                </div>
                <input
                  id="password"
                  className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none   rounded-md py-3 pl-10 pr-6 sm:text-sm "
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                
              </div>

              {passwordError && (
                <div className="text-red-500 text-xs mt-1">{passwordError}</div>
              )}
              <div className="mt-4 flex justify-between font-semibold text-sm">
                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                  <input className="mr-1 mb-5" type="checkbox" required />
                  <span>
                    By creating an account means you agree to the
                    <strong>
                      Terms <br />
                      and Conditions
                    </strong>
                    and our
                    <strong> Privacy Policy</strong>
                  </span>
                </label>
              </div>
              <div className="text-center md:text-left">
                <button
                  className="bg-[#4BCBEB] font-Poppins font-2xl mt-4 px-4 py-4 font-bold w-4/5   px-4 py-2 text-white  rounded text-xs tracking-wider w-full mb-4  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none   rounded-md py-3 pl-10 pr-6 sm:text-sm "
                  type="submit"
                >
                  {loading && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="fa-spin text-white"
                      />
                    </div>
                  )}
                  {!loading && "Sign Up"}
                </button>
              </div>
              <div className="mt-8 mx-[70px] mx-4 font-Poppins font-semibold text-sm text-slate-500 text-center md:text-left">
                Already have an account?
                <span>
                  <button
                    className="text-[#4BCBEB] pl-1 font-[800] text-lg font-Poppins"
                    onClick={() => navigate("/login")}
                  >
                    Log In
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
