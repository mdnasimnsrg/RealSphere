import React, { useState } from "react";
import { FiUser, FiFilter, FiX } from "react-icons/fi";

const MMResourceBoard = () => {
  const [showFilter, setShowFilter] = useState(false);

  const users = [
    {
      id: 1,
      name: "Naveenraj Murugan",
      role: "Security guard",
      initials: "NM",
    },
    { id: 2, name: "Prathamesh K", role: "Generic Job", initials: "PK" },
    {
      id: 3,
      name: "Hari Arunachalam",
      role: "Generic Job",
      initials: "HA",
      image: null,
    },
    { id: 4, name: "Janah Adil Eishiger", role: "Inspector", initials: "JA" },
    { id: 5, name: "Suriya", role: "Generic Job", initials: "S" },
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

  const departments = [
    "Facility Department",
    "Security Department",
    "Inspection Department",
    "Accounts Department",
    "Sales Department",
    "Generic Department",
  ];

  const jobs = [
    "Generic Job",
    "Security guard",
    "Inspector",
    "Worker",
    "Cleaner",
  ];
  const professions = [
    "Car Cleaner",
    "Cook",
    "Doctor",
    "Driver",
    "Elderly Caretaker",
    "Electrician",
    "Football Coach",
    "Gym Instructor",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(departments);
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [jobsearchTerm, setjobSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [selectedJob, setSelectedJob] = useState("");
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  const [professionSearchTerm, setProfessionSearchTerm] = useState("");
  const [filteredProfessions, setFilteredProfessions] = useState(professions);
  const [selectedProfession, setSelectedProfession] = useState("");
  const [isProfessionDropdownOpen, setIsProfessionDropdownOpen] =
    useState(false);

  const handleSearchChange = (event, category) => {
    const term = event.target.value;

    if (category === "job") {
      setjobSearchTerm(term);
      setFilteredJobs(
        jobs.filter((option) =>
          option.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else if (category === "profession") {
      setProfessionSearchTerm(term);
      setFilteredProfessions(
        professions.filter((option) =>
          option.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else if (category === "departments") {
      setSearchTerm(term);
      setFilteredOptions(
        departments.filter((option) =>
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
    } else if (category === "profession") {
      setSelectedProfession(option);
      setIsProfessionDropdownOpen(false);
      setProfessionSearchTerm("");
    } else if (category === "departments") {
      setSelectedOption(option);
      setIsDropdownOpen(false);
      setSearchTerm("");
    }
  };

  const toggleDropdown = (category) => {
    if (category === "job") {
      setIsJobDropdownOpen(!isJobDropdownOpen);
      setFilteredJobs(jobs);
    } else if (category === "profession") {
      setIsProfessionDropdownOpen(!isProfessionDropdownOpen);
      setFilteredProfessions(professions);
    } else if (category === "departments") {
      setIsDropdownOpen(!isDropdownOpen);
      setFilteredOptions(departments);
    }
  };

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Resource Board</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
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
                className="flex items-center space-x-2 text-xl font-semibold"
              >
                👥 Users ▼
              </button>
              {isDropdownOpen1 && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                  <p className="p-2 hover:bg-gray-100 cursor-pointer">👥 Users</p>
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
              <input type="checkbox" className="w-4 h-4" /> Week Off Days
              <input type="checkbox" className="w-4 h-4" /> Time Off Day
            </div>

          </div>

          <div className="border rounded-md overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-[200px_repeat(7,_1fr)] bg-gray-100 border-b">
              <div className="p-3 text-center font-bold">Users List</div>
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
                className="grid grid-cols-[200px_repeat(7,_1fr)] border-b"
              >
                {/* User Info */}
                <div className="flex items-center p-3">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                      {user.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.role}</div>
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
                Department
              </label>
              <div
                className="border rounded-md px-4 py-2 bg-white cursor-pointer flex justify-between items-center"
                onClick={() => toggleDropdown("departments")}
              >
                {selectedOption || "Select Department"}
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
                      onChange={(e) => handleSearchChange(e, "departments")}
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
                            handleOptionClick(option, "departments")
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
              <label className="block text-gray-700 font-bold mb-2">Job</label>
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

            <div className="w-64 relative">
              <label className="block text-gray-700 font-bold mb-2">
                Profession
              </label>
              <div
                className="border rounded-md px-4 py-2 bg-white cursor-pointer flex justify-between items-center"
                onClick={() => toggleDropdown("profession")}
              >
                {selectedProfession || "Select Profession"}
                <span className="text-gray-500">▼</span>
              </div>
              {isProfessionDropdownOpen && (
                <div className="absolute top-full left-0 w-full border rounded-md bg-white shadow-md mt-2 z-10">
                  {/* Search Field */}
                  <div className="p-2 border-b">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={professionSearchTerm}
                      onChange={(e) => handleSearchChange(e, "profession")}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                  {/* Dropdown Options */}
                  <ul className="max-h-40 overflow-y-auto">
                    {filteredProfessions.length > 0 ? (
                      filteredProfessions.map((option, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            handleOptionClick(option, "profession")
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

            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 mt-6">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MMResourceBoard;
