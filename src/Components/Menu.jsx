import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "../svg components/TaskList";
import Dashboard from "../svg components/Dashboard";
import MenuUser from "../svg components/MenuUser";
import TaskIcon from "../svg components/TaskIcon";
import SettingsIcon from "../svg components/SettingsIcon";
import TitleIcon from "../svg components/TitleIcon";
import MenuIcon from "../svg components/MenuIcon"; // Assuming you have a MenuIcon component for the breadcrumb

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white shadow">
      {/* Breadcrumb icon for small screens */}
      <div className="md:hidden flex items-center justify-between bg-white shadow">
        <MenuIcon onClick={toggleMenu} isOpen={isMenuOpen} />
        <h1 className="px-3 font-bold text-lg text-[#4BCBEB] hidden ">
          Task List Manager
        </h1>
      </div>

      {/* Sidebar for small screens */}
      {isMenuOpen && (
        <div className="md:hidden w-64 bg-white shadow">
          {/* Sidebar content */}
          <div className="mt-5 flex items-center justify-center">
            <TaskList />
            <h1 className="px-3 font-bold text-lg text-[#4BCBEB]">
              Task List Manager
            </h1>
          </div>
          <TitleIcon />
          <p className="mt-6 ml-7 font-bold text-sm text-black font-Poppins">
            MENU
          </p>

          {/* Menu items */}
          <div
            className={`mt-7 ml-6 py-3 px-3 pb-4 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
              activeTab === "dashboard" ? "bg-gray-100 text-[#4BCBEB]" : ""
            }`}
            onClick={() => handleTabClick("dashboard")}
          >
            <Dashboard />
            <Link
              to="/dashboard"
              className={`ml-2 ${
                activeTab === "dashboard" ? "text-[#4BCBEB]" : "text-[#64748B]"
              }`}
            >
              <button className="px-2 font-bold text-sm font-Poppins">
                Dashboard
              </button>
            </Link>
          </div>

          {/* Additional menu items */}
          <div
            className={`mt-7 ml-6 text-[#4BCBEB] py-3 px-3 md:h-11 md:w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
              activeTab === "users" ? "bg-gray-100 text-[#4BCBEB] " : ""
            }`}
            onClick={() => handleTabClick("users")}
          >
            <MenuUser />
            <Link
              to="/users"
              className={`ml-2 ${
                activeTab === "users"
                  ? "text-[#4BCBEB] font-bold"
                  : "text-[#64748B]"
              }`}
            >
              <button className="px-2 font-medium text-sm">Users</button>
            </Link>
          </div>

          <div
            className={`mt-7 ml-6 py-3 px-3 md:h-11 md:w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
              activeTab === "tasks" ? "bg-gray-100 text-[#4BCBEB]" : ""
            }`}
            onClick={() => handleTabClick("tasks")}
          >
            <TaskIcon />
            <Link
              to="/tasks"
              className={`ml-2 ${
                activeTab === "tasks" ? "text-[#4BCBEB]" : "text-[#64748B]"
              }`}
            >
              <button className="px-2 font-medium text-sm">Tasks</button>
            </Link>
          </div>

          <div
            className={`flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52 text-[#4BCBEB] ${
              activeTab === "settings" ? "bg-gray-100 text-[#4BCBEB]" : ""
            }`}
            onClick={() => handleTabClick("settings")}
          >
            <SettingsIcon />
            <Link
              to="/settings"
              className={`ml-2 ${
                activeTab === "settings" ? "text-[#4BCBEB]" : "text-[#64748B]"
              }`}
            >
              <button className="px-2 font-medium text-sm text-[#64748B]">
                Settings
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Sidebar for larger screens */}
      <div className="hidden md:block md:w-64 bg-white shadow">
        {/* Sidebar content */}
        <div className="mt-5 flex items-center justify-center">
          <TaskList />
          <h1 className="px-3 font-bold text-lg text-[#4BCBEB]">
            Task List Manager
          </h1>
        </div>
        <TitleIcon />
        <p className="mt-6 ml-7 font-bold text-sm text-black font-Poppins">
          MENU
        </p>

        {/* Menu items */}
        <div
          className={`mt-7 ml-6 py-3 px-3 pb-4 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
            activeTab === "dashboard" ? "bg-gray-100 text-[#4BCBEB]" : ""
          }`}
          onClick={() => handleTabClick("dashboard")}
        >
          <Dashboard />
          <Link
            to="/dashboard"
            className={`ml-2 ${
              activeTab === "dashboard" ? "text-[#4BCBEB]" : "text-[#64748B]"
            }`}
          >
            <button className="px-2 font-bold text-sm font-Poppins">
              Dashboard
            </button>
          </Link>
        </div>

        {/* Additional menu items */}
        <div
          className={`mt-7 ml-6 text-[#4BCBEB] py-3 px-3 md:h-11 md:w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
            activeTab === "users" ? "bg-gray-100 text-[#4BCBEB] " : ""
          }`}
          onClick={() => handleTabClick("users")}
        >
          <MenuUser />
          <Link
            to="/users"
            className={`ml-2 ${
              activeTab === "users"
                ? "text-[#4BCBEB] font-bold"
                : "text-[#64748B]"
            }`}
          >
            <button className="px-2 font-medium text-sm">Users</button>
          </Link>
        </div>

        <div
          className={`mt-7 ml-6 py-3 px-3 md:h-11 md:w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
            activeTab === "tasks" ? "bg-gray-100 text-[#4BCBEB]" : ""
          }`}
          onClick={() => handleTabClick("tasks")}
        >
          <TaskIcon />
          <Link
            to="/tasks"
            className={`ml-2 ${
              activeTab === "tasks" ? "text-[#4BCBEB]" : "text-[#64748B]"
            }`}
          >
            <button className="px-2 font-medium text-sm">Tasks</button>
          </Link>
        </div>

        <div
          className={`flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52 text-[#4BCBEB] ${
            activeTab === "settings" ? "bg-gray-100 text-[#4BCBEB]" : ""
          }`}
          onClick={() => handleTabClick("settings")}
        >
          <SettingsIcon />
          <Link
            to="/settings"
            className={`ml-2 ${
              activeTab === "settings" ? "text-[#4BCBEB]" : "text-[#64748B]"
            }`}
          >
            <button className="px-2 font-medium text-sm text-[#64748B]">
              Settings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
