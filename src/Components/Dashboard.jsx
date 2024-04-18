import { CgProfile } from "react-icons/cg";
import React from "react";
import group from "../Images/Group.png";
import { IoNotificationsOutline } from "react-icons/io5";
import ResetPassword from "../Pages/Password/ResetPassword";
function Dashboard() {
  return (
    <>
      <div className="flex bg-gray-100">
        <div className="topleft w-[25%] bg-white h-[700px] pl-8 ">
          <span className="my-2">
            <img src={group} alt="Logo" className="mr-2 pt-4" />
            <h2 className="text-2xl font-medium ml-[30px] font-bold text-[#4BCBEB]">
              Task Manager List
            </h2>
            <hr className="ml-1 mr-[105px]"></hr>
          </span>
          <h2 className="text-black font-bold mt-8">MENU</h2>

          <button className="flex flex-col   pr-[100px]   py-2 mt-4 hover:shadow-md ">
            <h2 className="text-[#4BCBEB] ml-2 font-bold">Dashboard</h2>
          </button>
          <button className="flex flex-col  hover:text-[#4BCBEB] pr-[140px]    hover:shadow-md py-2 mt-4">
            <h2 className=" font-bold ml-2">Users</h2>
          </button>
          <button className="flex flex-col hover:text-[#4BCBEB]  pr-[140px]    hover:shadow-md py-2 mt-4 ">
            <h2 className=" font-bold ml-2">Tasks</h2>
          </button>
          <button className="flex flex-col hover:text-[#4BCBEB]  pr-[120px]    hover:shadow-md py-2 mt-4">
            <h2 className=" font-bold ml-2">Settings</h2>
          </button>
        </div>

        <div className="topright w-[75%] bg-white h-24 flex ml-1 items-center justify-center">
          <h1 className="mr-[650px] font-bold text-3xl ml-1">Dashboard</h1>
          <span className="my-[20px]">
            <div className="relative flex flex-row">
              <IoNotificationsOutline className="text-gray-400 mt-[2px]  size-[2rem] " />

              <CgProfile className="text-gray-400 mt-[2px] size-[2rem] " />
            </div>
          </span>
          <div className="flex flex-col">
            <span className=" ">Usman Shahid</span>

            <span className=" ">Status 200</span>
          </div>
        </div>
      </div>

      <div className="center w-1/2 bg-blue-500 ml-[350px]  h-[500px]  row-span-2   w-[960px] "></div>
    </>
  );
}

export default Dashboard;
