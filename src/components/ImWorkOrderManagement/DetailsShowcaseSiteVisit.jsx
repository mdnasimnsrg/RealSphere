import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IoMdClose } from "react-icons/io";
import {
    FaClipboard,
    FaClock,
    FaUser,
    FaRupeeSign,
  } from "react-icons/fa";

const DetailsShowcaseSiteVisit = () => {
    const handleBack = () => {
        window.history.back();
    };

    const [isEditing, setIsEditing] = useState(false);
    const [price, setPrice] = useState("0 SAR");

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen1, setIsPopupOpen1] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const [show1Filter, setShow1Filter] = useState(false);

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
                {/* Resource Details */}
                <div className="mb-4 border-2 shadow-md rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-gray-500 text-sm">Resource Details</h2>
                        <button
                            onClick={() => setIsPopupOpen1(!isPopupOpen1)}
                            className="text-blue-600 text-sm"
                        >
                            {isPopupOpen1 ? "View Less" : "View More"}
                        </button>
                    </div>
                    <div className="bg-green-100 text-green-700 p-2 rounded-md text-sm">
                        Inspection Date & Time: 13 Sep 24 10:00 AM
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Lydia</p>
                            <p className="text-gray-500 text-sm">+91 7550015515</p>
                        </div>
                    </div>
                </div>
                {/* Track Update */}
                <div className="mb-4 border-2 shadow-md rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-gray-500 text-sm">Track Update</h2>
                        <button
                            onClick={() => setIsPopupOpen2(!isPopupOpen2)}
                            className="text-blue-600 text-sm"
                        >
                            {isPopupOpen2 ? "View Less" : "View More"}
                        </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Inspector Assigned</p>
                            <p className="text-gray-500 text-sm">By Negan, 13 Sep 24 10:10 AM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-3/4 bg-white flex flex-col">
                <h2 className="text-blue-600 font-semibold text-lg mt-2 pb-4 pl-4 border-b">Details</h2>
                <div className="bg-gray-300 p-4">
                    <div className="bg-white rounded-lg p-4">
                        {/* Notes Section */}
                        <div>
                            <h2 className="text-lg font-semibold">Notes</h2>
                            <p className="text-sm text-gray-500">Manager</p>
                            <textarea
                                className="w-full p-2 mt-2 border rounded-md h-24"
                                placeholder="Type Notes here"
                            ></textarea>
                            <button className="w-full bg-blue-600 text-white p-2 rounded-md mt-2">
                                Update Note
                            </button>
                        </div>
                        <hr className="border-gray-300 mb-4" />
                        <div className="flex justify-between items-center border-b pb-2">
                            <div className="text-sm">Inspector</div>
                            <div className="text-sm">-</div>
                        </div>
                        <hr className="border-gray-300 mb-4" />
                        {/* Penalty Section */}
                        <div>
                            <h2 className="text-sm font-semibold">Penalty</h2>
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

        {isPopupOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg w-96">
                    <div className="flex bg-gray-300 justify-between items-center border-b p-2">
                        <h2 className="text-lg font-semibold">Resource Details</h2>
                        <button onClick={() => setIsPopupOpen1(false)} className="text-gray-500">✕</button>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 mt-2 mb-4">
                            <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                            <div>
                                <p className="font-semibold">Lydia</p>
                                <p className="text-gray-500 text-sm">+91 7550015515</p>
                            </div>
                        </div>
                        <button onClick={() => setShow1Filter(true)} className="w-full bg-blue-600 text-white p-2 rounded-md mt-2">
                            + Add Resource
                        </button>
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

        {isPopupOpen2 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg w-96">
                    <div className="flex bg-gray-300 justify-between items-center border-b p-2">
                        <h2 className="text-lg font-semibold">Inspection Detail</h2>
                        <button onClick={() => setIsPopupOpen2(false)} className="text-gray-500">✕</button>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center mt-4 p-2">
                            <FaClipboard className="text-green-500 w-6 h-6 mr-2" />
                            <p className="text-gray-700 font-medium">
                                Inspector Assigned
                                <br />
                                <span className="text-sm">
                                    14-11-2024 04:31 PM | Farooq Abdullah
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center p-2">
                            <FaClipboard className="text-green-500 w-6 h-6 mr-2" />
                            <p className="text-gray-700 font-medium">
                            Inspection Created
                            <br />
                            <span className="text-sm">
                                14-11-2024 04:30 PM | Farooq Abdullah
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default DetailsShowcaseSiteVisit;
