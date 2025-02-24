import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IoMdClose } from "react-icons/io";
import {
    FaClock,
    FaUser,
    FaRupeeSign,
  } from "react-icons/fa";
import img1 from "../../images/11.jpeg";
import { FiX } from "react-icons/fi";

const DetailsUnitReadiness = () => {
    const handleBack = () => {
        window.history.back();
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [show1Filter, setShow1Filter] = useState(false);
    const [show2Filter, setShow2Filter] = useState(false);

    const inspections = [
        {
            image: img1,
            title: "Moven Pick Second Floor",
            subtitle: "UNIT25-1190",
            action: "click1",
        },
    ];

    const [isSidebarOpen, setSidebarOpen] = useState(false); 
    const [isEditing, setIsEditing] = useState(false);
    const [price, setPrice] = useState("0 SAR");

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <h1 className="text-xl font-semibold">
                <button
                onClick={handleBack}
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                aria-label="Go back"
                >
                <ArrowBackIosIcon />
                </button>
                <span>IMJ240913-4008</span>
            </h1>
        </div>

        <div className="p-2 bg-gray-100 flex gap-2">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-white p-4">
                {/* Inspection Detail */}
                <div className="mb-4 border-2 shadow-md rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-gray-500 text-sm">Inspection Detail</h2>
                        <button
                            onClick={() => setIsPopupOpen(!isPopupOpen)}
                            className="text-blue-600 text-sm"
                        >
                            {isPopupOpen ? "View Less" : "View More"}
                        </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                            <p className="font-semibold text-lg">IMO240913-1410</p>
                            <p className="text-gray-500 text-sm">Inspection on 13 Sep 24</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border">
                    <div className="flex space-x-4 mb-4">
                        <img src="/icons/icon1.png" alt="icon" className="w-10 h-10 opacity-60" />
                        <img src="/icons/icon2.png" alt="icon" className="w-10 h-10 opacity-60" />
                        <img
                        src="/icons/avatar.png"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full border"
                        />
                        <img src="/icons/icon3.png" alt="icon" className="w-10 h-10 opacity-60" />
                        <img src="/icons/icon4.png" alt="icon" className="w-10 h-10 opacity-60" />
                    </div>
                    <h3 className="text-lg font-semibold">Assign Resource & Date</h3>
                    <p className="text-gray-500 text-sm">Schedule Date, Time and Resources</p>
                    <button onClick={() => setShow2Filter(true)} className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                        Assign
                    </button>
                </div>
                <button className="w-full mt-4 px-6 py-2 text-blue border font-medium rounded-lg">
                    Cancel
                </button>
            </div>

            {/* Right Content */}
            <div className="w-3/4 bg-white flex flex-col">
                <div className="p-6 bg-white shadow-md rounded-lg">
                    {/* Header Section */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Inspection Details</h2>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-3 border-b pb-2 text-gray-500 text-sm font-medium">
                        <p>INSPECTION ITEM</p>
                        <p className="text-center">DETAILS</p>
                    </div>

                    {/* Inspection List */}
                    <div className="mt-4 space-y-2">
                        {inspections.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                        >
                            {/* Item Details */}
                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.title} className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-gray-500 text-sm">{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-green-500 text-xl">-</span>
                            </div>
                            {/* Move-in Status */}
                            <div className="flex items-center space-x-4">
                                {item.action === "click1" && (
                                    <button onClick={() => setSidebarOpen(true)} className="text-gray-500 cursor-pointer">▼</button>
                                )}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg w-96">
                    <div className="flex bg-gray-300 justify-between items-center border-b p-2">
                        <h2 className="text-lg font-semibold">Inspection Detail</h2>
                        <button onClick={() => setIsPopupOpen(false)} className="text-gray-500">✕</button>
                    </div>
                    <div className="p-4">
                        <div className="mt-4">
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                                <div>
                                    <p className="font-semibold">IMO240913-1410</p>
                                    <p className="text-gray-500 text-sm">Inspection on 13 Sep 24</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 border-t pt-4">
                            <h2 className="text-gray-500 text-sm">Inspection Place</h2>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                                <div>
                                    <p className="font-semibold">UNIT24-841 / Sanctuary 1</p>
                                    <p className="text-gray-500 text-sm">The Sanctuary</p>
                                    <p className="text-gray-500 text-sm">Chengalpattu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {show1Filter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg w-[600px] p-6 relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Re-Assign Resource
                    </h2>
                    <button
                        onClick={() => setShow1Filter(false)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <IoMdClose size={24} />
                    </button>
                    </div>

                    {/* General Inspection */}
                    <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">
                        General Inspection
                    </span>
                    <select className="border rounded px-3 py-2 w-48 text-gray-700 text-sm">
                        <option value="Business Development">
                        Business Development
                        </option>
                        <option value="Inspection">Inspection</option>
                    </select>
                    </div>

                    {/* Step 1 */}
                    <div className="mb-4">
                    <h3 className="text-gray-700 font-semibold mb-2">
                        Step 1
                    </h3>
                    <div className="flex justify-between items-center gap-4">
                        {/* Start Date & Time */}
                        <div className="flex-1">
                        <label className="text-gray-600 text-sm">
                            Start Date & Time
                        </label>
                        <div className="border rounded p-2 mt-1 flex items-center gap-2 text-gray-700">
                            <FaClock />
                            <span>14 Nov 24 16:30 pm</span>
                        </div>
                        </div>

                        {/* Projected Hours */}
                        <div className="flex-1">
                        <label className="text-gray-600 text-sm">
                            Projected Hours
                        </label>
                        <div className="border rounded p-2 mt-1 flex items-center gap-2 text-gray-700">
                            <input
                            type="number"
                            defaultValue="2"
                            className="w-full border-none focus:outline-none"
                            />
                            <span>Hr</span>
                        </div>
                        </div>
                    </div>

                    {/* Scheduling */}
                    <div className="mt-4">
                        <span className="text-gray-600 text-sm">
                        Scheduling
                        </span>
                        <div className="mt-2 flex gap-2">
                        <button className="flex-1 py-2 text-center border rounded bg-blue-100 text-blue-600">
                            Flexible
                        </button>
                        <button className="flex-1 py-2 text-center border rounded text-gray-600">
                            Strict
                        </button>
                        </div>
                    </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-4">
                    <h3 className="text-gray-700 font-semibold mb-2">
                        Step 2
                    </h3>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                        Select the Resource
                        </span>
                        <button className="text-blue-500 text-sm">
                        Primary Resource
                        </button>
                    </div>

                    {/* Resource Group */}
                    <div className="mt-2">
                        <label className="text-gray-600 text-sm">
                        Resource Group
                        </label>
                        <select className="border rounded w-full px-3 py-2 mt-1 text-gray-700 text-sm">
                        <option value="Technicians">Technicians</option>
                        <option value="Inspectors">Inspectors</option>
                        </select>
                    </div>

                    {/* Resource Card */}
                    <div className="mt-4 border rounded p-3 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <FaUser />
                        </div>
                        <div>
                            <p className="text-gray-700 font-medium">Nirav</p>
                            <p className="text-gray-500 text-sm">Inspector</p>
                        </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                        <p>2 hr</p>
                        <p>
                            <FaRupeeSign className="inline-block" /> 100 ₹
                        </p>
                        <button className="text-gray-400 hover:text-gray-600">
                            <IoMdClose />
                        </button>
                        </div>
                    </div>
                    </div>

                    {/* Total & Footer */}
                    <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <div className="text-sm text-gray-600">
                        <p>
                        Total hour:{" "}
                        <span className="font-medium text-gray-700">
                            2 Hrs
                        </span>
                        </p>
                        <p>
                        Est Cost:{" "}
                        <span className="font-medium text-gray-700">
                            100 ₹
                        </span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100">
                        Close
                        </button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Re-Assign
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )}

        {isSidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[1000px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Item Details</h2>
                        <button onClick={() => setSidebarOpen(false)} className="text-xl">✖</button>
                    </div>

                    <div className="flex">
                        {/* Left Panel */}
                        <div className="w-1/3 mt-2">
                            <div className="border-2 p-4 rounded-lg">
                                <h2 className="text-lg text-center font-semibold mt-4">Moven Pick Second Floor</h2>
                                <div className="mt-2 text-sm text-gray-600">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Property Name:</strong></div>
                                        <div className="">Movenpick Jeddah Al Nawras</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Unit Location:</strong></div>
                                        <div className="">Jeddah</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Unit Type:</strong></div>
                                        <div className="">Commercial Use</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[1px] bg-gray-300 ml-2"></div>

                        {/* Right Panel */}
                        <div className="w-2/3">
                            <div className="bg-[#F2F5FA] p-4">
                                <div className="flex justify-between items-center">
                                    <div className="">ITEM AND ASSETS</div>
                                    <div className="">DETAILS</div>
                                </div>

                                {/* Notes Section */}
                                <div className="mt-4 border p-4 rounded-md bg-white">
                                    <h3 className="font-semibold">Notes</h3>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Manager</div>
                                        <div className="">
                                            <textarea
                                                className="w-full p-2 mt-2 border rounded-md h-24"
                                                placeholder="Type Notes here"
                                            ></textarea>
                                            <button className="w-full bg-blue-600 text-white p-2 rounded-md mt-2">
                                                Update Note
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Inspector</div>
                                        <div className="text-sm">-</div>
                                    </div>
                                    <h3 className="font-semibold">Penalty</h3>
                                    <div className="flex justify-between items-center bg-[#f1f7ff] rounded-md p-2">
                                        <div className="text-sm">Penalty Amount</div>
                                        {isEditing ? (
                                            <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                                            <input
                                                type="text"
                                                placeholder="Type Here..."
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="ml-2 bg-blue-500 text-white rounded px-2"
                                            >
                                                ✔️
                                            </button>
                                            </div>
                                        ) : (
                                            <span>
                                            {price}{" "}
                                            <span
                                                className="ml-2 cursor-pointer text-blue-500"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                ✏️
                                            </span>
                                            </span>
                                        )}
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Generate Invoice</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {show2Filter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    show2Filter ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShow2Filter(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">Assign Resource</h2>
                    <hr className="border-gray-300 mb-4" />
                    {/* General Inspection */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600 font-medium">
                            General Inspection
                        </span>
                        <select className="border rounded px-3 py-2 w-48 text-gray-700 text-sm">
                            <option value="Business Development">
                            Business Development
                            </option>
                            <option value="Inspection">Inspection</option>
                        </select>
                    </div>

                    {/* Step 1 */}
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold mb-2">
                            Step 1
                        </h3>
                        <div className="flex justify-between items-center gap-4">
                            {/* Start Date & Time */}
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">
                                    Start Date & Time
                                </label>
                                <div className="border rounded p-2 mt-1 flex items-center gap-2 text-gray-700">
                                    <FaClock />
                                    <span>14 Nov 24 16:30 pm</span>
                                </div>
                            </div>

                            {/* Projected Hours */}
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">
                                    Projected Hours
                                </label>
                                <div className="border rounded p-2 mt-1 flex items-center gap-2 text-gray-700">
                                    <input
                                    type="number"
                                    defaultValue="2"
                                    className="w-full border-none focus:outline-none"
                                    />
                                    <span>Hr</span>
                                </div>
                            </div>
                        </div>

                        {/* Scheduling */}
                        <div className="mt-4">
                            <span className="text-gray-600 text-sm">
                            Scheduling
                            </span>
                            <div className="mt-2 flex gap-2">
                                <button className="flex-1 py-2 text-center border rounded bg-blue-100 text-blue-600">
                                    Flexible
                                </button>
                                <button className="flex-1 py-2 text-center border rounded text-gray-600">
                                    Strict
                            </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100">
                        Close
                        </button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Assign
                        </button>
                    </div>

                </div>
            </div>
        )}

    </div>
  );
};

export default DetailsUnitReadiness;
