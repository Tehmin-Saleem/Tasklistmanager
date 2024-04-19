

import React from "react";
import vector from "../Images/Vector.png";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="top w-[25%] bg-[#4BCBEB] h-96 mr-4">
          <img className="" src={vector} alt="Logo" />
          <span>
            <h2 className="text-2xl font-medium text-black">
              Task Manager List
            </h2>
          </span>
        </div>
        <div className="leftbar w-[75%] bg-black h-24 flex items-center justify-center"></div>
      </div>

      <div className="center  bg-blue-500 ml-[345px] h-[500px]  w-[960px] ">
        {/* Content for the right section */}
      </div>
      
    </>
  );
}

export default Dashboard;
