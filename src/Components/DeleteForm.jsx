import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import imagedelete from "../Images/imagedelete.png";
function DeleteForm({ onClose }) {
  const handleDeleteClick = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/id=${encodeURIComponent(taskId)}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log success message
        // Update frontend tasks list after successful deletion (assuming you have a tasks state)
        fetchTasks(); // Function to fetch updated tasks list
        onClose(); // Close the form or modal
      } else {
        throw new Error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error.message);
      // Handle error, such as displaying an error message to the user
    }
  };
  
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
      <div className="bg-white w-[570px] h-auto p-6 rounded-lg shadow-md relative z-50 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute size-[30rem]  right-2 bg-gray-500 border w-[24px] h-[20px] pb-6 rounded-[12px]"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img className="image ml-[170px]" src={imagedelete}></img>
        <h2 className="text-xl  mb-4 text-center">
          Are you sure you want to delete the image
        </h2>
        <button
          className="ml-[100px] border rounded-md bg-[#4BCBEB] px-[50px] py-4"
          onClick={() => handleDeleteClick(task.id)}
        >
          Delete
        </button>
        <span>
          <button className="ml-[100px] border rounded-md bg-gray-100 px-[50px] py-4"
          onClick={onClose}>
            Cancel
          </button>
        </span>
      </div>
    </div>
  );
}

export default DeleteForm;
