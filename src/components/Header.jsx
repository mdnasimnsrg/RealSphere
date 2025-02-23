import React, { useState } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import logo from "../images/logo/logo.png";
import CustomModal from "./CustomModal";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import modules from "../utils/modules";

const Header = ({ selectedModule, handleModuleChange, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [switchModalOpen, setSwitchModalOpen] = useState(false);

  const openSwitchModal = () => setSwitchModalOpen(true);
  const closeSwitchModal = () => setSwitchModalOpen(false);

  return (
    <>
      <div className="bg-themeBlue text-white shadow-md px-4 flex items-center justify-between z-40 sticky top-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-xl flex items-center focus:outline-none lg:hidden"
          >
            <FiMenu />
          </button>
          <div className="py-3">
            <img src={logo} alt="Logo" className="h-full w-20" />
          </div>
          <span className="text-white-400 text-sm hidden md:inline">
            Property And Facility Management Demo Instance
          </span>
          <span className="bg-red-500 text-xs text-white px-2 py-1 rounded hidden md:inline">
            STAGE
          </span>
        </div>

        <div className="flex items-center space-x-4">
        <Link to="https://amlaq.sa/" target="_blank"  className="bg-red-500 text-sm text-white px-2 py-1 rounded hidden md:inline">
        Rent Your Property
          </Link>
          <button className="border border-white-400 text-white px-4 py-1 rounded hover:bg-red-700 hidden md:inline">
            {selectedModule}
          </button>
          <button className="text-white-400 hidden md:inline">Files</button>
          <div className="border-l border-white-400 h-6 hidden md:inline"></div>
          <button className="text-white-400 hidden md:inline">English</button>
          <FiBell className="text-2xl text-white-400 hidden md:inline" />
          <div
            onClick={openModal}
            className="w-8 h-8 cursor-pointer bg-red-500 rounded-full flex items-center justify-center text-white"
          >
            J
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-25"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-lg shadow-lg w-[350px] absolute right-0 top-10 m-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="p-3">
              <div className="flex">
                <div className="flex self-center">
                  <div className="w-14 h-14 flex justify-center items-center bg-themeBlue rounded-full">
                    <h3 className="text-md text-white font-semibold">J</h3>
                  </div>
                </div>
                <div className="ml-2 self-center">
                  <h3 className="text-sm text-black font-semibold">Jayden</h3>
                  <p className="text-xs text-black mt-1">jayden@yopmail.com</p>
                  <p className="py-1 px-2 text-xs text-white bg-red-500 rounded-md mt-2">
                    {selectedModule}
                  </p>
                </div>
              </div>
              <button
                onClick={openSwitchModal}
                className="bg-themeBlue rounded-md text-white w-full py-2 mt-3 text-sm"
              >
                Switch Module
              </button>
            </div>
          </div>
        </div>
      )}

      <CustomModal
        isOpen={switchModalOpen}
        onClose={closeSwitchModal}
        title="Switch Module"
        size=""
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Modules</h2>
          <div className="flex flex-wrap gap-4 w-full">
            {modules.map((module, i) => (
              <Link
                to={module.href ? module.href : "/"}
                key={module.name + i}
                className={`flex items-center border-2 rounded-lg p-4 cursor-pointer transition-all w-full md:w-fit
      ${
        selectedModule === module.name
          ? "border-red-500 shadow-md"
          : "border-gray-300 hover:border-blue-400"
      }`}
                onClick={() => {
                  handleModuleChange(module.name);
                  if (module.name) {
                    closeSwitchModal();
                    closeModal();
                  }
                }}
              >
                <div className="text-red-500 text-3xl">{module.icon}</div>
                <span className="ml-3 text-lg font-medium text-gray-700">
                  {module.name}
                </span>
                {selectedModule === module.name && (
                  <div className="ml-auto text-red-500">
                    <CheckCircle />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Header;

