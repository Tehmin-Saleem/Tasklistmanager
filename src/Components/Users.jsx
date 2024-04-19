import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import group from '../Images/Group.png';
import { IoNotificationsOutline } from "react-icons/io5";
const Users = () => {
  const userList = [
    {
      id: 1,
      customerName: 'John Doe',
      projectName: 'Project X',
      taskStartDate: '19-04-2024',
      taskEndDate: '19-04-2024',
      overdueDays: 2,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      projectName: 'Project Y',
      taskStartDate: '19-04-2024',
      taskEndDate: '19-04-2024',
      overdueDays: 0,
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      projectName: 'Project Z',
      taskStartDate: '19-04-2024',
      taskEndDate: '19-04-2024',
      overdueDays: 1,
    },
    {
        id: 4,
        customerName: 'Alice Johnson',
        projectName: 'Project Z',
        taskStartDate: '19-04-2024',
        taskEndDate: '19-04-2024',
        overdueDays: 1,
      },
      {
        id: 5,
        customerName: 'Alice Johnson',
        projectName: 'Project Z',
        taskStartDate: '19-04-2024',
        taskEndDate: '19-04-2024',
        overdueDays: 1,
      },
      {
        id: 6,
        customerName: 'Alice Johnson',
        projectName: 'Project Z',
        taskStartDate: '19-04-2024',
        taskEndDate: '19-04-2024',
        overdueDays: 1,
      },
      {
        id: 7,
        customerName: 'Alice Johnson',
        projectName: 'Project Z',
        taskStartDate: '19-04-2024',
        taskEndDate: '19-04-2024',
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
          <h1 className="font-bold text-3xl ml-1 mt-8">Users</h1>
          <div className="ml-auto flex items-center space-x-4">
            <IoNotificationsOutline className="text-gray-400 size-[2rem]" />
            <CgProfile className="text-gray-400 size-[2rem]" />
            <div className="flex flex-col ml-4">
              <h1 className="text-black">Usman Shahid</h1>
              <h1>Status 200</h1>
            </div>
          </div>
        </div>
      <div className="center row-span-2 col-span-2 pr-[400px] col-span-3 bg-white flex flex-col border rounded">
 <h1 className='font-bold ml-[50px] text-lg'>Online Users</h1>
  <div className="grid  grid-cols-5  ">
    <div>
      <p className="font-medium ml-[50px]">Customer Name</p>
    </div>
    <div>
      <p className="font-medium ml-[50px]">Project Name</p>
    </div>
    <div>
      <p className="font-medium ml-[50px]">Task Start Date</p>
    </div>
    <div>
      <p className="font-medium ml-[50px]">Task End Date:</p>
    </div>
    <div className="">
      <p className="font-medium ml-[50px]">Overdue Days</p>
    </div>
  </div>


  {userList.map((task) => (
  <div key={task.id} className="grid grid-cols-5 p-2 ml-[70px] border-b ">
    <div> <a className="text-blue-500 underline underline-offset-2" href='#'>{task.customerName}</a></div>
    <div>{task.projectName}</div>
    <div>{task.taskStartDate}</div>
    <div>{task.taskEndDate}</div>
    <div className="relative">
      <div>{task.overdueDays} Day's</div>
      <div className="relative flex items-center" onClick={() => handleDropdown(task.id)}>
        {renderDropdown(task.id)}
        <span className="absolute top-0 pb-7 right-0 cursor-pointer" style={{ transform: 'translate(-100%, -50%)', marginTop: 'auto', marginBottom: 'auto' }}>...</span>
      </div>
    </div>
  </div>
))}

</div>



    </div>
  );
};

export default Users;
