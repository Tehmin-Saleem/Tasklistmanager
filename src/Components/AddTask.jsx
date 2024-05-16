import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function AddTask({ onSubmit }) {
  const [cross, setCross] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState(null);

  function crossDisplay() {
    setCross(!cross);
  }

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setAttachment(selectedFile)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("attachment", attachment);

    axios
      .post("http://localhost:3000/api/tasks/addTasks", formData)
      .then((result) => {
        const newData = { title, description, startDate, attachment, endDate };
        onSubmit(newData);
        setLoading(false);
        console.log(result);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      {cross && (
         <div className="fixed inset-0 flex items-center justify-center bg-[#000000]  bg-opacity-50">
         <div className="bg-white p-8 rounded-lg">
            <div className="flex">
              <h2 className="text-xl font-medium mx-auto mb-4 mt-1 text-center">
                Add Task
              </h2>
              <button onClick={crossDisplay} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="ml-14 mr-14 items-center justify-center">
              <p className="text-s text-[#888888] text-center justify-center">
                Fill the information below to add new task as per <br></br>your
                requirement.
              </p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1 font-bold">
                  Enter Title:
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Full Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="value2" className="block mb-1 font-bold">
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter Description Text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <label htmlFor="value3" className="block mb-1 font-bold">
                Attachment:
              </label>
              <input
                type="file"
                name="attachment"
                onChange={handleFileSelect} 
                className="w-full h-40 border border-gray-300 rounded-md py-1 px-3"
              />
              <div className="flex">
                <p className="text-xs text-[#888888]">
                  Supported Format: PNG,JPG
                </p>
                <p className="text-xs ml-36 text-[#888888]">
                  Maximum size: 5mb
                </p>
              </div>
              <label className="block mb-2 mt-3 font-bold">Start Date:</label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              ></input>
              <label className="block mb-2 font-bold">End Date:</label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              ></input>
              {/* Submit button with loading spinner */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 ml-40 mt-3 rounded-md relative"
                style={{ width: "100px", height: "40px" }} // Set fixed dimensions for the button
                disabled={loading} // Disable button when loading is true
              >
                {loading && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-spin text-white"
                    />
                  </div>
                )}
                {!loading && "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
AddTask.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddTask;