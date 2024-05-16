import { useEffect, useState } from "react";
import React from "react";
import Taskimage from "../Images/Taskimage.png";
import Menu from "./Menu";
import axios from "axios";
import AddTask from "./AddTask";
import DeleteForm from "./DeleteForm";
import EditTask from "./EditTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Notification from "../svg components/Notification";
// import User from "../svg components/User";
import AddTaskbtn from "../svg components/AddTaskbtn";
//  import { getRole } from "../utils/getRole";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "./Header";

function Tasks() {
  const [showOptions, setShowOptions] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [showdeleteForm, setShowdeleteForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const [startDate, setStartDate] = useState(""); // State for start date input
  const [endDate, setEndDate] = useState("");

  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const handleClick = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-cyan-500",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const toggleOptions = (taskId) => {
    setSelectedTaskId(taskId);
    setShowOptions((prevOptions) => ({
      ...prevOptions,
      [taskId]: !prevOptions[taskId],
    }));
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    console.log("here");
    setIsLoading(true); // Start loading
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => {
        const tasks = response.data;
        console.log("ffafd", response.data);
        setSubmittedData(tasks);
        setFilteredTasks(tasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setIsLoading(false); // End loading
      });
  }

  function handlAddTaskSubmit(data) {
    setShowAddTask(true);
    const formData = new FormData(); 
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("attachment", data.attachment);
    axios
      .post("http://localhost:3000/api/tasks/addTasks", formData)
      .then((response) => {
        setSubmittedData([...submittedData, data]);
        setFilteredTasks([...filteredTasks, data]);
        setShowAddTask(false);
        fetchTasks();
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }
  // Update handleEditTaskSubmit function
  function handleEditTaskSubmit(taskId, newData) {
    setSelectedTaskId(taskId);
    setShowEditTask(true); // Show the edit form
    axios
      .patch(`http://localhost:3000/api/tasks/${taskId}`, newData)
      .then((response) => {
        const updatedTask = response.data; // Assuming the backend returns the updated task
        // Update the task in your state or data
        const updatedTasks = filteredTasks.map((task) =>
          task._id === taskId ? updatedTask : task
        );
        setFilteredTasks(updatedTasks);
        setShowEditTask(false);
      })
      .catch((error) => {
        console.error("Error editing task:", error);
      });
  }

  const handleDeleteForm = (taskId) => {
    setSelectedTaskId(taskId); // Set the selected task ID
    setShowdeleteForm(true); // Show the delete form
  };

  const handledeleteFormSubmit = (taskId) => {
    axios
      .delete(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => {
        const updatedTasks = filteredTasks.filter(
          (task) => task._id !== taskId
        );
        setFilteredTasks(updatedTasks);
        if (selectedTaskId === taskId) {
          setSelectedTaskId(null);
        }
        setShowdeleteForm(false); // Hide the delete form after successful deletion
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };
  const filterTasksByDate = (tasks) => {
    if (startDate && endDate) {
      const filteredTasks = tasks.filter((task) => {
        const taskStartDate = new Date(task.startDate);
        const taskEndDate = new Date(task.endDate);
        const filterStartDate = new Date(startDate);
        const filterEndDate = new Date(endDate);
        return taskStartDate >= filterStartDate && taskEndDate <= filterEndDate;
      });
      return filteredTasks;
    }
    return tasks;
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    applyFilters(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    applyFilters(startDate, e.target.value);
  };

  const applyFilters = (start, end) => {
    const filteredByDate = filterTasksByDate(submittedData);
    const filteredBySearch = filteredByDate.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filteredBySearch);
  };
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    applyFilters(startDate, endDate);

    if (query === "") {
      // If search query is empty, fetch all previous tasks again
      setFilteredTasks(submittedData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="md:w-64 hidden sm:block">
        <Menu />
      </div>

      <div className="w-full md:w-10/12 overflow-auto bg-[#F6F8FA]">
        <Header headername="Tasks"></Header>
        {/* <div className="flex items-center ">
            <Notification />
           
          </div> */}

        <div className="px-4 md:px-16 mt-7">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-60 mb-4 md:mb-0">
              <h1 className="font-bold">Start Date:</h1>
              <input
                className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
                onChange={handleStartDateChange}
              />
            </div>

            <div className="w-full md:w-60">
              <h1 className="font-bold">End Date:</h1>
              <input
                className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
                onChange={handleEndDateChange}
              />
            </div>
            {/* {getRole() !== "Admin" && ( */}
            <button
              className="h-10 ml-auto"
              onClick={() => setShowAddTask(true)}
            >
              <AddTaskbtn />
            </button>
            {/* )} */}
          </div>
          <h1 className="mt-5 font-bold">Enter Title:</h1>
          <div className="flex">
            <input
              className="px-3 w-full md:w-[31%] h-10 mt-2 rounded-l-lg"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="h-10 w-20 bg-[#4BCBEB] text-white rounded-r-lg m mt-2">
              Search
            </button>
          </div>
          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[450px]">
                <CircularProgress />
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-11 px-4 md:px-16">
          {filteredTasks.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl  shadow-md relative"
            >
              <div className={`h-6 mb-4 ${getRandomColor()} rounded-t-xl`} />
              <div className="flex justify-between items-center px-3 py-2 relative">
                <div className="flex items-center">
                  <p className="text-sm font-bold mr-2">{item.title}</p>
                  <span
                    className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-0 right-0 mr-2 mt-2" // Positioning and styling for the three dots icon
                    onClick={() => toggleOptions(item._id)} // Assuming you have a toggleOptions function
                  >
                    <FontAwesomeIcon icon={faEllipsisV} />
                    {showOptions[item._id] && selectedTaskId === item._id && (
                      <div
                        className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 "
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                            role="menuitem"
                            onClick={() => handleDeleteForm(item._id)}
                          >
                            Delete
                          </button>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                            role="menuitem"
                            onClick={() => {
                              setShowEditTask(true);
                            
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    )}
                  </span>
                </div>
              </div>
              <p className="px-3">{item.description}</p>
              <div className="text-sm font-bold mt-2 px-3">Attachment:</div>
              <img
              //  src={"http://localhost:3000/upload" + item.attachment} 
               src={`http://localhost:3000/${item.attachment}`}
                alt="Attachment"
                className="mt-1 w-full h-24 object-cover rounded-lg"
              />
              <div className="flex justify-between mt-2 px-3">
                <div className="text-sm font-bold">Start Date:</div>
                <div className="text-sm font-bold">End Date:</div>
              </div>
              <div className="flex justify-between mt-1 px-3">
                <div className="text-sm">{formatDate(item.startDate)}</div>
                <div className="text-sm">{formatDate(item.endDate)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAddTask && <AddTask onSubmit={handlAddTaskSubmit} />}

      {showEditTask && (
        <EditTask
          task={filteredTasks.find((task) => task._id === selectedTaskId)} // Pass the selected task object
          onSubmit={handleEditTaskSubmit} // Pass the submit handler function
          onClose={() => setShowEditTask(false)} // Correctly set onClose prop
        />
      )}

      {showdeleteForm && (
        <DeleteForm
          taskId={selectedTaskId}
          onClose={() => setShowdeleteForm(false)} // Close the form
          onSubmit={handledeleteFormSubmit} // Submit the form for deletion
          fetchTasks={fetchTasks}
        />
      )}
    </div>
  );
}

export default Tasks;
