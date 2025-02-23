import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiEdit, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const GeneralRequests = () => {
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
            id: 1,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 2,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 3,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 4,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 5,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 6,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 7,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 8,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 9,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 10,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 11,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
        {
            id: 12,
            status: "Open",
            requestId: "GR0250115-231",
            description: "pl do the needful",
            propertyName: "Serenity Towers",
            unitName: "Unit -2 (Sale)",
            category: "House Keeping",
            source: "Owner",
            raisedOn: "15 Jan 2025",
        },
    ];

    const columns = [
        {
            name: "Action",
            cell: (row) => (
            <button
                onClick={() => handleEdit(row)}
                className="text-blue-500 hover:text-blue-700"
            >
                <FiEdit />
            </button>
            ),
            width: "80px",
        },
        {
            name: "Status",
            selector: (row) => (
                <Link to={`/generalrequestview`}>
                    {row.status} 
                </Link>
            ),
        },
        {
            name: "Request ID",
            selector: (row) => row.requestId,
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
            name: "Category",
            selector: (row) => row.category,
        },
        {
            name: "Source",
            selector: (row) => row.source,
        },
        {
            name: "Raised On",
            selector: (row) => row.raisedOn,
        },
    ];

    const handleEdit = (row) => {
        alert(`Editing row: ${row.requestId}`);
    };

    const filteredData = tableData.filter(
        (row) =>
          row.requestId.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
      );

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">General Requests (27)</div>

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
                            <Link to="/create-general-request">Add Request</Link>
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

export default GeneralRequests;
