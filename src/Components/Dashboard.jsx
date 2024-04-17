// import React from "react";
// import vector from "../Images/Vector.png";
// function Dashboard() {
//   return (
//     <>
//       {/* <div className="main flex justify-center items-center h-screen"> */}
//       <div className="top w-[1000px] bg-black ml-[300px] h-24"></div>
//       <div className=" left w-[70%] bg-[#4BCBEB] h-32 flex items-center justify-center ">
//         <img src={vector} alt="Logo" />
//         <span>
//           <h2 className="text-2xl font-bold text-black">Task Manager List</h2>
//         </span>
//         {/* <div className="flex items-center"></div> */}
//       </div>

//       <div className="right w-1/2 bg-blue-500 ml-[345px] h-[500px] mt-[100px] w-[960px] ">
//         {/* <div className="flex flex-col mx-[100px] "></div> */}
//       </div>
//       {/* </div> */}
//     </>
//   );
// }
// export default Dashboard;

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
        <div className="left w-[75%] bg-black h-24 flex items-center justify-center"></div>
      </div>

      <div className="right w-1/2 bg-blue-500 ml-[345px] h-[500px] mt-[100px] w-[960px] ">
        {/* Content for the right section */}
      </div>
    </>
  );
}

export default Dashboard;
