import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  FaClipboardList,
  FaCheckCircle,
  FaPhone,
  FaPencilAlt,
  FaClipboard,
  FaClock,
  FaUser,
  FaRupeeSign,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import img1 from "../images/img1.jpeg";

const GeneralInspectionView = () => {
  const handleBack = () => {
    window.history.back();
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopup1Visible, setIsPopup1Visible] = useState(false);
  const [isPopup2Visible, setIsPopup2Visible] = useState(false);
  const [isPopup3Visible, setIsPopup3Visible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const togglePopup1 = () => {
    setIsPopup1Visible(!isPopup1Visible);
  };
  const togglePopup2 = () => {
    setIsPopup2Visible(!isPopup2Visible);
  };
  const togglePopup3 = () => {
    setIsPopup3Visible(!isPopup3Visible);
  };

  const [showFilter, setShowFilter] = useState(false);

  const [show1Filter, setShow1Filter] = useState(false);

  return (
    <div>
      <div className="bg-white p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            <button onClick={handleBack} className="" aria-label="Go back">
              <ArrowBackIosIcon />
            </button>
            <span>IMJ241114-5459</span>
          </h1>
        </div>
      </div>

      <div className="min-h-screen md:p-4">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="p-4 border-r bg-white shadow-md rounded-lg">
              <div className="mb-4 flex items-start flex-wrap bg-[#eef9ee] rounded-lg shadow-md p-4">
                <div className="flex w-full mb-2">
                  <div className="flex-1">
                    <h2 className="text-sm font-semibold text-gray-700">
                      General Request Details
                    </h2>
                  </div>
                  <div className="flex-1 text-right">
                    <button
                      onClick={togglePopup}
                      className="text-sm font-semibold text-[#5086e4]"
                    >
                      {isPopupVisible ? "View Less" : "View More"}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <FaClipboardList className="w-4 h-4 text-white-600 mr-2" />
                  <div className="text-sm">MR0241112-757</div>
                </div>
              </div>

              {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-md shadow-md p-2 w-96 relative">
                    <h2 className="text-lg bg-gray-100 p-2 font-semibold text-gray-700 flex items-center">
                      General Request Details
                      <button
                        onClick={togglePopup}
                        className="ml-auto text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </h2>
                    <div className="flex items-center mt-4 p-2">
                      <FaClipboard className="text-green-500 w-6 h-6 mr-2" />
                      <p className="text-gray-700 font-medium">MR0241112-757</p>
                    </div>
                    <hr className="border-gray-300 mt-2 mb-3" />
                  </div>
                </div>
              )}

              <div className="mb-4 flex-wrap items-start border-gray-300 rounded-lg shadow p-4">
                <div className="flex w-full mb-2">
                  <div className="flex-1">
                    <h2 className="text-sm font-semibold text-gray-700">
                      Inspection Detail
                    </h2>
                  </div>
                  <div className="flex-1 text-right">
                    <button
                      onClick={togglePopup1}
                      className="text-sm font-semibold text-[#5086e4]"
                    >
                      {isPopup1Visible ? "View Less" : "View More"}
                    </button>
                  </div>
                </div>

                <div className="">
                  <FaCheckCircle className="w-4 h-4 text-gray-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-700">
                    IMO241114-1892
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Inspection on 14 Nov 24
                  </p>
                </div>
              </div>

              {isPopup1Visible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-md shadow-md p-2 w-96 relative">
                    <h2 className="text-lg bg-gray-100 p-2 font-semibold text-gray-700 flex items-center">
                      Inspection Detail
                      <button
                        onClick={togglePopup1}
                        className="ml-auto text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </h2>
                    <div className="flex items-center mt-4 p-2">
                      <FaClipboard className="text-green-500 w-6 h-6 mr-2" />
                      <p className="text-gray-700 font-medium">
                        IMO241114-1892
                        <br />
                        <span className="text-sm">Inspection on 14 Nov 24</span>
                      </p>
                    </div>
                    <hr className="border-gray-300 mt-2 mb-3" />
                    <span className="text-sm">Inspection place</span>
                    <div className="flex items-center p-2">
                      <FaClipboard className="text-green-500 w-6 h-6 mr-2" />
                      <p className="text-gray-700 font-medium">
                        UNIT24-977 / Majd- Villa A<br />
                        <span className="text-sm">
                          Majd Al Narges
                          <br />
                          Riyadh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="border-gray-300 rounded-lg shadow p-2">
                <div className="mb-4 flex-wrap items-start bg-[#eef9ee] rounded-lg shadow-md p-2">
                  <div className="flex w-full">
                    <div className="flex-1">
                      <h2 className="text-sm font-semibold text-gray-700">
                        Inspection Date & Time
                      </h2>
                    </div>
                    <div className="flex-1 text-right">
                      <h2 className="text-sm font-semibold">
                        14 Nov 24 16:30 PM
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex-wrap items-start pl-2 pr-2">
                  <div className="flex w-full mb-2">
                    <div className="flex-1">
                      <h2 className="text-sm font-semibold text-gray-700">
                        Resource Details
                      </h2>
                    </div>
                    <div className="flex-1 text-right">
                      <button
                        onClick={togglePopup2}
                        className="text-sm font-semibold text-[#5086e4]"
                      >
                        {isPopup2Visible ? "View Less" : "View More"}
                      </button>
                    </div>
                  </div>

                  <div>
                    <FaPhone className="w-6 h-6 text-gray-600 mr-2" />
                    <p className="mt-2 text-gray-700">Nirav</p>
                    <p className="text-sm text-gray-500">+91 987654321</p>
                  </div>
                </div>
              </div>

              {isPopup2Visible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-md shadow-md p-2 w-96 relative">
                    <h2 className="text-lg bg-gray-100 p-2 font-semibold text-gray-700 flex items-center">
                      Resource Details
                      <button
                        onClick={togglePopup2}
                        className="ml-auto text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </h2>
                    <div className="flex items-center mt-2 border-gray-300 rounded-lg shadow p-2">
                      <FaClipboard className="text-green-500 w-6 h-6 mr-2" />
                      <p className="text-gray-700 font-medium">
                        Nirav
                        <br />
                        <span className="text-sm">+91 987654321</span>
                      </p>
                    </div>
                    <button
                      onClick={() => setShow1Filter(true)}
                      className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      + Add Resource
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-4 flex-wrap items-start border-gray-300 rounded-lg shadow p-4 mt-4 mb-2">
                <div className="flex w-full mb-2">
                  <div className="flex-1">
                    <h2 className="text-sm font-semibold text-gray-700">
                      Track Update
                    </h2>
                  </div>
                  <div className="flex-1 text-right">
                    <button
                      onClick={togglePopup3}
                      className="text-sm font-semibold text-[#5086e4]"
                    >
                      {isPopup3Visible ? "View Less" : "View More"}
                    </button>
                  </div>
                </div>

                <div className="">
                  <FaCheckCircle className="w-4 h-4 text-gray-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-700">
                    Inspector Assigned
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    By Farooq Abdullah, 14 Nov 24 16:31 pm
                  </p>
                </div>
              </div>

              {isPopup3Visible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-md shadow-md p-2 w-96 relative">
                    <h2 className="text-lg bg-gray-100 p-2 font-semibold text-gray-700 flex items-center">
                      Track Update
                      <button
                        onClick={togglePopup3}
                        className="ml-auto text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </h2>
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
              )}

              <button className="w-full border-gray-300 rounded-lg shadow text-[#5086e4] py-2">
                Cancel
              </button>
            </div>

            {/* Main Content */}
            <div className="pl-2 w-full">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-start flex-wrap gap-12">
                <div className="">
                  <div className="flex">
                    <FaClipboardList className="w-8 h-8 text-white-600 mr-2" />
                    <div className="text-sm">
                      Majd- Villa A <br />
                      Majd Al Narges
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex">
                    <FaClipboardList className="w-8 h-8 text-white-600 mr-2" />
                    <div className="text-sm">
                      Majd- Villa A <br />
                      Majd Al Narges
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex">
                    <FaClipboardList className="w-8 h-8 text-white-600 mr-2" />
                    <div className="text-sm">
                      Majd- Villa A <br />
                      Majd Al Narges
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mt-2 text-left md:text-right">
                    <button
                      onClick={() => setShowFilter(true)}
                      className="text-sm font-semibold text-[#5086e4]"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-gray-300 rounded-lg shadow flex items-start flex-wrap mt-4">
                <div className="bg-white w-full p-4 flex items-start">
                  <FaPencilAlt className="w-6 h-6 text-gray-600 mr-2" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      Details
                    </h2>
                  </div>
                </div>

                <div className="w-full lg:p-4 mt-2 flex items-start">
                  <div className="bg-white w-full p-2 rounded-lg shadow">
                    <div className="flex">
                      <h2 className="text-lg font-semibold text-gray-700">
                        Notes
                      </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                      <div className="flex-1">
                        <h2 className="text-md font-semibold text-gray-700">
                          Manager
                        </h2>
                      </div>
                      <div className="flex-1">
                        <textarea
                          className="w-full h-24 border rounded p-2 text-sm text-gray-700"
                          placeholder="Type Notes here"
                        ></textarea>
                        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                          Update Note
                        </button>
                      </div>
                    </div>
                    <hr className="border-gray-300 mt-2 mb-1" />
                    <div className="flex justify-between items-center">
                      <h2 className="text-md font-semibold text-gray-700">
                        Inspector
                      </h2>
                      <span>-</span>
                    </div>
                    <hr className="border-gray-300 mt-2 mb-1" />
                    <div className="flex justify-between items-center">
                      <h2 className="text-md font-semibold text-gray-700">
                        Penalty
                      </h2>
                      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Generate Invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {showFilter && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                  <div
                    className={`bg-white w-96 h-full shadow-lg relative transform transition-transform duration-300 ${
                      showFilter ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    <div className="bg-gray-300 p-2 mb-4 flex">
                      <button
                        className="text-gray-600 hover:text-black"
                        onClick={() => setShowFilter(false)}
                      >
                        <FiX size={20} />
                      </button>
                      <h2 className="text-lg ml-2 font-semibold">UNIT24-977</h2>
                    </div>
                    <div className="p-4">
                      <div className="p-4 border-gray-300 rounded-lg shadow flex flex-wrap">
                        <img
                          src={img1}
                          className="w-[200px] h-auto ml-auto mr-auto rounded-xl shadow-xl"
                        />
                        <div className="w-full flex mt-2">
                          <h2 className="w-[50%]">Property name</h2>
                          <h2 className="text-right w-[50%]">Majd Al Narges</h2>
                        </div>
                        <hr className="border-gray-300 mt-2 w-full" />
                        <div className="w-full flex mt-2">
                          <h2 className="w-[50%]">Unit Location</h2>
                          <h2 className="text-right w-[50%]">Riyadh</h2>
                        </div>
                        <hr className="border-gray-300 mt-2 w-full" />
                        <div className="w-full flex mt-2">
                          <h2 className="w-[50%]">Unit Type</h2>
                          <h2 className="text-right w-[50%]">Villa</h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInspectionView;
