import React, { useState } from "react";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const DetailsOnboardMoveIn = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);   

    const tableData = [
        {
            JobId: "IMJ250109-5771",
            Category: "Residential",
            UnitNumber: "UNIT25-1185",
            InspectorName: "Nirav",
            Projected: "1",
            Actual: "<1 hr",
            Others: "0",
            AssignedBy: "Farooq Abdullah",
            ExecutionDate: "09 Jan 2025",
            CompletedOn: "09 Jan 2025",
            KPI: "Delayed",
            JobStatus: "Completed",
        },
    ];

    const columns = [
        {
            name: "Job Id",
            //selector: (row) => row.status,
            selector: (row) => (
                <Link to={`/onboard-move-inner-details`}>
                    {row.JobId} 
                </Link>
            ),
        },
        {
            name: "Category",
            selector: (row) => row.Category,
        },
        {
            name: "Unit Number",
            selector: (row) => row.UnitNumber,
        },
        {
            name: "Inspector Name",
            selector: (row) => row.InspectorName,
        },
        {
            name: "Projected",
            selector: (row) => row.Projected,
        },
        {
            name: "Actual",
            selector: (row) => row.Actual,
        },
        {
            name: "Others",
            selector: (row) => row.Others,
        },
        {
            name: "Assigned By",
            selector: (row) => row.AssignedBy,
        },
        {
            name: "Execution Date",
            selector: (row) => row.ExecutionDate,
        },
        {
            name: "Completed On",
            selector: (row) => row.CompletedOn,
        },
        {
            name: "KPI",
            selector: (row) => row.KPI,
        },
        {
            name: "Job Status",
            selector: (row) => row.JobStatus,
        },
    ];

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [resource, setResource] = useState("");

    const handleBack = () => {
        window.history.back();
    };

    const Card = ({ icon, title, content, subContent }) => {
        return (
          <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center space-x-4">
            <div className="text-gray-500 text-2xl">{icon}</div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{title}</p>
              <p className="text-lg font-semibold text-gray-800">{content}</p>
              {subContent && <p className="text-gray-500 text-sm">{subContent}</p>}
            </div>
          </div>
        );
    };

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
                <span>IMO250109-2014</span>
            </h1>
        </div>

        <div className="flex space-x-4 p-4 overflow-x-auto">
            <Card
                icon={"📋"}
                title="Inspection Order"
                content="IMO250109-2014"
                subContent="Farooq Abdullah | 09 Jan 2025"
            />
            <Card
                icon={<img src="https://via.placeholder.com/40" alt="" className="rounded-full w-10 h-10" />}
                title="Primary Contact"
                content="Aziel"
                subContent="aziel@yopmail.com"
            />
            <Card
                icon={"📄"}
                title="Agreement Detail"
                content="AGR250109-518"
                subContent="09 Jan 2025 - 08 Jan 2026"
            />
            <Card
                icon={"🏢"}
                title="Property Details"
                content="Serenity Towers"
                subContent="Chennai, India"
            />
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
                            placeholder="Search Inspections"
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
                    <label className="text-gray-700 font-medium">Resource</label>
                    <select
                     value={resource}
                     onChange={(e) => setResource(e.target.value)}
                     className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Resource</option>
                    </select>
                </div>
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

    </div>
  );
};

export default DetailsOnboardMoveIn;
