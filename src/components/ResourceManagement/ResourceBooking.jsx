import React, { useState } from "react";
import { FiSearch, FiFilter, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const ResourcesBooking = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [selectedStatuses] = useState([]);     

    const tableData = [
        {
            id: "1",
            jobid: "IMJ250109-5771",
            date: "09 jan 25",
            name: "Nirav",
            Job: "Inspector",
            type: "Move In",
            startdatetime: "09 Jan 25 06:37 PM",
            enddatetime: "09 Jan 25 07:37 PM",
            ProposedHours: "1.00 Hrs",
        },
        {
            id: "2",
            jobid: "IMJ250109-5771",
            date: "09 jan 25",
            name: "Nirav",
            Job: "Inspector",
            type: "Move In",
            startdatetime: "09 Jan 25 06:37 PM",
            enddatetime: "09 Jan 25 07:37 PM",
            ProposedHours: "1.00 Hrs",
        },
        {
            id: "3",
            jobid: "IMJ250109-5771",
            date: "09 jan 25",
            name: "Nirav",
            Job: "Inspector",
            type: "Move In",
            startdatetime: "09 Jan 25 06:37 PM",
            enddatetime: "09 Jan 25 07:37 PM",
            ProposedHours: "1.00 Hrs",
        },
        {
            id: "4",
            jobid: "IMJ250109-5771",
            date: "09 jan 25",
            name: "Nirav",
            Job: "Inspector",
            type: "Move In",
            startdatetime: "09 Jan 25 06:37 PM",
            enddatetime: "09 Jan 25 07:37 PM",
            ProposedHours: "1.00 Hrs",
        },
        {
            id: "5",
            jobid: "IMJ250109-5771",
            date: "09 jan 25",
            name: "Nirav",
            Job: "Inspector",
            type: "Move In",
            startdatetime: "09 Jan 25 06:37 PM",
            enddatetime: "09 Jan 25 07:37 PM",
            ProposedHours: "1.00 Hrs",
        },
    ];

    const columns = [
        {
            name: "Job Id",
            selector: (row) => row.jobid,
            cell: (row) => (
                <Link
                  className="text-blue-500 hover:text-blue-700"
                  to={`/resource-booking-details`}
                >
                  {row.jobid}
                </Link>
            ),
        },
        {
            name: "Date",
            selector: (row) => row.date,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Job/Position",
            selector: (row) => row.Job,
        },
        {
            name: "Job Type",
            selector: (row) => row.type,
        },
        {
            name: "Start Date & Time",
            selector: (row) => row.startdatetime,
        },
        {
            name: "End Date & Time",
            selector: (row) => row.enddatetime,
        },
        {
            name: "Proposed Hours",
            selector: (row) => row.ProposedHours,
        },
    ];

    const filteredData = tableData.filter(
        (row) =>
          row.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
    );

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Resource Booking</div>
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiUser className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="businessDev">Business Development</option>
                </select>
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
                            placeholder="Search Resources"
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
                    <label className="block text-gray-700 font-medium mb-2">Job</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Job</option>
                    </select>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Job Type</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Job Type</option>
                    </select>
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

export default ResourcesBooking;
