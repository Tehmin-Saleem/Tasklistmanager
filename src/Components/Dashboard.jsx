import { CgProfile } from "react-icons/cg";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import group from "../Images/Group.png";
import { IoNotificationsOutline } from "react-icons/io5";
import Calendar from "react-calendar";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const [selectedOption, setSelectedOption] = useState("Weekly");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);
  const [chartReady, setChartReady] = useState(false);

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
              data: [100, 500, 100, 2000, 200, 5000, 1000],
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 2,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
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
                display: false, // Hide y-axis grid lines
              },
              ticks: {
                beginAtZero: false,
                stepSize: 1000, // Set the step size for y-axis ticks
              },
            },
          },
          plugins: {
            legend: {
              display: false,
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
    <div className=" w-full  grid grid-rows-3 grid-flow-col bg-slate-100">
      <div className="topleft row-span-3 bg-[#FFFFFF] w-[320px] shadow-xl">
        <span className="flex items-center m-3 p-3 ">
          <img src={group} alt="Logo" className="mr-2 px-2" />
          <h2 className="text-2xl font-medium  font-bold text-[#4BCBEB]">
            Task Manager List
          </h2>
          <hr className="ml-1 mr-4" />
        </span>
        <h2 className="text-black text-lg pl-6 pt-5 font-bold">MENU</h2>
        <div className="m-4 text-lg pl-6 p-3 font-bold text-[#4BCBEB] hover:shadow-md rounded-xl ">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3  hover:shadow-md rounded-xl">
          <Link to="/user">Users</Link>
        </div>
        <button
          div
          className="m-4 text-lg pl-6 p-3 pr-5 hover:shadow-md rounded-xl "
        >
          <Link to="/tasks">Tasks</Link>
        </button>
        <div className="m-4 text-lg pl-6 p-3 hover:shadow-md rounded-xl">
          <Link to="/settings">Settings</Link>
        </div>
      </div>

      <div className="toprightdiv bg-[#FFFFFF] w-[1025px] flex m-1  border-gray-100 shadow-lg rounded h-32">
        <h1 className="font-bold text-3xl ml-7 mt-8">Dashboard</h1>
        <div className="ml-auto flex items-center space-x-4 ">
          <IoNotificationsOutline className="text-gray-400 size-[2rem]" />
          <CgProfile className="text-gray-400 size-[2rem]" />
          <div className="flex flex-col ml-4">
            <h1 className="text-black">Usman Shahid</h1>
            <h1>Status 200</h1>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1017px] row-span-2 col-span-2 m-3 ">
        <h1 className="font-bold text-2xl  col-span-4 ml-5 mb-8">Analytics</h1>
        <hr className="col-span-4 ml-5 pr-3" />

        <div className="  grid grid-cols-4 gap-4">
          <div className=" bg-[#F4F2FF]  m-4 rounded-2xl  p-4">
            <h1 className="text-black font-bold    ">Total Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
              90/100
            </h1>
            <div className="mx-3 text-blue-100 mb-7">
              <ProgressBar completed="90" />
            </div>
          </div>
          <div className=" bg-[#E2EFFC]  m-4 rounded-2xl  p-4">
            <h1 className="text-black font-bold    ">Completed Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
              80/100
            </h1>
            <div className="mx-3 text-blue-100 mb-7">
              <ProgressBar completed="90" />
            </div>
          </div>
          <div className="3rddiv bg-[#FBEDD2] m-4 rounded-2xl p-4">
            <h1 className="text-black font-bold mt-4 ml-4">Pending Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-3 mb-3 text-gray-600 mt-3">
              50/100
            </h1>
            <div className="mx-3 mb-7 mt-3">
              <ProgressBar completed="50" />
            </div>
          </div>
          <div className="4thdiv bg-[#E0F6F4] m-4 rounded-2xl p-4">
            <h1 className="text-black font-bold mt-4 ml-4">Decline Tasks</h1>
            <h1 className="text-lg font-bold mx-4 pb-3 mb-3 text-gray-600 mt-3">
              10/100
            </h1>
            <div className="mx-3 mb-7 mt-3">
              <ProgressBar completed="10" />
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

    // </div>
  );
}

export default Dashboard;
