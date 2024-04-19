import { CgProfile } from "react-icons/cg";
import React from "react";
import  { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import group from "../Images/Group.png";
import { IoNotificationsOutline } from "react-icons/io5";
import Calendar from 'react-calendar';
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-calendar/dist/Calendar.css';
function Dashboard() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const [selectedOption, setSelectedOption] = useState('Weekly');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // You can add logic here to handle the selected option
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

      const ctx = chartRef.current.getContext('2d');
      newChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [{
            data: [100, 500, 100, 2000, 200, 5000, 1000],
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
          }],
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
              display: false, // Hide legend
            },
          },
          responsive: true,
          onResize: (chart) => {
            // Set chart ready when resized
            if (chart.scales && chart.scales['x'] && chart.scales['x'].maxWidth) {
              setChartReady(true);
            }
          },
        },
      });
    }

    setMyChart(newChart); // Set the new chart instance

    return () => {
      // Cleanup function to destroy the chart when the component unmounts
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);
  return (
    <div className="grid grid-rows-3 grid-flow-col bg-gray-100">
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
          <h1 className="font-bold text-3xl ml-1 mt-8">Dashboard</h1>
          <div className="ml-auto flex items-center space-x-4">
            <IoNotificationsOutline className="text-gray-400 size-[2rem]" />
            <CgProfile className="text-gray-400 size-[2rem]" />
            <div className="flex flex-col ml-4">
              <h1 className="text-black">Usman Shahid</h1>
              <h1>Status 200</h1>
            </div>
          </div>
        </div>
        <div className="centerdiv bg-white ml-4 flex grid grid-cols-4 col-span-4 h-full border border-rounded">
  <h1 className="font-bold text-lg  col-span-4">Analytics</h1>
  <hr className="col-span-4" />

  <div className="firstdiv bg-[#F4F2FF] flex-row mt-4 h-auto  border-rounded ml-2 pb-3 mr-3 col-span-1">
    <h1 className="text-black font-bold pb-3  mt-4 ml-4 ">Total Tasks</h1>
    <h1 className="text-lg font-bold mx-4 pb-3 mb-3 text-gray-600">90/100</h1>
    <div className="mx-3 text-blue-100 mb-7"><ProgressBar completed="90" /></div>
  </div>
  <div className="seconddiv bg-[#E2EFFC] flex-row mt-4 h-auto pb-3 mr-3 col-span-1">
    <h1 className="text-black font-bold pb-3 mt-4 ml-4">Completed Tasks</h1>
    <h1 className="text-lg font-bold mx-4 pb-3 mb-3 text-gray-600">80/100</h1>
    <div className="mx-3 mb-7 mt-3"><ProgressBar completed="80" /></div>
  </div>
  <div className="3rddiv bg-[#FBEDD2] flex-row h-auto mt-4 pb-3 mr-3 col-span-1">
    <h1 className="text-black font-bold mt-4 ml-4">Pending Tasks</h1>
    <h1 className="text-lg font-bold mx-4 pb-3 mb-3 text-gray-600 mt-3">50/100</h1>
    <div className="mx-3 mb-7 mt-3"><ProgressBar completed="50" /></div>
  </div>
  <div className="4thdiv bg-[#E0F6F4] flex-row h-auto mt-4 pb-5 mr-8 col-span-1">
    <h1 className="text-black font-bold mt-4 ml-4">Decline Tasks</h1>
    <h1 className="text-lg font-bold mx-4 pb-3 mb-3 text-gray-600 mt-3">10/100</h1>
    <div className="mx-3 mb-7 mt-3"><ProgressBar completed="10" /></div>
  </div>
  <h1 className="font-bold text-2xl mt-[90px]">Total Task Ratio</h1>
  <span className="dropdownbutton text-[#4BCBEB] pl-[100px] font-bold mt-[90px]">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </span>
       
</div>
<div className="bg-white"> 
  <canvas ref={chartRef}/>
  </div>
  <div className="w-[550px] bg-white pl-[150px]"><Calendar
        onChange={onChange}
        value={date}
      /></div>
  

        </div>
          
           
   
  );
}

export default Dashboard;
