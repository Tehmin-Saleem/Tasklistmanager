import React from "react";
import { useNavigate } from "react-router-dom";
import vector from "../../Images/Vector.png"; // Adjust the path
import Illustration1 from "../../Images/illustration1.png"; // Adjust the path
import { MdOutlineMailOutline } from "react-icons/md";
const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px]">
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={Illustration1} alt="Illustration" />{" "}
        {/* Provide alt text for accessibility */}
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl">Reset your Password</h5>
          <h6>
            Enter the email address associated with your account <br />
            and we will send you a link to reset your password.
          </h6>
          <div className="relative">
            <input
              id="email"
              className="text-sm w-4/5 px-4 py-4 pl-8 border border-solid border-gray-300 rounded mt-4"
              type="email"
              required
            />
            <div className="absolute top-0 left-0 flex pb-[280px] items-center  h-full px-3">
              <MdOutlineMailOutline className="text-gray-400 " />
            </div>
            <div className="text-center md:text-left">
              <button
                className="bg-[#4BCBEB] rounded-lg text-2xl mt-[50px] px-4 py-4 font-bold w-4/5   px-4 py-2 text-white  rounded  tracking-wider"
                type="submit"
                onClick={() => navigate("/updatepass")}
              >
                Continue
              </button>
            </div>

            <button
              className="cursor-pointer ml-[130px] mt-[30px] text-[#4BCBEB] font-bold text-lg"
              onClick={() => navigate("/login")}
            >
              Back to sign in
            </button>
            <div className="mt-[100px] mx-[70px] text-black mx-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account?
              <span>
                <button
                  className="text-[#4BCBEB]  pl-1 font-[900] text-lg hover:underline hover:underline-offset-4 "
                  onClick={() => navigate("/")}
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
