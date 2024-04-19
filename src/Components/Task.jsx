import { CgProfile } from "react-icons/cg";
import React from "react";
import group from "../Images/Group.png";
import { IoNotificationsOutline } from "react-icons/io5";
import Calendar from 'react-calendar';
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-calendar/dist/Calendar.css';
function Task(){
    return(
        <>
<div className="grid grid-rows-3 grid-flow-col gap-4 border ">
<div className="topleft row-span-3 col-span-1 bg-white h-full pl-8 mr-4">
  <span>
    <img src={group} alt="Logo" className="mr-2 pt-4" />
    <h2 className="text-2xl font-medium ml-6 font-bold text-[#4BCBEB]">
      Task Manager List
    </h2>
    <hr className="ml-1 mr-4" />
  </span>
  <h2 className="text-black font-bold mt-8">MENU</h2>
  <button className="flex flex-col pr-[100px] py-2 mt-4 hover:shadow-md">
    <h2 className="text-[#4BCBEB] ml-2 font-bold">Dashboard</h2>
  </button>
  <button className="flex flex-col hover:text-[#4BCBEB] pr-[140px] hover:shadow-md py-2 mt-4">
    <h2 className="font-bold ml-2">Users</h2>
  </button>
  <button className="flex flex-col hover:text-[#4BCBEB] pr-[140px] hover:shadow-md py-2 mt-4">
    <h2 className="font-bold ml-2">Tasks</h2>
  </button>
  <button className="flex flex-col hover:text-[#4BCBEB] pr-[120px] hover:shadow-md py-2 mt-4">
    <h2 className="font-bold ml-2">Settings</h2>
  </button>
</div>
<div className="topright col-span-4 flex  bg-white h-24">
    <h1 className="font-bold text-3xl ml-1 mt-8">Dashboard</h1>
    <div className="ml-auto flex items-center space-x-4">
      <IoNotificationsOutline className="text-gray-400 size-[2rem]" />
      <CgProfile className="text-gray-400 size-[2rem]" />
      <div className="flex flex-col ml-4">
        <h1 className="text-black">Usman Shahid</h1>
        <h1>Status 200</h1>
      </div>
    </div>
  </div>
  </div>
  </>
    );
}
