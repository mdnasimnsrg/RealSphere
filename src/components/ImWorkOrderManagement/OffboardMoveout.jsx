import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const OffboardMoveOut = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);   

    const tableData = [
        {
            orderId: "IMO250109-2014",
            agreementId: "AGR250109-518",
            Requestedon: "09 Jan 2025",
            Requestedby: "Farooq Abdullah",
            Jobs: "1",
            Status: "Completed",
            CompletionDate: "09 Jan 2025",
        },
    ];

    const columns = [
        {
            name: "Inspection Order Id",
            //selector: (row) => row.status,
            selector: (row) => (
                <Link to={`/offboard-move-out-details`}>
                    {row.orderId} 
                </Link>
            ),
        },
        {
            name: "Agreement Id",
            selector: (row) => row.agreementId,
        },
        {
            name: "Requested on",
            selector: (row) => row.Requestedon,
        },
        {
            name: "Requested by",
            selector: (row) => row.Requestedby,
        },
        {
            name: "Jobs",
            selector: (row) => row.Jobs,
        },
        {
            name: "Status",
            selector: (row) => row.Status,
        },
        {
            name: "Completion Date",
            selector: (row) => row.CompletionDate,
        },
    ];

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [completionDate, setCompletionDate] = useState("");

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Offboard and Move-out</div>

            <div className="flex flex-wrap items-center gap-4">

                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select
                        className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="">Business Development</option>
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
                            placeholder="Search Move Out Requests"
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
                    data={tableData}
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
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Requested On</label>
                    <div className="flex space-x-2 mt-1">
                        <div className="relative w-1/2">
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div className="relative w-1/2">
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2" />
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Status</label>
                    <select
                     value={status}
                     onChange={(e) => setStatus(e.target.value)}
                     className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Completion Date</label>
                    <div className="relative mt-1">
                    <input type="date" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2" />
                    </div>
                </div>
                <hr className="border-gray-300 mb-4" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

    </div>
  );
};

export default OffboardMoveOut;
