import React, { useState } from "react";
import { FiUser, FiFilter, FiX } from "react-icons/fi";
import { FaUsers, FaTools, FaCar, FaDatabase, FaUserCircle } from "react-icons/fa";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const MMScheduleBoard = () => {
  const [showFilter, setShowFilter] = useState(false);

  const users = [
    { id: 1, initials: "00:00-04:00" },
    { id: 2, initials: "04:00-08:00" },
    { id: 3, initials: "08:00-12:00" },
    { id: 4, initials: "12:00-16:00" },
    { id: 5, initials: "16:00-20:00" },
    { id: 6, initials: "20:00-24:00" },
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Set to Sunday
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      dates.push(day);
    }
    return dates;
  };

  const weekDates = getWeekDates(currentDate);

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const resource = [
    "Tobias",
    "Braylon",
    "Janah Adil Eishiger",
    "Maverick",
    "Felix",
    "Grayson",
  ];

  const jobs = [
    "Generic Job",
    "Security guard",
    "Inspector",
    "Worker",
    "Cleaner",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(resource);
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [jobsearchTerm, setjobSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [selectedJob, setSelectedJob] = useState("");
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  const handleSearchChange = (event, category) => {
    const term = event.target.value;

    if (category === "job") {
      setjobSearchTerm(term);
      setFilteredJobs(
        jobs.filter((option) =>
          option.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else if (category === "resource") {
      setSearchTerm(term);
      setFilteredOptions(
        resource.filter((option) =>
          option.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const handleOptionClick = (option, category) => {
    if (category === "job") {
      setSelectedJob(option);
      setIsJobDropdownOpen(false);
      setjobSearchTerm("");
    } else if (category === "departments") {
      setSelectedOption(option);
      setIsDropdownOpen(false);
      setSearchTerm("");
    }
  };

  const toggleDropdown = (category) => {
    if (category === "job") {
      setIsJobDropdownOpen(!isJobDropdownOpen);
      setFilteredJobs(jobs); // Reset options when opening
    } else if (category === "resource") {
      setIsDropdownOpen(!isDropdownOpen);
      setFilteredOptions(resource);
    }
  };

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Schedule Board</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="">All Properties</option>
              <option value="">Movenpick Jeddah Al Nawras</option>
              <option value="">Atelier La View Center</option>
              <option value="">Serenity Towers</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between items-center mb-4 flex-wrap">

            <div className="relative">
                <button
                    onClick={() => setDropdownOpen1(!isDropdownOpen1)}
                    className="flex items-center space-x-2 text-xl font-semibold px-4 py-2 bg-white border rounded-lg shadow-md"
                >
                    <FaUsers className="text-blue-500" />
                    <span>Users ▼</span>
                </button>
                {isDropdownOpen1 && (
                    <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg p-2 border">
                    {[
                        { icon: <FaUserCircle className="text-red-500" />, label: "Account" },
                        { icon: <FaDatabase className="text-green-500" />, label: "Generic" },
                        { icon: <FaTools className="text-purple-500" />, label: "Tools" },
                        { icon: <FaCar className="text-orange-500" />, label: "Vehicles" },
                        { icon: <FaUsers className="text-blue-500" />, label: "Users" },
                    ].map((item, index) => (
                        <div
                        key={index}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                        >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                    </div>
                )}
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={handlePrevWeek} className="p-2 bg-gray-200 rounded">⬅️</button>
              <button onClick={handleNextWeek} className="p-2 bg-gray-200 rounded">➡️</button>
              <button
                className="bg-gray-100 p-2 rounded border hover:bg-gray-200"
                onClick={() => setShowFilter(true)}
              >
                <FiFilter className="mr-2 text-gray-600" />
              </button>
            </div>

          </div>

          <div className="border rounded-md overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-[120px_repeat(7,_1fr)] bg-gray-100 border-b">
              <div className="p-3 text-center font-bold"><AccessTimeOutlinedIcon /></div>
              {weekDates.map((date, index) => (
                <div key={index} className="p-3 text-center font-bold">
                  {date.toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "2-digit",
                  })}
                </div>
              ))}
            </div>

            {/* User Rows */}
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-[120px_repeat(7,_1fr)] border-b"
              >

                <div className="flex items-center p-3">
                    <div className="flex items-center justify-center mr-2">
                      {user.initials}
                    </div>
                </div>

                {/* Calendar Cells */}
                {weekDates.map((_, index) => (
                  <div
                    key={index}
                    className="border-l p-3 h-16 hover:bg-gray-200 cursor-pointer"
                  ></div>
                ))}
              </div>
            ))}
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

            <div className="w-64 relative">
              <label className="block text-gray-700 font-bold mb-2">
                Resource
              </label>
              <div
                className="border rounded-md px-4 py-2 bg-white cursor-pointer flex justify-between items-center"
                onClick={() => toggleDropdown("resource")}
              >
                {selectedOption || "Select Resource"}
                <span className="text-gray-500">▼</span>
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full border rounded-md bg-white shadow-md mt-2 z-10">
                  {/* Search Field */}
                  <div className="p-2 border-b">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e, "resource")}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                  {/* Dropdown Options */}
                  <ul className="max-h-40 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                      filteredOptions.map((option, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            handleOptionClick(option, "resource")
                          }
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No results found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-64 relative">
              <label className="block text-gray-700 font-bold mb-2">Job Type</label>
              <div
                className="border rounded-md px-4 py-2 bg-white cursor-pointer flex justify-between items-center"
                onClick={() => toggleDropdown("job")}
              >
                {selectedJob || "Select Job"}
                <span className="text-gray-500">▼</span>
              </div>
              {isJobDropdownOpen && (
                <div className="absolute top-full left-0 w-full border rounded-md bg-white shadow-md mt-2 z-10">
                  {/* Search Field */}
                  <div className="p-2 border-b">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={jobsearchTerm}
                      onChange={(e) => handleSearchChange(e, "job")}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                  {/* Dropdown Options */}
                  <ul className="max-h-40 overflow-y-auto">
                    {filteredJobs.length > 0 ? (
                      filteredJobs.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleOptionClick(option, "job")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No results found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 mt-6">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MMScheduleBoard;
