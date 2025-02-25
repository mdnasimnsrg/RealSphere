import React, { useState } from "react";
import { FiUser, FiPlus } from "react-icons/fi";
import dayjs from "dayjs";
import img from "../../../images/2.jpeg";
import { CheckCircle, Search } from "lucide-react";
import {MdChevronRight,MdChevronLeft} from "react-icons/md";

const MMLeaveTimeOffBoard = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const goToPreviousMonth = () => {
        setCurrentDate(currentDate.subtract(1, "month"));
    };

    const goToNextMonth = () => {
        setCurrentDate(currentDate.add(1, "month"));
    };

    const [hoveredDate, setHoveredDate] = useState(null);

    const generateDays = () => {

        const startOfMonth = currentDate.startOf("month");
        const endOfMonth = currentDate.endOf("month");
        const daysInMonth = endOfMonth.date();
        const firstDayOfWeek = startOfMonth.day();

        const days = [];

        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(<div key={`empty-${i}`} className="p-4"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDate = currentDate.date(day);
            const isPastDay = dayDate.isBefore(dayjs(), "day");
            const isToday = dayDate.isSame(dayjs(), "day");

            days.push(
                <div key={day} className="p-4 border rounded relative text-center" onMouseEnter={() => setHoveredDate(day)}
                onMouseLeave={() => setHoveredDate(null)}>
                <span className={`font-semibold ${isToday ? "text-blue-500" : "text-gray-700"}`}>
                    {day}
                </span>
                {!isPastDay && (
                    <button onClick={toggleModal} className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-blue-500">
                        {hoveredDate === day ? "+ Apply Time Off" : <FiPlus size={16} />}
                    </button>
                )}
                </div>
            );
        }

        return days;
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const leaveCategories = [
        {
          title: "PAID TIME OFF STATUS",
          leaves: [
            { name: "Hajj Leave", icon: "📅", color: "text-green-500" },
            { name: "Maternity Leave", icon: "📅", color: "text-green-500" },
            { name: "Marriage Leave", icon: "📅", color: "text-green-500" },
            { name: "Sick Leave", icon: "⚕️", color: "text-red-500" },
          ],
        },
        {
          title: "LOSS OF PAY",
          leaves: [
            { name: "Sick Leave", icon: "⚕️", color: "text-red-500" },
            { name: "Casual Leave", icon: "📅", color: "text-green-500" },
          ],
        },
        {
          title: "SHORT LEAVE",
          leaves: [
            { name: "Permission", icon: "📅", color: "text-green-500" },
          ],
        },
    ];

    const [isOpen1, setIsOpen1] = useState(false);
    const toggleModal1 = () => setIsOpen1(!isOpen1);

    const [selected, setSelected] = useState(1);

    const employees = [
        { id: 1, name: "Venkat", role: "Sales Manager", avatar: "V" },
        { id: 2, name: "Asahel", role: "Sales Team", avatar: "A" },
        { id: 3, name: "Hind", role: "Business Development Manager", avatar: "H" },
        { id: 4, name: "Vikram", role: "-", avatar: "V" },
    ];

    const [activeTab, setActiveTab] = useState("Paid Time Off Status");

    const tabs = [
        { name: "Paid Time Off Status", content: "No data found" },
        { name: "Loss Of Pay", content: "No data found" },
        { name: "Short Leave", content: "No data found" },
    ];

  return (
    <div>
        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Time Off Board</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                    <option value="businessDev">Business Development</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="p-4 bg-gray-100 flex gap-4 flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-1/4 bg-white p-4 rounded-lg shadow">
                <div className="flex items-center space-x-6 border-2 border-gray-300 rounded-md shadow p-2">
                    <img
                        src={img}
                        alt="User"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">Venkat</h3>
                        <p className="text-sm text-gray-500">Sales Manager</p>
                    </div>
                    <button onClick={toggleModal1} className="text-blue-500 ml-2 text-sm">Change</button>
                </div>

                {/* Statistics Section */}
                <h4 className="mt-4 font-semibold">Current Year Statistics</h4>
                <div className="mt-2 p-2 bg-gray-100 rounded flex space-x-2 text-sm">
                    <div className="flex border-b w-full overflow-x-auto scrollbar-hide">
                        {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-4 py-2 text-nowrap text-sm font-semibold focus:outline-none transition-colors duration-200 ${
                            activeTab === tab.name ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
                            }`}
                        >
                            {tab.name}
                        </button>
                        ))}
                    </div>
                    {/*
                    <div className="mt-4 text-gray-500">
                        {tabs.find((tab) => tab.name === activeTab)?.content}
                    </div>
                    */}
                </div>

                {/* Circular Chart */}
                <div className="mt-4 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
                        <span className="text-lg font-semibold">0</span>
                        <p className="absolute mt-6 text-xs text-gray-500">
                        Consumed Leave
                        </p>
                    </div>
                </div>

                {/* Status Section */}
                <div className="mt-4 text-sm">
                    <h5 className="font-semibold">Paid Time Off Status</h5>
                    <p className="text-gray-500">No data found</p>

                    <h5 className="mt-2 font-semibold">Loss Of Pay</h5>
                    <p className="text-gray-500">No data found</p>

                    <h5 className="mt-2 font-semibold">Short Leave</h5>
                    <p className="text-gray-500">No data found</p>
                </div>
            </div>

            {/* Calendar Section */}
            <div className="w-3/4 bg-white p-4 rounded-lg shadow">

                <div className="flex items-center gap-2 justify-center">
            <button
              onClick={goToPreviousMonth}
              variant="outlined"
              className="h-10 w-10 rounded-full bg-white border flex justify-center items-center hover:bg-gray-400"
            >
              <MdChevronLeft size={24} />
            </button>

            <span className="font-semibold">
            {currentDate.format("MMMM YYYY")}
            </span>

            <button
              onClick={goToNextMonth}
              variant="outlined"
              className="h-10 w-10 rounded-full bg-white border flex justify-center items-center hover:bg-gray-400"
            >
              <MdChevronRight size={24} />
            </button>
          </div>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 text-center font-semibold mt-4">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
                    <div key={index} className="p-2">{day}</div>
                ))}
                </div>

                <div className="grid grid-cols-7 text-center mt-2">{generateDays()}</div>
            </div>
        </div>

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Select Time Off Type</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        {leaveCategories.map((category, index) => (
                            <div key={index} className="mb-6">
                            <h2 className="text-gray-700 font-semibold mb-3">{category.title}</h2>
                            <div className="grid grid-cols-4 gap-2">
                                {category.leaves.map((leave, i) => (
                                <div
                                    key={i}
                                    className="flex items-center space-x-3 p-4 bg-white shadow rounded-lg"
                                >
                                    <span className={`text-2xl ${leave.color}`}>{leave.icon}</span>
                                    <span className="text-gray-600 font-medium">{leave.name}</span>
                                </div>
                                ))}
                            </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )}

        {isOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Change Employee</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal1}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        {/* Search Input */}
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                            type="text"
                            placeholder="Search Employee"
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Employee List */}
                        <div className="space-y-2">
                            {employees.map((employee) => (
                            <div
                                key={employee.id}
                                className={`flex items-center p-3 rounded-lg cursor-pointer ${
                                selected === employee.id ? "bg-blue-100 border border-blue-300" : "border"
                                }`}
                                onClick={() => setSelected(employee.id)}
                            >
                                {/* Avatar */}
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-lg">
                                {typeof employee.avatar === "string" && employee.avatar.length > 2 ? (
                                    <span className="text-gray-700 font-bold">{employee.avatar}</span>
                                ) : (
                                    <span>{employee.avatar}</span>
                                )}
                                </div>

                                {/* Employee Details */}
                                <div className="ml-3 flex-1">
                                <p className="font-semibold text-gray-900">{employee.name}</p>
                                <p className="text-sm text-gray-500">{employee.role}</p>
                                </div>

                                {/* Checkmark for Selected */}
                                {selected === employee.id && (
                                <CheckCircle className="text-blue-500" size={20} />
                                )}
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        )}

    </div>
  );
};

export default MMLeaveTimeOffBoard;
