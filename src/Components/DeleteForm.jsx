import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
import imagedelete from "../Images/imagedelete.png";
import axios from "axios"; // Import axios for API requests

function DeleteForm({ onClose, taskId, fetchTasks }) {
  const [error, setError] = useState(null); // State for handling errors
  const [cross, setCross] = useState(true);

  const crossDisplay = () => {
    setCross(!cross);
  };

  const handleDeleteClick = () => {
    axios
      .delete(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => {
        console.log("Task deleted:", response);
        fetchTasks(); // Fetch updated tasks after deletion
        onClose(); // Close the delete form
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <>
      {cross && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
          <div className="bg-white w-[570px] h-auto p-6 rounded-lg shadow-md relative z-50 overflow-y-auto">
            <button onClick={crossDisplay} className="absolute top-2 right-2">
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
            <img
              className="mx-auto my-4 w-[100px]"
              src={imagedelete}
              alt="Delete"
            />
            <h2 className="text-xl mb-4 text-center">
              Are you sure you want to delete this task?
            </h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex justify-center gap-4">
              <button
                className="border rounded-md bg-red-500 px-6 py-2 text-white"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
              <button
                className="border rounded-md bg-gray-200 px-6 py-2"
                onClick={onClose} // Close the form on Cancel button click
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteForm;
