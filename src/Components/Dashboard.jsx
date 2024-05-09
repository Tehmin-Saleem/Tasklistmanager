import Menu from "./Menu";
import Header from "./Header";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

import Calendar from "react-calendar";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-calendar/dist/Calendar.css";
// import { Link } from "react-router-dom";
// import Notifications from "./Notifications";

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
    <div className="flex h-screen">
    <div className="h-screen  ">
      <Menu></Menu>
    </div>

    <div className="pl-[2px] w-[1000px] md:w-10/12 bg-[#F6F8FA]">
      <Header  name="Dashboard" ></Header>
      <div className="mt-7 ml-7  w-auto md:w-[1060px] h-auto md:h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md">
        <div className="flex h-[60px] w-auto mr-900 ">
          <p className="mt-[25.46px] pl-14 font-bold text-2xl text-black">
            Analytics
          </p>
          <svg
            className="ml-[700px] mt-[25.46px]"
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
        </div>

        <svg
          className="ml-[55px] mt-2 bg-[#F1F5F9] pr-8"
          width="990"
          height="2"
          viewBox="0 0 974 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <hr className="col-span-4 ml-[100px] pr-[700px]" />
        <div className="ml-14 mr-14">
            <div className="ml-11 py-7 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="  m-4 rounded-2xl  p-4 bg-[#F4F2FF] ">
            <h1 className="text-black font-bold">Total Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
              {tasks.length}/100
            </h1>
            <div className="mx-3 text-blue-100 mb-7">
              <ProgressBar
                completed={(tasks.length / 100) * 100}
                bgColor="#4BCBEB"
              />
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
    </div>
    </div>
    
  );
}

export default Dashboard;
