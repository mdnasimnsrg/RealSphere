import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const Accounts = () => {
  const blankuser = process.env.PUBLIC_URL + "/images/blankuser.png";
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <div className="flex">
          <Link to="/accountDetails" className="block self-center mr-2">
            <InfoOutlinedIcon />
          </Link>
          <img
            src={row.image}
            alt="Profile"
            style={{ width: 30, height: 30, borderRadius: "50%" }}
          />
        </div>
      ),
    },
    { name: "Account ID", selector: (row) => row.accountId },
    { name: "Name", selector: (row) => row.name },
    { name: "Email", selector: (row) => row.email },
    { name: "Mobile Number", selector: (row) => row.mobileNumber },
    { name: "Relationship", selector: (row) => row.relationship },
  ];

  const tableData = [
    {
      id: 1,
      image: blankuser, // Replace with the actual image URL or path
      accountId: "A-336",
      name: "Marcellus",
      email: "marcellus@yopmail.com",
      mobileNumber: "+91 9876534567",
      relationship: "Customer",
    },
    {
      id: 1,
      image: blankuser, // Replace with the actual image URL or path
      accountId: "A-336",
      name: "Marcellus",
      email: "marcellus@yopmail.com",
      mobileNumber: "+91 9876534567",
      relationship: "Customer",
    },
    {
      id: 1,
      image: blankuser, // Replace with the actual image URL or path
      accountId: "A-336",
      name: "Marcellus",
      email: "marcellus@yopmail.com",
      mobileNumber: "+91 9876534567",
      relationship: "Customer",
    },
    {
      id: 1,
      image: blankuser, // Replace with the actual image URL or path
      accountId: "A-336",
      name: "Marcellus",
      email: "marcellus@yopmail.com",
      mobileNumber: "+91 9876534567",
      relationship: "Customer",
    },
    {
      id: 1,
      image: blankuser, // Replace with the actual image URL or path
      accountId: "A-336",
      name: "Marcellus",
      email: "marcellus@yopmail.com",
      mobileNumber: "+91 9876534567",
      relationship: "Customer",
    },
    {
      id: 1,
      image: blankuser, // Replace with the actual image URL or path
      accountId: "A-336",
      name: "Marcellus",
      email: "marcellus@yopmail.com",
      mobileNumber: "+91 9876534567",
      relationship: "Customer",
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(row.status)
  );

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Accounts</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 flex flex-wrap gap-4">
        <div className="w-full lg:w-[68%]">
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
              <div className="flex w-full md:w-auto gap-2 flex-1">
                <div className="flex w-auto">
                  <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                    <FiSearch className="text-gray-600" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search Account"
                    className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full md:w-auto gap-2 justify-start md:justify-end">
                <button
                  className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                  onClick={() => setShowFilter(true)}
                >
                  <FiFilter className="mr-2 text-gray-600" />
                </button>
                <Link
                  to="/create-accounts"
                  className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  New Account
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                striped
                responsive
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Account Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-green-100 p-4 rounded flex items-center gap-4">
                <div className="bg-green-500 p-2 rounded-full text-white">
                  &#x1F4B8;
                </div>
                <div>
                  <p className="text-sm">Total Revenue For This Year</p>
                  <h3 className="text-lg font-bold">₹0</h3>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded flex items-center gap-4">
                <div className="bg-blue-500 p-2 rounded-full text-white">
                  &#x1F4C3;
                </div>
                <div>
                  <p className="text-sm">Total Unbilled For This Year</p>
                  <h3 className="text-lg font-bold">₹0</h3>
                </div>
              </div>
              <div className="bg-orange-100 p-4 rounded flex items-center gap-4">
                <div className="bg-orange-500 p-2 rounded-full text-white">
                  &#x1F4C8;
                </div>
                <div>
                  <p className="text-sm">Total Received For This Year</p>
                  <h3 className="text-lg font-bold">₹0</h3>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded flex items-center gap-4">
                <div className="bg-gray-500 p-2 rounded-full text-white">
                  &#x231B;
                </div>
                <div>
                  <p className="text-sm">Total Pending For This Year</p>
                  <h3 className="text-lg font-bold">₹0</h3>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded flex items-center gap-4">
                <div className="bg-blue-500 p-2 rounded-full text-white">
                  &#x1F4C3;
                </div>
                <div>
                  <p className="text-sm">Valid Agreements</p>
                  <h3 className="text-md font-semibold">
                    0 (Current), 0 (Upcoming
                  </h3>
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
                Unit
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Unit</option>
                <option>Unit A</option>
                <option>Unit B</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {["Reopened", "Open", "Assigned", "Resolved", "Cancelled"].map(
                  (status, index) => (
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
                  )
                )}
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

export default Accounts;
