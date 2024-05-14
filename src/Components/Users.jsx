import { Link } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import { CircularProgress } from "@mui/material";

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

      setUserData(tasksResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
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
        <Header headername="Users"></Header>
        <div className="mt-5 ml-6 w-90% h-auto bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate mb-8 ">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          <div className="ml-4 mb-5 flex space-x-28">
            <h1 className="text-lg font-medium w-1/5">Customer Name</h1>
            {/* <h1 className="text-lg font-medium">Project Name</h1> */}
            <h1 className=" text-lg font-medium w-1/5">Start Date</h1>
            <h1 className=" text-lg font-medium w-1/5">End Date</h1>
            <h1 className="text-lg font-medium w-1/5 ">OverDue Days</h1>
          </div>
          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[250px]">
                <CircularProgress />
              </div>
            </div>
          )}
          <div className=" h-[450px] ">
            {currentItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mb-3 py-3 flex border-b space-x-20 ml-8"
                >
                  <div className="w-1/5">{item.title}</div>
                  {/* <div className="px-11 w-32">{item.projectName}</div> */}
                  <div className="w-1/5">{formatDate(item.startDate)}</div>
                  <div className="w-1/5">{formatDate(item.endDate)}</div>
                  <div className="w-1/5 pl-[50px]">
                    {calculateDaysLeft(item.startDate, item.endDate)}
                    <span className="ml-2">Day's</span>
                  </div>
                </div>
              );
            })}
            <div className="mt-9 flex justify-center">
              <Pagination
                count={Math.ceil(userData.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
