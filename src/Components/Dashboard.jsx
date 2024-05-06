
import { CgProfile } from "react-icons/cg";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import group from "../Images/Group.png";
import { IoNotificationsOutline } from "react-icons/io5";
import Calendar from "react-calendar";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";

function Dashboard() {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  const showNotifications = () => {
    setShowNotification(true);
  };

  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("Weekly");
  const onChange = (newDate) => {
    setDate(newDate);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);
  const [chartReady, setChartReady] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tasks"); // Assuming your backend route is '/api/tasks'
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const updateProgressBar = (data) => {
    // Calculate progress for each type of task
    const totalTasks = data.length;
    const completedTasks = data.filter(
      (task) => task.status === "Completed"
    ).length;
    const pendingTasks = data.filter(
      (task) => task.status === "Pending"
    ).length;
    const declineTasks = data.filter(
      (task) => task.status === "Decline"
    ).length;

    // Update progress bar values
    document.getElementById("totalTasksBar").style.width = `${
      (totalTasks / 100) * 100
    }%`;
    document.getElementById("completedTasksBar").style.width = `${
      (completedTasks / 100) * 100
    }%`;
    document.getElementById("pendingTasksBar").style.width = `${
      (pendingTasks / 100) * 100
    }%`;
    document.getElementById("declineTasksBar").style.width = `${
      (declineTasks / 100) * 100
    }%`;
  };
  const updateChartData = (data) => {
    if (!myChart || !data) return; // Check if chart or data is not available

    const taskCounts = {
      Completed: data.filter((task) => task.status === "Completed").length,
      Pending: data.filter((task) => task.status === "Pending").length,
      Decline: data.filter((task) => task.status === "Decline").length,
    };

    // Update chart data
    myChart.data.labels = Object.keys(taskCounts);
    myChart.data.datasets[0].data = Object.values(taskCounts);

    myChart.update(); // Update the chart
  };
  useEffect(() => {
    let newChart = null;

    if (chartRef && chartRef.current) {
      if (myChart) {
        myChart.destroy(); // Destroy existing chart before creating a new one
      }

      const ctx = chartRef.current.getContext("2d");
      newChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              data: [100, 500, 100, 2000, 200, 5000, 1000], // Dummy data, replace with actual data
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 2,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
              },
              grid: {
                display: false, // Hide x-axis grid lines
              },
            },
            y: {
              display: true,
              title: {
                display: true,
              },
              grid: {
                display: true, // Hide y-axis grid lines
              },
              ticks: {
                beginAtZero: false,
                stepSize: 1000, // Set the step size for y-axis ticks
              },
            },
          },
          elements: {
            line: {
              tension: 0.5, // Adjust the tension for smoother curves
            },
          },
          responsive: true,
          onResize: (chart) => {
            if (
              chart.scales &&
              chart.scales["x"] &&
              chart.scales["x"].maxWidth
            ) {
              setChartReady(true);
            }
          },
        },
      });
    }

    setMyChart(newChart);

    return () => {
      // Cleanup function to destroy the chart when the component unmounts
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);

  return (
    <div className=" w-full grid grid-rows-3 grid-flow-col bg-slate-100">
      <div className="topleft row-span-3 bg-[#FFFFFF] w-[320px] shadow-xl">
        <span className="flex items-center m-3 p-3 ">
          <img src={group} alt="Logo" className="mr-2 px-2" />
          <h2 className="text-2xl font-medium  font-bold text-[#4BCBEB]">
            Task Manager List
          </h2>
          <hr className="ml-1 mr-4" />
        </span>
        <h2 className="text-black text-lg pl-6 pt-5 font-bold">MENU</h2>
        <div className="mt-8 ml-4 py-3 px-3 h-14 w-[60] mr-8 bg-white  flex  hover:shadow-md rounded-xl">
          <svg
            className=""
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25008 3.66675H4.58341C4.07715 3.66675 3.66675 4.07715 3.66675 4.58341V8.25008C3.66675 8.75634 4.07715 9.16675 4.58341 9.16675H8.25008C8.75634 9.16675 9.16675 8.75634 9.16675 8.25008V4.58341C9.16675 4.07715 8.75634 3.66675 8.25008 3.66675Z"
              fill="#4BCBEB"
            />
            <path
              d="M17.4167 3.66675H13.7501C13.2438 3.66675 12.8334 4.07715 12.8334 4.58341V8.25008C12.8334 8.75634 13.2438 9.16675 13.7501 9.16675H17.4167C17.923 9.16675 18.3334 8.75634 18.3334 8.25008V4.58341C18.3334 4.07715 17.923 3.66675 17.4167 3.66675Z"
              fill="#4BCBEB"
            />
            <path
              d="M8.25008 12.8334H4.58341C4.07715 12.8334 3.66675 13.2438 3.66675 13.7501V17.4167C3.66675 17.923 4.07715 18.3334 4.58341 18.3334H8.25008C8.75634 18.3334 9.16675 17.923 9.16675 17.4167V13.7501C9.16675 13.2438 8.75634 12.8334 8.25008 12.8334Z"
              fill="#4BCBEB"
            />
            <path
              d="M17.4167 12.8334H13.7501C13.2438 12.8334 12.8334 13.2438 12.8334 13.7501V17.4167C12.8334 17.923 13.2438 18.3334 13.7501 18.3334H17.4167C17.923 18.3334 18.3334 17.923 18.3334 17.4167V13.7501C18.3334 13.2438 17.923 12.8334 17.4167 12.8334Z"
              fill="#4BCBEB"
            />
            <path
              d="M8.25008 3.66675H4.58341C4.07715 3.66675 3.66675 4.07715 3.66675 4.58341V8.25008C3.66675 8.75634 4.07715 9.16675 4.58341 9.16675H8.25008C8.75634 9.16675 9.16675 8.75634 9.16675 8.25008V4.58341C9.16675 4.07715 8.75634 3.66675 8.25008 3.66675Z"
              stroke="#4BCBEB"
            />
            <path
              d="M17.4167 3.66675H13.7501C13.2438 3.66675 12.8334 4.07715 12.8334 4.58341V8.25008C12.8334 8.75634 13.2438 9.16675 13.7501 9.16675H17.4167C17.923 9.16675 18.3334 8.75634 18.3334 8.25008V4.58341C18.3334 4.07715 17.923 3.66675 17.4167 3.66675Z"
              stroke="#4BCBEB"
            />
            <path
              d="M8.25008 12.8334H4.58341C4.07715 12.8334 3.66675 13.2438 3.66675 13.7501V17.4167C3.66675 17.923 4.07715 18.3334 4.58341 18.3334H8.25008C8.75634 18.3334 9.16675 17.923 9.16675 17.4167V13.7501C9.16675 13.2438 8.75634 12.8334 8.25008 12.8334Z"
              stroke="#4BCBEB"
            />
            <path
              d="M17.4167 12.8334H13.7501C13.2438 12.8334 12.8334 13.2438 12.8334 13.7501V17.4167C12.8334 17.923 13.2438 18.3334 13.7501 18.3334H17.4167C17.923 18.3334 18.3334 17.923 18.3334 17.4167V13.7501C18.3334 13.2438 17.923 12.8334 17.4167 12.8334Z"
              stroke="#4BCBEB"
            />
          </svg>
          <Link to="/dashboard" className="ml-2 font-bold text-[#4BCBEB]">
            Dashboard
          </Link>
        </div>
        <div className="mt-8 ml-4 py-3 px-3 h-14 w-[60] mr-8 bg-white  flex  hover:shadow-md rounded-xl">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3167 10.201C15.7244 9.17434 16.6411 7.51283 16.6411 5.64102C16.6411 2.53056 14.1105 0 11.0001 0C7.88959 0 5.35904 2.53056 5.35904 5.64102C5.35904 7.51283 6.27569 9.17434 7.68343 10.201C4.18405 11.5401 1.69238 14.933 1.69238 18.8974C1.69238 20.6082 3.08418 22 4.79494 22H17.2052C18.9159 22 20.3077 20.6082 20.3077 18.8974C20.3077 14.933 17.8161 11.5401 14.3167 10.201ZM7.05136 5.64102C7.05136 3.46371 8.82275 1.69232 11.0001 1.69232C13.1774 1.69232 14.9488 3.46371 14.9488 5.64102C14.9488 7.81834 13.1774 9.58977 11.0001 9.58977C8.82275 9.58977 7.05136 7.81834 7.05136 5.64102ZM17.2052 20.3077H4.79494C4.01734 20.3077 3.38471 19.675 3.38471 18.8974C3.38471 14.6982 6.8009 11.282 11.0001 11.282C15.1993 11.282 18.6155 14.6982 18.6155 18.8974C18.6155 19.675 17.9828 20.3077 17.2052 20.3077Z"
              fill="#64748B"
            />
          </svg>
          <Link to="/users" className="ml-2">
            Users
          </Link>
        </div>
        <div className="mt-8 ml-4 py-3 px-3 h-14 w-[60] mr-8 bg-white  flex  hover:shadow-md rounded-xl">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1515 8.81813H11.339C10.9632 8.81813 10.6515 8.50646 10.6515 8.13063C10.6515 7.7548 10.9632 7.44313 11.339 7.44313H16.1515C16.3339 7.44313 16.5087 7.51556 16.6377 7.6445C16.7666 7.77343 16.839 7.9483 16.839 8.13063C16.839 8.31297 16.7666 8.48784 16.6377 8.61677C16.5087 8.7457 16.3339 8.81813 16.1515 8.81813ZM6.52652 9.5148C6.35235 9.5148 6.17818 9.45063 6.04068 9.31313L5.35318 8.62563C5.08735 8.3598 5.08735 7.9198 5.35318 7.65397C5.61902 7.38813 6.05902 7.38813 6.32485 7.65397L6.52652 7.85563L8.10318 6.27896C8.36902 6.01313 8.80902 6.01313 9.07485 6.27896C9.34068 6.5448 9.34068 6.9848 9.07485 7.25063L7.01235 9.31313C6.88354 9.4421 6.70879 9.51464 6.52652 9.5148ZM16.1515 15.2348H11.339C10.9632 15.2348 10.6515 14.9231 10.6515 14.5473C10.6515 14.1715 10.9632 13.8598 11.339 13.8598H16.1515C16.3339 13.8598 16.5087 13.9322 16.6377 14.0612C16.7666 14.1901 16.839 14.365 16.839 14.5473C16.839 14.7296 16.7666 14.9045 16.6377 15.0334C16.5087 15.1624 16.3339 15.2348 16.1515 15.2348ZM6.52652 15.9315C6.35235 15.9315 6.17818 15.8673 6.04068 15.7298L5.35318 15.0423C5.08735 14.7765 5.08735 14.3365 5.35318 14.0706C5.61902 13.8048 6.05902 13.8048 6.32485 14.0706L6.52652 14.2723L8.10318 12.6956C8.36902 12.4298 8.80902 12.4298 9.07485 12.6956C9.34068 12.9615 9.34068 13.4015 9.07485 13.6673L7.01235 15.7298C6.88354 15.8588 6.70879 15.9313 6.52652 15.9315Z"
              fill="#64748B"
            />
            <path
              d="M13.7499 20.8541H8.24992C3.27242 20.8541 1.14575 18.7274 1.14575 13.7499V8.24992C1.14575 3.27242 3.27242 1.14575 8.24992 1.14575H13.7499C18.7274 1.14575 20.8541 3.27242 20.8541 8.24992V13.7499C20.8541 18.7274 18.7274 20.8541 13.7499 20.8541ZM8.24992 2.52075C4.02409 2.52075 2.52075 4.02409 2.52075 8.24992V13.7499C2.52075 17.9758 4.02409 19.4791 8.24992 19.4791H13.7499C17.9758 19.4791 19.4791 17.9758 19.4791 13.7499V8.24992C19.4791 4.02409 17.9758 2.52075 13.7499 2.52075H8.24992Z"
              fill="#64748B"
            />
          </svg>
          <Link to="/task" className="ml-2 ">
            Tasks
          </Link>
        </div>

        <div className="mt-8 ml-4 py-3 px-3 h-14 w-[60] mr-8 bg-white  flex  hover:shadow-md rounded-xl">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_21_1581)">
              <path
                d="M20.7928 8.61117L19.0694 8.39208C18.9289 7.9592 18.7545 7.53806 18.5478 7.13258L19.6121 5.76217C19.82 5.49905 19.9236 5.16848 19.903 4.83375C19.8823 4.49902 19.7389 4.18367 19.5003 3.94808L18.0565 2.50433C17.8208 2.26421 17.5048 2.11954 17.169 2.09805C16.8332 2.07657 16.5013 2.17979 16.2369 2.38792L14.8683 3.45217C14.4626 3.24533 14.0412 3.07092 13.6079 2.93058L13.3888 1.21C13.3489 0.876667 13.1883 0.569494 12.9373 0.346544C12.6863 0.123593 12.3624 0.000310846 12.0267 0L9.97333 0C9.27942 0 8.69367 0.51975 8.61117 1.20725L8.39208 2.93058C7.9587 3.07052 7.53721 3.24494 7.13167 3.45217L5.76217 2.38792C5.49889 2.18036 5.1684 2.07704 4.83378 2.09767C4.49917 2.11829 4.18387 2.26143 3.94808 2.49975L2.50433 3.94258C2.26396 4.17833 2.11913 4.49455 2.09764 4.83055C2.07616 5.16655 2.17953 5.49864 2.38792 5.76308L3.45217 7.13258C3.24511 7.53789 3.07069 7.95905 2.93058 8.39208L1.21 8.61117C0.51975 8.69367 0 9.27942 0 9.97333V12.0267C0 12.7206 0.51975 13.3063 1.20725 13.3888L2.93058 13.6079C3.07267 14.0452 3.24775 14.4668 3.45217 14.8674L2.38792 16.2378C2.17998 16.5009 2.07641 16.8315 2.09704 17.1663C2.11768 17.501 2.26107 17.8163 2.49975 18.0519L3.9435 19.4957C4.17952 19.7353 4.49557 19.8795 4.83124 19.9008C5.16691 19.9222 5.49866 19.819 5.76308 19.6112L7.13258 18.5469C7.53317 18.7523 7.95483 18.9273 8.39208 19.0685L8.61117 20.7882C8.69367 21.4802 9.27942 22 9.97333 22H12.0267C12.7206 22 13.3063 21.4803 13.3888 20.7928L13.6079 19.0694C14.0408 18.9289 14.4619 18.7545 14.8674 18.5478L16.2378 19.6121C16.7924 20.0429 17.5753 19.9925 18.0519 19.5003L19.4957 18.0565C19.7358 17.8208 19.8805 17.5048 19.9019 17.169C19.9234 16.8332 19.8202 16.5013 19.6121 16.2369L18.5478 14.8674C18.7532 14.4668 18.9282 14.0452 19.0694 13.6079L20.7891 13.3888C21.1224 13.3489 21.4296 13.1883 21.6525 12.9373C21.8755 12.6863 21.9988 12.3624 21.9991 12.0267V9.97333C21.9993 9.63807 21.8766 9.31435 21.6544 9.06336C21.4321 8.81237 21.1256 8.65151 20.7928 8.61117ZM11 15.5833C8.47275 15.5833 6.41667 13.5273 6.41667 11C6.41667 8.47275 8.47275 6.41667 11 6.41667C13.5273 6.41667 15.5833 8.47275 15.5833 11C15.5833 13.5273 13.5273 15.5833 11 15.5833Z"
                fill="#64748B"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_1581">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Link to="/settings" className="ml-2 ">
            Settings
          </Link>
        </div>
      </div>

      <div className="toprightdiv bg-[#FFFFFF] w-[1025px] flex m-1  border-gray-100 hover: shadow-lg rounded h-32">
        <h1 className="font-bold text-3xl ml-7 mt-8">Dashboard</h1>
        <div className="ml-auto flex items-center space-x-4 ">
          <IoNotificationsOutline
            className="text-gray-400 size-[2rem]"
            onClick={showNotifications} // Change to showNotifications function
          />

          {showNotification && (
            <div ref={notificationRef}>
              <Notifications />
            </div>
          )}
          <CgProfile className="text-gray-400 size-[2rem]" />
          <div className="flex flex-col ml-4">
            <h1 className="text-black">Usman Shahid</h1>
            <h1>Status 200</h1>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1017px] row-span-2 col-span-2 m-3 ">
        <h1 className="font-bold text-2xl  col-span-4 ml-5 mb-8">Analytics</h1>
        <span>
          <svg
            className="ml-[940px] mb-8"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2.25H2L8 9.345V14.25L11 15.75V9.345L17 2.25Z"
              stroke="#64748B"
            />
          </svg>
        </span>

        <hr className="col-span-4 ml-5 pr-3" />

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#F4F2FF]  m-4 rounded-2xl  p-4">
            <h1 className="text-black font-bold">Total Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
              {tasks.length}/100
            </h1>
            <div className="mx-3 text-blue-100 mb-7">
            <ProgressBar completed={(tasks.length / 100) * 100} bgColor="#4BCBEB" />
            </div>
          </div>
          <div className="bg-[#E2EFFC]  m-4 rounded-2xl  p-4">
            <h1 className="text-black font-bold">Completed Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
              {tasks.filter((task) => task.status === "Completed").length}/100
            </h1>
            <div className="mx-3 text-blue-100 mb-7">
              <ProgressBar
                completed={
                  (tasks.filter((task) => task.status === "Completed").length /
                    100) *
                  100
                }
                bgColor="#5CB85C"
              />
            </div>
          </div>
          <div className="3rddiv bg-[#FBEDD2] m-4 rounded-2xl p-4">
            <h1 className="text-black font-bold mb-4">Pending Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-[20px] mb-3 text-gray-600">
              {tasks.filter((task) => task.status === "Pending").length}/100
            </h1>
            <div className="mx-3 mb-7">
              <ProgressBar
                completed={
                  (tasks.filter((task) => task.status === "Pending").length /
                    100) *
                  100
                }
                bgColor="#F0AD4E"
              />
            </div>
          </div>
          <div className="4thdiv bg-[#E0F6F4] m-4 rounded-2xl p-4">
            <h1 className="text-black font-bold mb-4">Decline Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-[30px]  text-gray-600">
              {tasks.filter((task) => task.status === "Decline").length}/100
            </h1>
            <div className="mx-3 mb-7">
              <ProgressBar
                completed={
                  (tasks.filter((task) => task.status === "Decline").length /
                    100) *
                  100
                }
                bgColor="#D9534F"
                className="rounded-none"
              />
            </div>
          </div>
        </div>

        {/* <div className=" bg-slate-300 grid grid-cols-2  col-2 row-1 mt-[100px] "> */}
        <div className="flex-1 bg-white p-4 row-span-1 col-span-2  ">
          <div className=" ">
            <h1 className="text-2xl font-bold p-6 m-1">Total Task Ratio </h1>
            <span className="dropdownbutton text-[#4BCBEB] pl-[350px] font-bold mb-8">
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
              </select>
            </span>
          </div>
        </div>

        <div className="bg-white pb-8 w-[1017px] flex">
          <div className="flex-1 pr-8">
            <canvas ref={chartRef} />
          </div>
          <div>
            <Calendar onChange={onChange} value={date} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
