import Notification from "../svg components/Notification";
import { Link } from "react-router-dom";
import React from "react";
import authStore from "../GlobalStateManagement/globalStore";
import UserIcon from "../svg components/UserIcon";
import { useSnapshot } from "valtio";

const Header = ({ headername }) => {
  const snapshot = useSnapshot(authStore); // Access the name property from authStore
  console.log("name", snapshot.name)
  return (
    <div className="flex h-16 bg-white">
      <p className="px-9 py-3 font-Poppins font-[700] text-2xl text-black">
        {headername}
      </p>
      <Link to="/notifications">
        <Notification></Notification>
      </Link>
      <UserIcon></UserIcon>
      <div className="ml-3 mt-5">
        
        <h1 className="font-bold text-sm">{snapshot.name}</h1>{" "}
        {/* Use snapshot.name here */}
       
        <p className="text-sm">Status 200</p>
      </div>
      
      <div className="mt-4">{">"}</div>
    </div>
  );
};

export default Header;
