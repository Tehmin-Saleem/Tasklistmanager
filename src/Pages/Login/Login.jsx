import React, { useState } from "react";
import group from "../../Images/Group.png";
import Illustration from "../../Images/illustration.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiHide } from "react-icons/bi";
function Login() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError(
        "Your password is not strong enough. Use atleast 8 characters"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px] ">
        <div className="flex items-center">
          <img src={group} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>

        <img src={Illustration} />
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl font-[poppins]">
            Sign In to your Account
          </h5>
          <div className="pb-6 text-[#64748B] text-sm font-medium">
            Welcome Back! Please enter your detail
          </div>
          <div className="relative">
            <input
              id="email"
              className="text-sm w-4/5 px-4 py-4 pl-8 border border-solid border-gray-300 rounded mt-4"
              type="email"
              placeholder="Email"
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
            <div className="absolute top-0 left-0 flex  items-center  h-full px-3">
              <RiLockPasswordLine className="text-gray-400 " />
            </div>
            <div className="absolute top-0 left-0 flex  items-center  h-full px-3">
              <BiHide className="text-gray-400 ml-[340px] " />
            </div>
          </div>
          {/* <div className="text-sm text-[#64748B] font-normal">
            Your password must have atleast 8 characters
          </div> */}
          {passwordError && (
            <div className="text-red-500 text-xs mt-1">{passwordError}</div>
          )}
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input
                className="mr-1 mb-4 pt-[20px] size-[20px]"
                type="checkbox"
                required
              />
              <span className="font-bold text-black">Remember me</span>
              <span>
                <button className="pl-[155px] text-[#4BCBEB] ">
                  Forgot Password?
                </button>
              </span>
            </label>
          </div>
          <div className="text-center md:text-left">
            <button
              className="bg-[#4BCBEB] rounded-lg text-lg mt-4 px-4 py-4 font-bold w-4/5   px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Log In
            </button>
          </div>
          <div className="mt-8 mx-[70px] mx-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account?
            <span>
              <a
                className="text-[#4BCBEB]  pl-1 font-[900] text-lg hover:underline hover:underline-offset-4 "
                href="/signup"
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
