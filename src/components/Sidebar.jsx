import React from "react";
import { FiMenu } from "react-icons/fi";
import Dropdown from "./ui/Dropdown";
import modules from "../utils/modules";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, selectedModule }) => {
  const module = modules.find((module) => module.name === selectedModule);

  return (
    <div className="flex text-left ">
      <div
        className={`bg-themeBlue overflow-x-hidden scrollbar-hide h-screen overflow-y-scroll z-30 shadow-md pb-8 ${
          isOpen ? "w-72 " : "lg:w-14 w-0"
        } transition-width duration-300 fixed lg:sticky top-0 lg:top-16`}
      >
        <div className="flex items-center justify-between p-4 gap-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-xl flex items-center focus:outline-none"
          >
            <FiMenu />
            {isOpen && (
              <span className="ml-2 text-[1.1rem] text-left">
                {selectedModule}
              </span>
            )}
          </button>
        </div>
        <ul className="p-4">
          {module?.links?.map((link, i) => {
            return link.subLinks ? (
              <li key={link.name + i}>
                <Dropdown
                  text={link.name}
                  options={link.subLinks}
                  icon={link.icon}
                />
              </li>
            ) : (
              <li key={link.name + i}>
                <Link
                  to={link.name.toLowerCase().split(" ").join("-")}
                  className="flex items-center gap-4 flex-nowrap text-white hover:text-black font-semibold py-3 text-nowrap"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
