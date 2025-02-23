import React, { useState } from "react";
import { FiSearch, FiFilter, FiEdit, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";

const TaxItem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  const tableData = [
    {
      id: "1",
      taxgroup: "KSA Vat 15 %",
      TaxItem: "KSA Vat 15 %",
      TaxGroupCode: "VAT",
      Rate: "15",
      status: "Active",
    },
    {
      id: "2",
      taxgroup: "KSA Vat 15 %",
      TaxItem: "KSA Vat 15 %",
      TaxGroupCode: "VAT",
      Rate: "15",
      status: "Active",
    },
    {
      id: "3",
      taxgroup: "KSA Vat 15 %",
      TaxItem: "KSA Vat 15 %",
      TaxGroupCode: "VAT",
      Rate: "15",
      status: "Active",
    },
    {
      id: "4",
      taxgroup: "KSA Vat 15 %",
      TaxItem: "KSA Vat 15 %",
      TaxGroupCode: "VAT",
      Rate: "15",
      status: "Active",
    },
    {
      id: "5",
      taxgroup: "KSA Vat 15 %",
      TaxItem: "KSA Vat 15 %",
      TaxGroupCode: "VAT",
      Rate: "15",
      status: "Active",
    },
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleEdit = (e, id) => {
    e.stopPropagation();
    if (selectedRowId === id) {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(true);
    }
    setSelectedRowId(id);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleModal2 = () => setIsOpen2(!isOpen2);

  const columns = [
    {
      name: "Tax Group",
      selector: (row) => row.taxgroup,
      cell: (row) => (
        <button
          onClick={() => toggleModal1(row.taxgroup)}
          className="text-blue-500 hover:text-blue-700"
        >
          {row.taxgroup}
        </button>
      ),
    },
    {
      name: "Tax Item",
      selector: (row) => row.TaxItem,
    },
    {
      name: "Tax Group Code",
      selector: (row) => row.TaxGroupCode,
    },
    {
      name: "Rate",
      selector: (row) => row.Rate,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "",
      cell: (row) => (
        <div className="relative">
          <button
            onClick={(e) => handleEdit(e, row.id)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </button>
          {dropdownVisible && selectedRowId === row.id && (
            <div className="absolute z-10 bg-white shadow-md rounded-md p-1 mt-2 w-[80px]">
              <ul className="text-sm text-gray-700">
                <li
                  className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                  onClick={() => toggleModal2(row.id)}
                >
                  Edit
                </li>
                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">
                  Inactive
                </li>
                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      ),
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      row.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
  );

  const [isOpen, setIsOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const toggleModal1 = () => setIsOpen1(!isOpen1);

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

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Tax Item</div>
      </div>

      <div className="p-2">
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
            <div className="flex w-full md:w-auto gap-2 flex-1">
              <div className="flex w-auto">
                <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                  <FiSearch className="text-gray-600" />
                </button>
                <input
                  type="text"
                  placeholder="Search by ID"
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
              <button
                onClick={toggleModal}
                className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Tax Item
              </button>
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
          <div className="bg-white  rounded-lg shadow-lg p-6 w-full lg:w-3/4 lg:max-w-4xl max-h-[90vh] overflow-y-scroll scrollbar-hide">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Add Tax Item</h2>
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
                  Country
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Country</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Tax Group
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Tax Group</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Tax Item
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  TAX Group Code
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select TAX Group Code</option>
                  <option>Sales Tax</option>
                  <option>GST</option>
                  <option>VAT</option>
                  <option>SST</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Rate
                </label>
                <input
                  type="text"
                  placeholder="Enter Rate"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-500">Status</p>
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Create
            </button>
          </div>
        </div>
      )}

      {isOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">View Tax Item</h2>
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
                  Country
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  <option>Saudi Arabia</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Tax Group
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  <option>KSA Vat 15 %</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Tax Item
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value="KSA Vat 15 %"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  TAX Group Code
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  <option>VAT</option>
                  <option>Sales Tax</option>
                  <option>GST</option>
                  <option>VAT</option>
                  <option>SST</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Rate
                </label>
                <input
                  type="text"
                  placeholder="Enter Rate"
                  value="15"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-500">Status</p>
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
        </div>
      )}

      {isOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Edit Tax Item</h2>
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
                  Country
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  <option>Saudi Arabia</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Tax Group
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  <option>KSA Vat 15 %</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Tax Item
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value="KSA Vat 15 %"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  TAX Group Code
                </label>
                <select
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  <option>VAT</option>
                  <option>Sales Tax</option>
                  <option>GST</option>
                  <option>VAT</option>
                  <option>SST</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Rate
                </label>
                <input
                  type="text"
                  placeholder="Enter Rate"
                  value="15"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-500">Status</p>
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
            <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxItem;
