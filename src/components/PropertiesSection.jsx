import React, { useState } from "react";
import { FiUser, FiFilter, FiX } from "react-icons/fi";
import { FaHome, FaUserAlt, FaBuilding, FaHouseUser } from "react-icons/fa";
import img1 from "../images/property/img1.webp";
import img2 from "../images/property/img2.jpeg";
import img3 from "../images/property/img3.jpeg";
import img4 from "../images/property/img4.jpeg";

const PropertiesSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const data = [
    {
      id: "PROP25-324",
      name: "Serenity Towers",
      location: "Mukta Gardens, Chennai",
      purpose: "District Association",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-323",
      name: "Verzon Properties",
      location: "Karapakkam, Kancheepuram",
      purpose: "District Association",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-300",
      name: "Commercial",
      location: "Chennai, Chennai",
      purpose: "Private Properties",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-298",
      name: "Al Reem",
      location: "Hayy As Saruj, Muscat",
      purpose: "Private Properties",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-297",
      name: "Business Center",
      location: "Al Khuwair South, Muscat",
      purpose: "Home Owner Association",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-292",
      name: "Falcon Workspace",
      location: "Anna Salai, Chennai",
      purpose: "Home Owner Association",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-291",
      name: "Saooj Villa",
      location: "250, Muscat",
      purpose: "District Association",
      hierarchy: "Single Unit",
    },
    {
      id: "PROP24-290",
      name: "Green Valley",
      location: "Delhi, India",
      purpose: "Apartment Owner",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-289",
      name: "Blue Sky Tower",
      location: "Mumbai, India",
      purpose: "Private Properties",
      hierarchy: "Multiunit",
    },
    {
      id: "PROP24-288",
      name: "Skyline",
      location: "Bangalore, India",
      purpose: "District Association",
      hierarchy: "Single Unit",
    },
    {
      id: "PROP24-287",
      name: "Urban Square",
      location: "Kolkata, India",
      purpose: "Private Properties",
      hierarchy: "Multiunit",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Properties</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen">
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-md overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <input
              type="text"
              placeholder="Search Properties"
              className="p-2 border rounded-md w-full max-w-md"
            />
            <button
              className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
              onClick={() => setShowFilter(true)}
            >
              <FiFilter className="mr-2 text-gray-600" />
            </button>
          </div>
          <div className="w-full overflow-x-auto md:p-3 sc-fkSzgi">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-nowrap">
                  <th className="p-3 border">Property ID</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">Purpose</th>
                  <th className="p-3 border">Hierarchy</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-3 border">{row.id}</td>
                    <td className="p-3 border">{row.name}</td>
                    <td className="p-3 border">{row.location}</td>
                    <td className="p-3 border">
                      <span
                        className={`px-2 py-1 rounded-md ${
                          row.purpose === "District Association"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {row.purpose}
                      </span>
                    </td>
                    <td className="p-3 border">{row.hierarchy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center p-4 border-t">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <div>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`px-3 py-1 mx-1 rounded-md ${
                      page === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4 bg-white shadow-md rounded-md p-4 overflow-y-auto">
          {/* Images */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="col-span-2">
              <img
                src={img1}
                alt="Property"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="col-span-1 space-y-2">
              <img
                src={img2}
                alt="Property"
                className="w-full h-auto rounded-md"
              />
              <img
                src={img3}
                alt="Property"
                className="w-full h-auto rounded-md"
              />
              <img
                src={img4}
                alt="Property"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
          {/* Details */}
          <div className="flex items-center gap-3">
            <img
              src={img1}
              alt="Property"
              className="w-20 h-20 rounded-full"
            />
            <h2 className="flex-1 text-lg font-bold">Serenity Towers</h2>
          </div>

          <div className="mt-4">
            {/* Info Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center text-sm space-x-2">
                    <FaBuilding className="text-gray-500" />
                    <span>03 Jun 24 Build</span>
                  </span>
                  <span className="flex items-center text-sm space-x-2">
                    <FaHouseUser className="text-gray-500" />
                    <span>Apartment</span>
                  </span>
                  <span className="flex items-center text-sm space-x-2">
                    <FaUserAlt className="text-gray-500" />
                    <span>Lease</span>
                  </span>
                </div>
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            {/* Contact Section */}
            <div className="text-sm mb-6">
              <div className="flex items-center space-x-2">
                <FaHome className="text-gray-500" />
                <span>25/12, Chennai, India, -600031.</span>
              </div>

              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <div className="flex-1 text-nowrap">
                  <div className="flex gap-2 items-center">
                    <FaHome className="text-blue-500" />
                    <span>+91-9789016376</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaHome className="text-blue-500" />
                    <span>+91-9442431432</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-2 items-center">
                    <FaHome className="text-gray-500" />
                    <span>manager@propgot.com</span>
                  </div>{" "}
                  <div className="flex gap-2 items-center">
                    <FaHome className="text-gray-500" />
                    <span>www.propertyautomate.com</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />

            {/* Stats Section */}
            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4">
              <StatCard
                icon={<FaHome className="text-orange-500 text-2xl" />}
                value={2}
                label="Active Units"
              />
              <StatCard
                icon={<FaUserAlt className="text-red-500 text-2xl" />}
                value={0}
                label="Vacant Units"
              />
              <StatCard
                icon={<FaBuilding className="text-blue-500 text-2xl" />}
                value={0}
                label="Listed Units"
              />
              <StatCard
                icon={<FaHouseUser className="text-pink-500 text-2xl" />}
                value={1}
                label="Occupied Units"
              />
            </div>

            <div className="">
              <div className="bg-gray-100 rounded-lg p-4 space-y-4 mt-2">
                <div className="flex items-center">
                  <div className="text-pink-500 text-xl mr-4">🏢</div>
                  <div>
                    <span className="text-gray-600 font-medium">
                      Total Property Area
                    </span>
                    <div className="text-black font-bold">3500 Sq. Meter</div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <div className="text-blue-500 text-xl mr-4">🅿️</div>
                    <span className="text-gray-600 font-medium">
                      No. Of Parking Slot
                    </span>
                  </div>
                  <div className="text-black font-bold">0</div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <div className="text-blue-500 text-xl mr-4">🏊‍♂️</div>
                    <span className="text-gray-600 font-medium">
                      No. Of Swimming Pools
                    </span>
                  </div>
                  <div className="text-black font-bold">0</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-orange-500 text-xl mr-4">🏗️</div>
                    <span className="text-gray-600 font-medium">
                      Number of Elevators
                    </span>
                  </div>
                  <div className="text-black font-bold">0</div>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-bold text-gray-700 mb-4">
                  Unit Type
                </h2>
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-bold text-gray-700 mb-4">
                  Unit Category
                </h2>
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div>
              <h3>Properties Amenities</h3>
              <div className="flex mt-3 gap-3 flex-wrap text-nowrap">
                <div className="flex-1 bg-gray-100 rounded-lg p-4">
                  Swimming Pool
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-4">
                  Shuttle court
                </div>
              </div>
            </div>
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
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Property Type
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Property Type</option>
                <option>Amusement Park</option>
                <option>Banks and ATM</option>
                <option>Apartment</option>
                <option>Barn</option>
                <option>Bed & Breakfast</option>
                <option>Boat</option>
                <option>Building</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Property Hierarchy
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Property Hierarchy</option>
                <option>Single Unit</option>
                <option>Multiunit</option>
                <option>Blockwise Multiunit</option>
                <option>Floorwise Multiunit</option>
                <option>Custom Level 1</option>
                <option>Custom Level 2</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Property Purpose
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Property Purpose</option>
                <option>Commercial</option>
                <option>Mixed</option>
                <option>Residential</option>
                <option>Stay</option>
                <option>Facilities</option>
              </select>
            </div>
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
                    <input type="checkbox" value={status} className="hidden" />
                    {status}
                  </label>
                ))}
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
    <div className="p-2 mb-2 rounded-full bg-gray-50">{icon}</div>
    <h3 className="text-xl font-semibold">{value}</h3>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default PropertiesSection;
