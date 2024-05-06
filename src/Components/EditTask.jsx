import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function EditForm({ onClose }) {
  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/tasks/updateTaskByTitle?title=${encodeURIComponent(
          taskId
        )}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log updated task data
        // Update UI or perform any other actions after successful update
      } else {
        throw new Error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error.message);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
      <div className="bg-white w-[570px] h-lvh p-6 rounded-lg shadow-md relative z-50 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute size-[30rem]  right-2 bg-gray-500 border w-[24px] h-[20px] pb-6 rounded-[12px]"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Edit Task</h2>
        <p className=" pl-[100px] text-[#888888]">
          Fill the information below to add new task as per
        </p>{" "}
        <p className="pl-[190px] text-[#888888]">your requirement</p>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full border rounded-md py-3 focus:outline-none focus:border-gray-300 pl-3"
            placeholder="Enter Full Title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:{" "}
            <span className="ml-1 text-xs text-gray-400">
              (up to 25 characters)
            </span>
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="mt-1 block w-full border rounded-md py-3 focus:outline-none focus:border-gray-300 pl-3"
            placeholder="Enter description text "
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="attachment"
            className="block text-sm font-medium text-gray-700 pb-8"
          >
            Attachment
          </label>
          <div className="flex items-center">
            <div className="mr-2">
              <input id="file-upload" name="attachment" type="file" />
              <label
                htmlFor="file-upload"
                className="cursor-pointer underline underline-offset-2 text-gray-800 font-semibold py-2 px-4 rounded-lg ml-[180px]"
              ></label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date:
          </label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            className="mt-1 block w-full border rounded-md py-3 focus:outline-none focus:border-gray-300 pl-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="end-date"
            className="block text-sm font-medium text-gray-700"
          >
            End Date:
          </label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            className="mt-1 block w-full border rounded-md py-3 focus:outline-none focus:border-gray-300 pl-3"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="py-4 px-[150px]  rounded-md text-white bg-[#4BCBEB] mb-8 font-bold"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
