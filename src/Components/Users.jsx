import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            customerLink: "/john-doe", // Sample customer link
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
        },
        // Add more tasks as needed
    ];

    const [showOptions, setShowOptions] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 10;

    // const toggleOptions = (taskId) => {
    //     setShowOptions(!showOptions);
    //     setSelectedTaskId(taskId);
    // };
    // const [currentPage, setCurrentPage] = useState(1);
    // const tasksPerPage = 10;

    const toggleOptions = (taskId) => {
        setShowOptions((prevState) => ({
            ...prevState,
            [taskId]: !prevState[taskId]
        }));
        setSelectedTaskId(taskId);
    };
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full h-full grid grid-rows-3 grid-flow-col gap-4">
            {/* Sidebar */}
            <div className="row-span-3 bg-[#FFFFFF] w-[320px] ">
                <section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
                    <span>
                        <h2 className="text-1xl font-bold text-[#4BCBEB]">
                            Task Manager List
                        </h2>
                    </span>
                </section>
                <div className="border-b border-[#F6F8FA] w-[10px]"></div>
                <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
                <div className="m-4 text-lg pl-6 p-3  ">
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA] font-bold text-[#4BCBEB] shadow-md rounded">
                    <Link to="/Users">Users</Link>
                </div>
                <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
                    <Link to="/tasks">Tasks</Link>
                </div>
                <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
            <div className="col-span-2">
                {/* Dashboard */}
                <div className="bg-[#FFFFFF] w-[1155px]  flex">
                    <div className="text-3xl p-6 font-bold right">User's</div>
                    <div className="left p-6 pl-[700px] size-max">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="right p-6 pl-[5px] ">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="p-5 pl-[3px] ">
                        <Link to="/usmanshahid">Usman Shahid</Link>
                        <p>Status 200</p>
                    </div>
                    <div className="p-6 pl-[2px] ">
                        <FontAwesomeIcon icon={faGreaterThan} />
                    </div>
                </div>
                {/* Bottom part */}
                <div className="px:6 font-bold text-black ">Online User</div>
                <section className="bg-gray-200 p-6 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                    
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 text-[Poppins] font-bold">Customer Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">Project Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">Start Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">End Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">Overdue Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tasks.slice(0, 10).map((task) => (
                                <tr key={task.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src={task.customerImage} alt={task.customerName} className="w-8 h-8 rounded-full mr-2" />
                                            <Link to={task.customerLink} className="text-sm font-medium text-[#4BCBEB] underline">{task.customerName}</Link>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.projectName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.startDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.endDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    
                                        <div className="relative inline-block text-left">
                                            {/* <span onClick={() => toggleOptions(task.id)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                {showOptions && selectedTaskId === task.id && (
                                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                        <div className="py-1" role="none">
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">Add</button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">Delete</button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">Delete</button>
                                                        </div>
                                                    </div>
                                                )}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" clipRule="evenodd" />
                                                </svg>
                                            </span> */}
                                            <span className="ml-1">{task.overdueDate}</span>
                                            <span onClick={() => toggleOptions(task.id)} className="inline-flex flex-col items-center justify-center w-4 h-4 bg-white text-xs text-[#4BCBEB] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">


                                                {showOptions[task.id] && selectedTaskId === task.id &&(
                                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                        <div className="py-1" role="none">
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right" role="menuitem">Add</button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right" role="menuitem">Delete</button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right" role="menuitem">Delete</button>
                                                        </div>
                                                    </div>
                                                )}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={indexOfLastTask >= tasks.length}
                            className="bg-[#4BCBEB] text-white font-semibold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                        </div>
                </section>
            </div>
        </div>
    );
}

export default Users;
