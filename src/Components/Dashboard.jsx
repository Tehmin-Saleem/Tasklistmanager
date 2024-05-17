import Menu from "./Menu";
import Header from "./Header";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Calendar from "react-calendar";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-calendar/dist/Calendar.css";

function Dashboard() {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  const showNotifications = () => {
    setShowNotification(true);
  };
  const totalTasks = 10; // Adjusted total tasks count

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
        const response = await fetch("http://localhost:3000/api/tasks");
        const data = await response.json();
        setTasks(data);

        // Update progress bars based on conditions
        updateProgressBar(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const updateProgressBar = (data) => {
    // Calculate progress for each type of task
    const totalTasksCount = data.length;
    const completedTasksCount = data.filter(
      (task) => task.status === "Completed"
    ).length;
    const declineTasksCount = data.filter(
      (task) =>
        new Date(task.endDate) < new Date() && task.status !== "Completed"
    ).length;
    const pendingTasksCount = data.filter(
      (task) => new Date(task.startDate) > new Date()
    ).length;

    // Update progress bar values only if the elements exist
    const totalTasksBar = document.getElementById("totalTasksBar");
    const completedTasksBar = document.getElementById("completedTasksBar");
    const declineTasksBar = document.getElementById("declineTasksBar");
    const pendingTasksBar = document.getElementById("pendingTasksBar");

    if (totalTasksBar) {
      const totalPercentage = (totalTasksCount / totalTasks) * 100;
      totalTasksBar.style.width = `${totalPercentage}`;
    }

    if (completedTasksBar) {
      const completedPercentage = (completedTasksCount / totalTasks) * 100;
      completedTasksBar.style.width = `${completedPercentage}`;
    }

    if (declineTasksBar) {
      const declinePercentage = (declineTasksCount / totalTasks) * 100;
      declineTasksBar.style.width = `${declinePercentage}`;
    }

    if (pendingTasksBar) {
      const pendingPercentage = (pendingTasksCount / totalTasks) * 100;
      pendingTasksBar.style.width = `${pendingPercentage}`;
    }
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
          labels:
            selectedOption === "Weekly"
              ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
              : selectedOption === "Monthly"
              ? ["Week 1", "Week 2", "Week 3", "Week 4"]
              : [
                  "12 AM",
                  "3 AM",
                  "6 AM",
                  "9 AM",
                  "12 PM",
                  "3 PM",
                  "6 PM",
                  "9 PM",
                ],
          datasets: [
            {
              data:
                selectedOption === "Weekly"
                  ? [100, 500, 100, 2000, 200, 5000, 1000]
                  : selectedOption === "Monthly"
                  ? [500, 1000, 1500, 2000]
                  : [200, 400, 600, 800, 1000, 1200, 1400, 1600],
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
  }, [selectedOption]); // Update chart when selected option changes

  return (
    <div className="flex h-auto ">
      <div className="h-screen w-64 ">
        <Menu />
      </div>

      <div className="w-full md:w-10/12 overflow-auto bg-[#F6F8FA]">
        <Header headername="Dashboard"></Header>
        <div className="mt-7 ml-7 w-auto md:w-[1060px] h-auto md:h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md">
          <div className="flex h-[60px] w-auto mr-900">
            <p className="mt-[25.46px] pl-14 font-bold text-2xl text-black">
              Analytics
            </p>
            <svg
              className="ml-[850px] mt-[25.46px]"
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
              <div className="m-4 rounded-2xl p-4 bg-[#F4F2FF]">
                <h1 className="text-black font-bold">Total Tasks</h1>
                <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
                  {totalTasks}
                </h1>
                <div className="mx-3 text-blue-100 mb-7">
                  <ProgressBar
                    completed={(totalTasks / totalTasks) * 100}
                    bgColor="#4BCBEB"
                    id="totalTasksBar"
                    hidePercentage
                    noBorder
                  />
                </div>
              </div>
              <div className="bg-[#E2EFFC] m-4 rounded-2xl p-4">
                <h1 className="text-black font-bold">Completed Tasks</h1>
                <h1 className="text-lg font-bold mx-4 pb-6 mb-3 pt-3 text-gray-600">
                  {tasks.filter((task) => task.status === "Completed").length}/
                  {totalTasks}
                </h1>
                <div className="mx-3 text-blue-100 mb-7">
                  <ProgressBar
                    completed={
                      (tasks.filter((task) => task.status === "Completed")
                        .length /
                        totalTasks) *
                      100
                    }
                    bgColor="#5CB85C"
                    hidePercentage
                    noBorder
                  />
                </div>
              </div>
              <div className="3rddiv bg-[#FBEDD2] m-4 rounded-2xl p-4">
                <h1 className="text-black font-bold mb-4">Pending Tasks</h1>
                <h1 className="text-lg font-bold mx-4 pb-[20px] mb-3 text-gray-600">
                  {
                    tasks.filter(
                      (task) => new Date(task.startDate) > new Date()
                    ).length
                  }
                  /{totalTasks}
                </h1>
                <div className="mx-3 mb-7">
                  <ProgressBar
                    completed={
                      (tasks.filter(
                        (task) => new Date(task.startDate) > new Date()
                      ).length /
                        totalTasks) *
                      100
                    }
                    bgColor="#F0AD4E"
                    hidePercentage
                    noBorder
                  />
                </div>
              </div>
              <div className="4thdiv bg-[#E0F6F4] m-4 rounded-2xl p-4">
                <h1 className="text-black font-bold mb-4">Decline Tasks</h1>
                <h1 className="text-lg font-bold mx-4 pb-[30px] text-gray-600">
                  {
                    tasks.filter((task) => new Date(task.endDate) < new Date())
                      .length
                  }
                  /{totalTasks}
                </h1>
                <div className="mx-3 mb-7">
                  <ProgressBar
                    completed={
                      (tasks.filter(
                        (task) => new Date(task.endDate) < new Date()
                      ).length /
                        totalTasks) *
                      100
                    }
                    bgColor="#D9534F"
                    hidePercentage
                    noBorder
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-4 row-span-1 col-span-2">
            <div className="">
              
              <h1 className="text-2xl font-bold p-6 m-1">Total Task Ratio </h1>
              <span className="dropdownbutton text-[#4BCBEB] pl-[350px] font-bold mb-8">
                <select value={selectedOption} onChange={handleSelectChange}>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Daily">Daily</option>
                </select>
              </span>
            </div>

            <div className="bg-white pb-8 w-[1017px] flex">
              <div className="flex-1 pr-8">
                <canvas ref={chartRef} />
              </div>

              <Calendar onChange={onChange} value={date} />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;