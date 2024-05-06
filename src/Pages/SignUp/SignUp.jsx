import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bro from "../../Images/bro.png";
import vector from "../../Images/Vector.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import validator from "validator";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/users/signup", {
        name,
        email,
        password,
      });
      console.log(response);
      navigate('/login'); // Redirect to login page on successful signup
    } catch (error) {
      console.error(error);
      // Handle signup error, display appropriate message to the user
    }
  };

  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px] ">
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={bro} alt="Bro" />
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl">Sign Up for an Account</h5>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                id="fullName"
                className="text-sm w-4/5 pl-10 pr-4 py-4 border border-solid border-gray-300 rounded"
                type="text"
                placeholder="Enter Your Full Name"
                value={name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="relative">
              <input
                id="email"
                className="text-sm w-4/5 px-4 py-4 pl-8 border border-solid border-gray-300 rounded mt-4"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <div className="absolute top-0 left-0 flex mt-2 items-center  h-full px-3">
                <MdOutlineMailOutline className="text-gray-400 " />
              </div>
            </div>
            <div className="relative">
              <input
                id="password"
                className="text-sm w-4/5 px-4 py-4 pl-8 border border-solid border-gray-300 rounded my-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="absolute top-0 left-0 flex items-center h-full px-3">
                <RiLockPasswordLine className="text-gray-400" />
              </div>
            </div>
            {emailError && (
              <div className="text-red-500 text-xs mt-1">{emailError}</div>
            )}
            <div className="text-sm text-[#64748B] font-normal">
              Your password must have at least 8 characters
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
                className="bg-[#4BCBEB] mt-4 px-4 py-4 font-bold w-4/5   px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
                
              >
                SignUp
              </button>
            </div>
            <div className="mt-8 mx-[70px] mx-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Already have an account?
              <span>
                <button
                  className="text-[#4BCBEB] pl-1 font-[800] text-lg  "
                  onClick={() => navigate('/login')}
                
                >
                  Log In
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
