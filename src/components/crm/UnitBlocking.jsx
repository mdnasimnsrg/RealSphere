import React, { useState } from "react";
import { FiSearch, FiFilter, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";

const UnitBlocking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatuses] = useState([]);

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

  const handleOutsideClick = () => {
    setDropdownVisible(false);
    setSelectedRowId(null);
  };

  React.useEffect(() => {
    const handleClickOutside = () => handleOutsideClick();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const columns = [
    { name: "Unit ID", selector: (row) => row.UnitID },
    { name: "Unit name", selector: (row) => row.Unitname },
    { name: "Duration", selector: (row) => row.Duration },
    { name: "Purpose", selector: (row) => row.Purpose },
    { name: "Status", selector: (row) => row.status },
    {
      name: "Actions",
      cell: (row) => (
        <div className="relative flex flex-nowrap">
          <button
            onClick={(e) => handleEdit(e, row.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Approve
          </button>
          <button
            onClick={(e) => handleEdit(e, row.id)}
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Reject
          </button>
        </div>
      ),
      width: "fit-content",
    },
  ];

  const tableData = [
    {
      id: 1,
      UnitID: "UNIT24-812",
      Unitname: "Alexandria 3",
      Duration: "3 Days",
      Purpose: "Blocking for 3 days",
      status: "Pending",
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(row.status)
  );

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Unit Blocking</div>
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
            <option value="">Mohanadiah</option>
            <option value="">Retal Real Estate</option>
            <option value="">BlueWater</option>
          </select>
        </div>
      </div>

      <div className="p-2">
        <div className="bg-white shadow-md rounded-md overflow-x-auto p-4">
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
                <select className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                  <option value="">Select Status</option>
                  <option value="">Approved</option>
                  <option value="">Rejected</option>
                  <option value="">Pending</option>
                </select>
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

export default UnitBlocking;
