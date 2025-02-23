import React, { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight, Calendar, Menu, Search } from "lucide-react";
import { Avatar } from "@mui/material";
import { FiFilter, FiX } from "react-icons/fi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DataTable from "react-data-table-component";

const SelfCheckInEntries = () => {

  const [selectedMonth] = useState("February 2025");
  const [resource] = useState({
    name: "Tobias",
    id: "CUST250110-506",
    avatar: "https://via.placeholder.com/40",
  });

  const handlePrevMonth = () => {
    console.log("Previous Month");
  };

  const handleNextMonth = () => {
    console.log("Next Month");
  };

  const [activeTab, setActiveTab] = useState("calendar");
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [showFilter, setShowFilter] = useState(false); 

  const [selected, setSelected] = useState(1);

  const employees = [
    { id: 1, name: "Tobias", role: "Security guard", avatar: "👮‍♂️" },
    { id: 2, name: "Braylon", role: "Inspector", avatar: "🕵️‍♂️" },
    { id: 3, name: "Janah Adil Eishiger", role: "Inspector", avatar: "JA" },
    { id: 4, name: "Maverick", role: "Inspector", avatar: "🕵️" },
  ];

  const [checkInFrom, setCheckInFrom] = useState(null);
  const [checkInTo, setCheckInTo] = useState(null);
  const [checkOutFrom, setCheckOutFrom] = useState(null);
  const [checkOutTo, setCheckOutTo] = useState(null);
  const [isCheckout, setIsCheckout] = useState(false);

  const columns = [
    {
        name: "Resource Name",
        selector: (row) => row.ResourceName,
    },
    {
        name: "Location",
        selector: (row) => row.Location,
    },
    {
        name: "Check In",
        selector: (row) => row.CheckIn,
    },
    {
        name: "Check In Distance",
        selector: (row) => row.CheckInDistance,
    },
    {
        name: "Check In By",
        selector: (row) => row.CheckInBy,
    },
    {
        name: "Check Out",
        selector: (row) => row.CheckOut,
    },
    {
        name: "Check Out Distance",
        selector: (row) => row.CheckOutDistance,
    },
    {
        name: "Check Out By",
        selector: (row) => row.CheckOutBy,
    },
    {
        name: "Time Difference",
        selector: (row) => row.TimeDifference,
    },
    {
        name: "Status",
        selector: (row) => row.Status,
    },
  ];

  const tableData = [
    {
        ResourceName: "James Williamson",
        Location: "Al Maktoum Business Square",
        CheckIn: "13 Feb 24 7:53 PM (GMT -05:00)",
        CheckInDistance: "11568.02 Kms",
        CheckInBy: "User",
        CheckOut: "-",
        CheckOutDistance: "-",
        CheckOutBy: "System",
        TimeDifference: "-",
        Status: "Checkout pending",
    },
  ];

  return (
    <div>
        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Self Check-In Entries</div>
        </div>

        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-4">
                {/* Top Controls */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <select className="border px-4 py-2 rounded-lg">
                            <option>Resource</option>
                            <option>Contact</option>
                        </select>
                        <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                            <Avatar src={resource.avatar} alt={resource.name} />
                            <div className="ml-2">
                                <p className="font-semibold">{resource.name}</p>
                                <p className="text-xs text-gray-500">{resource.id}</p>
                            </div>
                            <button onClick={toggleModal} className="text-blue-500 ml-2 text-sm">Change</button>
                        </div>
                    </div>
                    {activeTab === "calendar" && (
                        <div className="flex items-center space-x-4">
                            <button onClick={handlePrevMonth} className="p-2 bg-gray-200 rounded-full">
                            <ChevronLeft size={20} />
                            </button>
                            <span className="font-semibold">{selectedMonth}</span>
                            <button onClick={handleNextMonth} className="p-2 bg-gray-200 rounded-full">
                            <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                    <div className="flex space-x-2">
                        {activeTab === "menu" && (
                            <button 
                                className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                                onClick={() => setShowFilter(true)}
                            >
                                <FiFilter className="mr-2 text-gray-600" />
                            </button>
                        )}
                        <button 
                        className={`p-2 rounded-lg ${activeTab === "calendar" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setActiveTab("calendar")}
                        >
                        <Calendar size={20} />
                        </button>
                        <button 
                        className={`p-2 rounded-lg ${activeTab === "menu" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setActiveTab("menu")}
                        >
                        <Menu size={20} />
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === "calendar" && (
                <>
                    <div className="grid grid-cols-7 text-center text-gray-500 border-b pb-2">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                        <div key={day} className="font-semibold">
                        {day}
                        </div>
                    ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 mt-2">
                    {[...Array(30)].map((_, index) => (
                        <div key={index} className="border p-4 text-center text-gray-700">
                        {String(index + 1).padStart(2, "0")}
                        </div>
                    ))}
                    </div>
                </>
                )}

                {activeTab === "menu" && (
                    <div className="overflow-x-auto">
                        <DataTable
                            columns={columns}
                            data={tableData}
                            pagination 
                            highlightOnHover
                            striped
                            responsive
                        />
                    </div>
                )}

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

                <div className="">
                    {/* Check In Section */}
                    <div className="mb-4">
                        <label className="font-semibold">Check In</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                        <div>
                            <label className="text-sm">From</label>
                            <DatePicker
                            selected={checkInFrom}
                            onChange={(date) => setCheckInFrom(date)}
                            className="w-full p-2 border rounded-md"
                            placeholderText="From"
                            />
                        </div>
                        <div>
                            <label className="text-sm">To</label>
                            <DatePicker
                            selected={checkInTo}
                            onChange={(date) => setCheckInTo(date)}
                            className="w-full p-2 border rounded-md"
                            placeholderText="To"
                            />
                        </div>
                        </div>
                    </div>

                    {/* Check Out Section */}
                    <div className="mb-4">
                        <label className="font-semibold">Check Out</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                        <div>
                            <label className="text-sm">From</label>
                            <DatePicker
                            selected={checkOutFrom}
                            onChange={(date) => setCheckOutFrom(date)}
                            className="w-full p-2 border rounded-md"
                            placeholderText="From"
                            />
                        </div>
                        <div>
                            <label className="text-sm">To</label>
                            <DatePicker
                            selected={checkOutTo}
                            onChange={(date) => setCheckOutTo(date)}
                            className="w-full p-2 border rounded-md"
                            placeholderText="To"
                            />
                        </div>
                        </div>
                    </div>

                    {/* Is Checkout Toggle */}
                    <div className="mb-4">
                        <label className="font-semibold">Is Checkout</label>
                        <div className="flex mt-1">
                        <button
                            className={`px-4 py-2 border rounded-l-md ${!isCheckout ? "bg-gray-200" : "bg-white"}`}
                            onClick={() => setIsCheckout(true)}
                        >
                            Yes
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-r-md ${isCheckout ? "bg-gray-200" : "bg-blue-600 text-white"}`}
                            onClick={() => setIsCheckout(false)}
                        >
                            No
                        </button>
                        </div>
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
                <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Change Employee</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
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

export default SelfCheckInEntries;
