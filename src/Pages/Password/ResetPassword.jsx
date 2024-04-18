import React from "react";
import group from "../../Images/Group.png"; // Adjust the path
import Illustration from "../../Images/illustration.png"; // Adjust the path

const ResetPassword = () => {
  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[200px] pt-[100px]">
        <div className="flex items-center">
          <img src={group} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-2xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={Illustration} alt="Illustration" />{" "}
        {/* Provide alt text for accessibility */}
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px] ">
          <h5 className="font-bold  pb-8 text-2xl">Sign Up for an Account</h5>
          <div className="relative">
            <input
              id="fullName"
              className="text-sm w-4/5 pl-10 pr-4 py-4 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Enter Your Full Name"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
