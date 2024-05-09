// import { Link } from "react-router-dom";
// import React from "react";
// import Menu from "./Menu";
// import Header from "./Header";
// import { useState, useEffect } from "react";
// import axios from 'axios';
// // import Pagination from '@mui/material/Pagination';
// // import Stack from '@mui/material/Stack';
// // import TablePagination from '@mui/material/TablePagination';

// function Users() {
//   const [loading, setLoading]=useState(true);
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedTaskId, setSelectedTaskId] = useState(null);
//   const [userData, setUserData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // Track the current page
  

//   const itemsPerPage = 6; // Number of items per page

//   useEffect(() => {
//     fetchUserData();
// }, [currentPage]);


//   const fetchUserData = async () => {
//     try {
//       setLoading(true);
//       // const tasksResponse = await axios.get("http://localhost:3000/api/tasks");
//       const tasksResponse = await axios.get("http://localhost:3000/api/users");
      
//       setUserData(tasksResponse.data);
//       setLoading(false);

//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
//   };

//   const toggleOptions = (taskId) => {
//     setShowOptions((prevState) => ({
//       ...prevState,
//       [taskId]: !prevState[taskId],
//     }));
//     setSelectedTaskId(taskId);
//   };




//   const indexOfLastTask = currentPage * itemsPerPage;
//   const indexOfFirstTask = indexOfLastTask - itemsPerPage;
//   const currentTasks = userData.slice(indexOfFirstTask, indexOfLastTask);
  
//   return (
//     <div className="flex h-screen">
//       <div className="h-screen w-64">
//         <Menu></Menu>
//       </div>

//       <div className="pl-[2px] w-auto bg-[#F6F8FA]">
//         <Header name="Users"></Header>
//         <div className="mt-11 ml-11 w-[1040px] h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate">
//           <h1 className="m-5 font-bold text-2xl">Online User</h1>
// {loading?(
//   <div className="flex items-center justify-center h-screen">
//   <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-900 flex items-center justify-center"></div>
//   </div>
// ):(
//   <section className="bg-gray-200 p-6 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
//         <table className="min-w-full divide-gray-200 di">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 text-[Poppins] font-bold">
//                 Customer Name
//               </th>
//               <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
//                 Project Name
//               </th>
//               <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
//                 Start Date
//               </th>
//               <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
//                 End Date
//               </th>
//               <th className="px-6 py-3 text-left text-lg font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
//                 Overdue Days
//               </th>
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentTasks.map((user) => (
//               <tr key={user._id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     {/* Displaying customer name */}
//                     <h2 className="text-sm font-medium text-[#4BCBEB] underline">
//                       {user.customerName}
//                     </h2>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {/* Displaying project name */}
//                   {user.projectName}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {/* Displaying start date */}
//                   {user.startDate}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {/* Displaying end date */}
//                   {user.endDate}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {/* Displaying overdue days */}
//                   {user.overdueDays}
//                   <span
//                     onClick={() => toggleOptions(user.id)}
//                     className="inline-flex flex-col items-center justify-center w-4 h-4 bg-white pl-[100px] text-xs text-[#4BCBEB] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     {showOptions[user.id] && selectedTaskId === user.id && (
//                       <div
//                         className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
//                         role="menu"
//                         aria-orientation="vertical"
//                         aria-labelledby="options-menu"
//                       >
//                         <div className="py-1" role="none">
//                           <button
//                             className="block px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
//                             role="menuitem"
//                           >
//                             Add
//                           </button>
//                           <button
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
//                             role="menuitem"
//                           >
//                             Delete
//                           </button>
//                           <button
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
//                             role="menuitem"
//                           >
//                             Edit
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                     <svg
//                       className="h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
      
//       </section>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Users;



import { Link } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import { CircularProgress } from '@mui/material';

function Users() {
  const [showOptions, setShowOptions] = useState(false);
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 6; // Number of items per page
  const toggleOptions = (taskId) => {
        setShowOptions((prevState) => ({
          ...prevState,
          [taskId]: !prevState[taskId],
        }));
        setSelectedTaskId(taskId);
      };
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const tasksResponse = await axios.get("http://localhost:3000/api/tasks");
      // const userResponse = await axios.get("http://localhost:3000/api/users");
      setUserData(tasksResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally{
      setIsLoading(false)
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const calculateDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end - start;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
  };

  return (
    <div className="flex h-auto">
      <div className="h-screen w-64">
        <Menu></Menu>
      </div>

      <div className="pl-[2px] w-10/12 bg-[#F6F8FA] ">
        <Header name="Users"></Header>
        <div className="mt-5 ml-6 w-[1040px] h-auto bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate mb-8 ">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          <div className="ml-4 mb-5 flex space-x-28">
            <h1 className="text-lg font-medium">Customer Name</h1>
            <h1 className="text-lg font-medium">Project Name</h1>
            <h1 className=" text-lg font-medium">Start Date</h1>
            <h1 className=" text-lg font-medium">End Date</h1>
            <h1 className="text-lg font-medium">OverDue day</h1>
          </div>
          {isLoading && (
  <div className="flex justify-center items-center min-h-screen">
    <div className="absolute top-[250px]">
      <CircularProgress />
    </div>
  </div>
)}
          <div className=" h-[450px]">
            {currentItems.map((item, index) => {
              return (
                <div key={index} className="mb-3 py-3 flex border-b space-x-28">
                  <div className="w-32">{item.customeName}</div>
                  <div className="px-11 w-32">{item.title}</div>
                  <div className="px-5 w-30">{formatDate(item.startDate)}</div>
                  <div className="px-3 w-30">{formatDate(item.endDate)}</div>
                  <div className="w-32 gap-x-3 flex justify-end items-center gap-14">
                    {calculateDaysLeft(item.startDate, item.endDate)}
                    <span
                    onClick={() => toggleOptions(user.id)}
                    className="inline-flex flex-col items-center justify-center w-4 h-4 bg-white pl-[100px] text-xs text-[#4BCBEB] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {showOptions[userData.id] && selectedTaskId === userData.id && (
                      <div
                        className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          <button
                            className="block px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
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
                    <svg
                      className="ml-5"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                        fill="#4BCBEB"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
            <div className="mt-9 flex justify-center">
              <Pagination count={Math.ceil(userData.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;