import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiEdit, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const MaintenanceServiceRequests = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

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

    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
          e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };      

    const tableData = [
        {
            id: 1,
            status: "Open",
            requestId: "MR0250209-810",
            description: "leak",
            propertyName: "Retal Real Estate",
            unitName: "home 1",
            assetName: "-",
            category: "Plumbing",
            subCategory: "General Plumbing Issue",
            contactName: "ahmad",
            contactNumber: "+9199999999999",
            priority: "Medium",
            Location: "Bedroom",
            Source: "Manager",
            Jobs: "0",
            RaisedOn: "09 Feb 25",
            DateClosed: "-",
        },
        {
            id: 2,
            status: "Assigned",
            requestId: "MR0241112-757",
            description: "electric",
            propertyName: "Majd Al Narges",
            unitName: "Majd- Villa A",
            assetName: "-",
            category: "Electrical",
            subCategory: "Electrical Minor Works",
            contactName: "leora",
            contactNumber: "+917965425856",
            priority: "Medium",
            Location: "Kids Room",
            Source: "Owner",
            Jobs: "1",
            RaisedOn: "12 Nov 24",
            DateClosed: "-",
        },
    ];

    const columns = [
        {
            name: "Action",
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
                                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">
                                    <Link to="/edit-maintance-service-request" className="block w-full">
                                        Edit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ),
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "Request ID",
            //selector: (row) => row.requestId,
            selector: (row) => (
                <Link to={`/maintenance-service-request-view`}>
                    {row.requestId} 
                </Link>
            ),
        },
        {
            name: "Description",
            selector: (row) => row.description,
        },
        {
            name: "Property Name",
            selector: (row) => row.propertyName,
        },
        {
            name: "Unit Name",
            selector: (row) => row.unitName,
        },
        {
            name: "Asset Name",
            selector: (row) => row.assetName,
        },
        {
            name: "Category",
            selector: (row) => row.category,
        },
        {
            name: "SubCategory",
            selector: (row) => row.subCategory,
        },
        {
            name: "Contact Name",
            selector: (row) => row.contactName,
        },
        {
            name: "Contact Number",
            selector: (row) => row.contactNumber,
        },
        {
            name: "Priority",
            selector: (row) => row.priority,
        },
        {
            name: "Location",
            selector: (row) => row.Location,
        },
        {
            name: "Source",
            selector: (row) => row.Source,
        },
        {
            name: "Jobs",
            selector: (row) => row.Jobs,
        },
        {
            name: "Raised On",
            selector: (row) => row.RaisedOn,
        },
        {
            name: "Date Closed",
            selector: (row) => row.DateClosed,
        },
    ];

    const filteredData = tableData.filter(
        (row) =>
          row.requestId.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
      );

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Maintenance Requests (35)</div>

            <div className="flex flex-wrap items-center gap-4">

                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select
                        className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="businessDev">Business Development</option>
                    </select>
                </div>

            </div>
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
                        <button className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            <Link to="/create-maintenance-service-request">Add Request</Link>
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
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Unit</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Unit</option>
                    <option>Unit A</option>
                    <option>Unit B</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <div className="flex flex-wrap gap-2">
                        {["Reopened", "Open", "Assigned", "Resolved", "Cancelled"].map((status, index) => (
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

    </div>
  );
};

export default MaintenanceServiceRequests;
