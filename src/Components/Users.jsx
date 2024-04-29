import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoNotificationsOutline } from "react-icons/io5";
import group from "../Images/Group.png"
function Users() {
  const tasks = [
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "https://picsum.photos/50", // Sample image URL
      customerLink: "/john-doe", // Sample customer link
      projectName: "Project X",
      startDate: "2024-04-19",
      endDate: "2024-04-30",
      overdueDays: "5",
    },
    // Add more tasks as needed
  ];

  const [showOptions, setShowOptions] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  

  const toggleOptions = (taskId) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
    setSelectedTaskId(taskId);
  };
  



  return (
    <div className="w-full h-[200px] grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3 bg-[#FFFFFF] w-[320px] ">
      <section className="flex items-center m-3 p-3  ">
        <span className="flex items-center  ">
          <img src={group} alt="Logo" className="mr-2 px-2" />
          <h2 className="text-2xl font-medium  font-bold text-[#4BCBEB]">
            Task Manager List
          </h2>
          <hr className="ml-1 mr-4" />
        </span>
        </section>
        <div className="border-b border-[#F6F8FA] w-[10px] bg-black"></div>
        <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
        <div className="m-4 text-lg pl-6 p-3  ">
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA] font-bold text-[#4BCBEB] shadow-md rounded">
          <Link to="/Users">Users</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/Task">Tasks</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/settings">Settings</Link>
        </div>
      </div>
      <div className="col-span-2 ">
      
      <div className="topright col-span-4 flex  bg-white h-24">
        <h1 className="font-bold text-3xl ml-7 mt-8">User's</h1>
        <div className="ml-auto flex items-center space-x-4">
          <IoNotificationsOutline className="text-gray-400 size-[2rem]" />
          <CgProfile className="text-gray-400 size-[2rem]" />
          <div className="flex flex-col ml-4">
            <h1 className="text-black">Usman Shahid</h1>
            <h1>Status 200</h1>
          </div>
        </div>
      </div>

        
        <section className="bg-white p-6 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4 h-[200px]">
        <div className="px:6 font-bold text-black text-2xl">Online User</div>
          <table className="min-w-full ">
            <thead >
              <tr>
                <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 text-[Poppins] font-bold">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                  Project Name
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                  Overdue Days
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.slice(0, 10).map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={task.customerImage}
                        alt={task.customerName}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <Link
                        to={task.customerLink}
                        className="text-sm font-medium text-[#4BCBEB] underline"
                      >
                        {task.customerName}
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.projectName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative inline-block text-left">
                      <span className="ml-1">{task.overdueDays}</span>
                      <span
                        onClick={() => toggleOptions(task.id)}
                        className="inline-flex flex-col items-center justify-center w-4 h-4 bg-white pl-[100px] text-xs text-[#4BCBEB] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {showOptions[task.id] && selectedTaskId === task.id && (
                           <div
                           className="absolute  mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                           role="menu"
                           aria-orientation="horizontal"
                           aria-labelledby="options-menu"
                         >
                           <div className="py-1" role="none">
                             <button
                               className="block px-4  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                               role="menuitem"
                               
                             >
                               Add
                             </button>
                             <button
                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                               role="menuitem"
                              
                             >
                               Delete
                             </button>
                             <button
                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                               role="menuitem"
                              
                             >
                               Edit
                             </button>
                           </div>
                         </div>
                        )}
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </section>
      </div>
    </div>
  );
}

export default Users;
