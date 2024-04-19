import React, { useState } from 'react';
import group from"../Images/Group.png"
const Users = () => {
  const userList = [
    {
      id: 1,
      customerName: 'John Doe',
      projectName: 'Project X',
      taskStartDate: '2024-04-19',
      taskEndDate: '2024-04-30',
      overdueDays: 2,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      projectName: 'Project Y',
      taskStartDate: '2024-04-15',
      taskEndDate: '2024-04-25',
      overdueDays: 0,
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      projectName: 'Project Z',
      taskStartDate: '2024-04-10',
      taskEndDate: '2024-04-20',
      overdueDays: 1,
    },
  ];

  const [dropdownId, setDropdownId] = useState(null);

  const handleDropdown = (id) => {
    if (dropdownId === id) {
      setDropdownId(null);
    } else {
      setDropdownId(id);
    }
  };

  const renderDropdown = (id) => {
    if (dropdownId === id) {
      return (
        <div className="absolute bg-white border border-gray-300 p-2 right-0 -ml-16">
          <p className="cursor-pointer hover:bg-gray-200 py-1 px-2" onClick={() => console.log('View clicked')}>View</p>
          <p className="cursor-pointer hover:bg-gray-200 py-1 px-2" onClick={() => console.log('Edit clicked')}>Edit</p>
          <p className="cursor-pointer hover:bg-gray-200 py-1 px-2" onClick={() => console.log('Delete clicked')}>Delete</p>
        </div>
      );
    }
    return null;
  };

  return (
    
     <div className="grid grid-rows-3 grid-flow-col bg-gray-100">
      <div className="topleft w-[50%] row-span-3 bg-black h-full pl-8 mr-[200px]">
        <span className="">
          <img src={group} alt="Logo" className="mr-2 pt-4" />
          <h2 className="text-2xl font-medium ml-[30px] font-bold text-[#4BCBEB]">
            Task Manager List
          </h2>
          <hr className="ml-1 mr-[105px]" />
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
      <h2>Online Users</h2>
      <div className="bg-white text-black relative">
        {userList.map((task) => (
          <div key={task.id} className="grid grid-cols-5">
            <div>
              <p className="font-bold">Customer Name:</p>
              <p>{task.customerName}</p>
            </div>
            <div>
              <p className="font-bold">Project Name:</p>
              <p>{task.projectName}</p>
            </div>
            <div>
              <p className="font-bold">Task Start Date:</p>
              <p>{task.taskStartDate}</p>
            </div>
            <div>
              <p className="font-bold">Task End Date:</p>
              <p>{task.taskEndDate}</p>
            </div>
            <div className="relative">
              <p className="font-bold">Overdue Days:</p>
              <div className="cursor-pointer relative" onClick={() => handleDropdown(task.id)}>
                <p>{task.overdueDays}</p>
                <span className="absolute top-0 right-0 cursor-pointer" style={{ transform: 'translate(-100%, -50%)' }}>...</span>
                {renderDropdown(task.id)}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default Users;
