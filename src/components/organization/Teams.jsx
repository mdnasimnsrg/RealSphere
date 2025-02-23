import React, { useState } from "react";
import { FiUser, FiFilter, FiX } from "react-icons/fi";

const Teams = () => {
  const [features, setFeatures] = useState({
    team: false,
    team1: false,
  });

  const toggleFeature = (featureName) => {
    setFeatures((prev) => ({
      ...prev,
      [featureName]: !prev[featureName],
    }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleModal1 = () => setIsOpen1(!isOpen1);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleModal2 = () => setIsOpen2(!isOpen2);

  const [isOpen3, setIsOpen3] = useState(false);
  const toggleModal3 = () => setIsOpen3(!isOpen3);

  const [activeTab, setActiveTab] = useState("Property");

  const [showFilter, setShowFilter] = useState(false);
  const [showFilter1, setShowFilter1] = useState(false);
  const [setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  return (
    <>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Teams</div>
        <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
          <FiUser className="text-gray-500 mr-2" />
          <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
            <option value="businessDev">Business Development</option>
          </select>
        </div>
      </div>

      <div className="flex h-screen p-4 bg-gray-100 flex-wrap lg:flex-nowrap gap-4">
        <div className="min-w-80 max-w-96 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Teams</h2>
            <button
              onClick={toggleModal}
              className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Team
            </button>
          </div>
          <hr className="border-gray-300 mt-4 mb-4" />
          <input placeholder="Search" className="mt-4" />
          <div className="mt-4">
            <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:shadow-md">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
                  P
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Painting</h3>
                  <p className="text-sm text-gray-500">Property Management</p>
                </div>
                <div className="ml-10">
                  <button
                    className={`w-12 h-6 rounded-full ${
                      features.team ? "bg-green-500" : "bg-gray-300"
                    } flex items-center px-1`}
                    onClick={() => toggleFeature("team")}
                  >
                    <div
                      className={`h-5 w-5 bg-white rounded-full transition ${
                        features.team ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:shadow-md mt-2">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold">
                  AM
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">AC Maintenance</h3>
                  <p className="text-sm text-gray-500">
                    Facility & Asset Management
                  </p>
                </div>
                <div className="ml-10">
                  <button
                    className={`w-12 h-6 rounded-full ${
                      features.team1 ? "bg-green-500" : "bg-gray-300"
                    } flex items-center px-1`}
                    onClick={() => toggleFeature("team1")}
                  >
                    <div
                      className={`h-5 w-5 bg-white rounded-full transition ${
                        features.team1 ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Painting</h2>
            <button
              onClick={toggleModal1}
              className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          </div>
          <div defaultValue="property" className="mt-4">
            <div>
              <button
                className={`p-2 ${
                  activeTab === "Property" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("Property")}
              >
                Property
              </button>
              <button
                className={`p-2 ${
                  activeTab === "User" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("User")}
              >
                User
              </button>
            </div>
          </div>

          <div className="p-4">
            {activeTab === "Property" && (
              <div>
                <div className="flex items-center mt-4 flex-wrap gap-3">
                  <input placeholder="Search for property" className="flex-1" />
                  <button
                    className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200 mr-2"
                    onClick={() => setShowFilter(true)}
                  >
                    <FiFilter className="mr-2 text-gray-600" />
                  </button>
                  <button
                    onClick={toggleModal2}
                    className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add Property
                  </button>
                </div>
                <div className="flex justify-center items-center h-32 text-gray-500">
                  No Data Found
                </div>
              </div>
            )}
            {activeTab === "User" && (
              <div>
                <div className="flex items-center mt-4 flex-wrap gap-3">
                  <input placeholder="Search for User" className="flex-1" />
                  <button
                    className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200 mr-2"
                    onClick={() => setShowFilter1(true)}
                  >
                    <FiFilter className="mr-2 text-gray-600" />
                  </button>
                  <button
                    onClick={toggleModal3}
                    className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add User
                  </button>
                </div>
                <div className="flex justify-center items-center h-32 text-gray-500">
                  No Data Found
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Purpose
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Commercial",
                  "Mixed",
                  "Residential",
                  "Stay",
                  "Facilities",
                ].map((status, index) => (
                  <label
                    key={status}
                    className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                  >
                    <input
                      type="checkbox"
                      value={status}
                      className="hidden"
                      onChange={(e) => handleStatusChange(e, status)}
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {["Active", "Inactive"].map((status, index) => (
                  <label
                    key={status}
                    className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                  >
                    <input
                      type="checkbox"
                      value={status}
                      className="hidden"
                      onChange={(e) => handleStatusChange(e, status)}
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      )}

      {showFilter1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter1 ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter1(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {["Active", "Inactive"].map((status, index) => (
                  <label
                    key={status}
                    className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                  >
                    <input
                      type="checkbox"
                      value={status}
                      className="hidden"
                      onChange={(e) => handleStatusChange(e, status)}
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Add Team</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Team Name"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Module
                </label>
                <select className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                  <option value="">Select Modules</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Add Team
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Edit Team</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal1}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Team Name"
                  value="Painting"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Module
                </label>
                <select className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                  <option value="">Select Modules</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Update Team
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Add Property</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal2}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  PROPERTY
                </label>
                <select className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                  <option value="">Select Property</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Add Property
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen3 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Add User</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal3}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Rights
                </label>
                <select className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                  <option value="">Select Rights</option>
                  <option value="">Manager</option>
                  <option value="">Member</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Assign User
                </label>
                <input
                  placeholder="Search User Details"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Teams;
