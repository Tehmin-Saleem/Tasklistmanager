import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // Sample image URL
      startDate: "2024-04-19",
      endDate: "2024-04-30",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // dummy image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // dummy image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // dummy image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // dummy image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // dummy image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
  
  ];

  const [showOptions, setShowOptions] = useState({});
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const toggleOptions = (taskId) => {
  setShowOptions((prevOptions) => ({
    ...prevOptions,
    [taskId]: !prevOptions[taskId],
  }));
  setSelectedTaskId(taskId);
};
  
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleEditClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowEditForm(true); 
  };
  
  const handleAddClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowForm(true);
  };
  const handleDeleteClick = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
return (
    <div className=" w-full h-full grid grid-rows-3 grid-flow-col gap-4">
    
      
      
      
      <div class="row-span-3 bg-[#FFFFFF] w-[320px] ">
        <section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
          
          <span>
            <h2 className="text-1xl font-bold text-[#4BCBEB]">
              Task Manager List
            </h2>
          </span>
        </section>
        <div class="border-b border-[#F6F8FA] w-[10px]"></div>
        <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
      
        <div className="m-4 text-lg pl-6 p-3  ">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/Users">Users</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA] font-bold text-[#4BCBEB] shadow-md rounded">
          <Link to="/tasks">Tasks</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/settings">Settings</Link>
        </div>

      </div>



     
     
     
      <div className="col-span-2">
   
            <div className="bg-[#FFFFFF] w-[1155px]  flex">
                <div className=" text-3xl p-6 font-bold right">Task</div>
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
            
            
       

        <section className="bg-[#ECE6E6] row-span-2 col-span-2">
         <div className="flex flex-nowrap">
            <div className="p-8 m-3">
              <h2 className=" text-xl font-bold">Start date: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            <div className="p-8 m-3">
              <h2 className=" text-xl font-bold">End date: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            {showForm && <AddTask onClose={toggleForm} />}
            {showEditForm && <EditTask onClose={() => setShowEditForm(false)} />}
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg ml-[300px] h-[34px] w-[5px] m-[70px] text-center p-2">
              <button onClick={toggleForm}>Add Task</button>
            </div>
          </div>
          <div className="flex ">
            <div className="pl-12 m-3 flex-1 ">
              <h2 className=" text-xl font-bold ">Enter Title: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg mr-[800px] h-[34px] w-[90px]  text-center p-2 mt-12">
              <button>Search</button>
            </div>
          </div>
         
         
         
          <div className="bg-gray-200 p-2 grid  grid-cols-3 gap-4">
            
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-lg p-4 shadow-md relative"
              >
                <h1 className="text-lg font-bold">Title</h1>
                <h3>{task.title}</h3>
                <h1 className="text-lg font-bold">Description</h1>
                <p className="text-gray-500">{task.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Attachment:</h4>
                  <img
                    src={task.image}
                    alt="Attachment"
                    className="mt-2 w-full"
                  />
                  <div className="flex space-x-8">
                    <p className=" text-sm ">Start Date: {task.startDate}</p>
                    <p className="text-sm ">End Date: {task.endDate}</p>
                  </div>
                </div>
                <span
                  className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-2"
                  onClick={() => toggleOptions(task.id)}
                >
                  <FontAwesomeIcon icon={faEllipsisV} />
                  {showOptions[task.id] && selectedTaskId === task.id && (
                    <div
                      className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                          role="menuitem"
                          onClick={() => handleAddClick(task.id)}
                        >
                          Add
                        </button>
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                          role="menuitem"
                          onClick={() => handleDeleteClick(task.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                          role="menuitem"
                          onClick={() => handleEditClick(task.id)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  )}
                </span>
              </div>
            ))}




                </div>
            </section>
        </div>
        </div>
      
  );
}
export default Tasks;
