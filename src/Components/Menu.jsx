import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "../svg components/TaskList";
import Dashboard from "../svg components/Dashboard";
import MenuUser from "../svg components/MenuUser";
import TaskIcon from "../svg components/TaskIcon";
import SettingsIcon from "../svg components/SettingsIcon";
import TitleIcon from "../svg components/TitleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Hamburger menu icon from Font Awesome

const Menu = () => {
  const [activeTab, setActiveTab] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen); // Toggle menu visibility
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white shadow">
      {/* Hamburger menu icon for small and medium devices */}
      <div className="md:hidden fixed inset-y-0 left-0 z-50">
        <button onClick={handleMenuToggle} className="p-2">
          <FontAwesomeIcon icon={faBars} /> {/* Hamburger menu icon */}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="md:w-64 bg-white shadow">{/* Menu content */}</div>
        </div>
      )}
      {/* Menu for large devices */}
      <div className="md:w-64 bg-white shadow fixed inset-y-0 left-0 z-50">
        <div className="mt-5 flex items-center justify-center">
          <TaskList />
          <h1 className="px-3 font-bold text-lg text-[#4BCBEB]">
            Task List Manager
          </h1>
        </div>
        <TitleIcon />
        <p className="mt-6 ml-7 font-bold text-sm text-black font-Poppins">MENU</p>

        <div
          className={`mt-7 ml-6 py-3 px-3 pb-4 md:h-11 md:w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9] ${
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
            <button className="px-2 font-bold text-sm font-Poppins">Dashboard</button>
          </Link>
        </div>

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

      <div className="md:flex-1">{/* Your main content here */}</div>
    </div>
  );
};

export default Menu;
