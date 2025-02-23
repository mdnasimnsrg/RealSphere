import React, { useState } from "react";
import { FiSearch, FiFilter, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ResourceGroup = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [showFilter1, setShowFilter1] = useState(false);
    const [showFilter2, setShowFilter2] = useState(false);
    const [showFilter3, setShowFilter3] = useState(false);
    const [setSelectedStatuses] = useState([]);

    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
          e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };      

    const tableData = [
        {
            id: "1",
            GroupId: "RG-0015",
            Name: "Al Khuwair",
            JobRoles: "0",
            ProfessionSkills: "0",
            Resources: "1",
            CreatedOn: "02-Nov-2024",
            LastModificationOn: "02-Nov-2024",
            status: "Active",
        },
        {
            id: "2",
            GroupId: "RG-0014",
            Name: "Ruwi",
            JobRoles: "0",
            ProfessionSkills: "0",
            Resources: "1",
            CreatedOn: "02-Nov-2024",
            LastModificationOn: "02-Nov-2024",
            status: "Active",
        },
        {
            id: "3",
            GroupId: "RG-0013",
            Name: "Air Condition",
            JobRoles: "0",
            ProfessionSkills: "1",
            Resources: "1",
            CreatedOn: "27-Oct-2024",
            LastModificationOn: "27-Oct-2024",
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

    const columns = [
        {
            name: "Group Id",
            selector: (row) => row.GroupId,
        },
        {
            name: "Resource Group Name",
            selector: (row) => row.Name,
        },
        {
            name: "Job / Roles",
            selector: (row) => row.JobRoles,
        },
        {
            name: "Profession / Skills",
            selector: (row) => row.ProfessionSkills,
        },
        {
            name: "Resources",
            selector: (row) => row.Resources,
        },
        {
            name: "Created On",
            selector: (row) => row.CreatedOn,
        },
        {
            name: "Last Modification On",
            selector: (row) => row.LastModificationOn,
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
                        <MoreVertIcon />
                    </button>
                    {dropdownVisible && selectedRowId === row.id && (
                        <div className="absolute z-10 bg-white shadow-md rounded-md p-1 mt-2 w-[80px]">
                            <ul className="text-sm text-gray-700">
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => setShowFilter2(true)}
                                >
                                    View
                                </li>
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => setShowFilter3(true)}
                                >
                                    Edit
                                </li>
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                >
                                    In-Active
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ),
        },
    ];

    const [status, setStatus] = useState("active");
    const [activeTab, setActiveTab] = useState("profession");

    const members = [
        { initials: "NM", name: "Naveenraj Murugan", role: "Security guard" },
        { initials: "PK", name: "Prathamesh K", role: "Generic Job" },
        { initials: "S", name: "Suriya", role: "Generic Job" },
        { initials: "M", name: "Mohaan", role: "Security guard" },
        { initials: "Z", name: "Zabuza", role: "Generic Job" },
        { initials: "V", name: "Vikram", role: "Driver, Inspector" },
    ];

    const [status1] = useState("inactive");
    const jobsCount = 0;
    const professionCount = 0;
    const members1 = undefined;

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Resource Group Master</div>
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
                            placeholder="Search"
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
                            className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => setShowFilter1(true)}
                        >
                            Create
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
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
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

        {showFilter1 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[820px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    showFilter1 ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShowFilter1(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">Create Resource Group Master</h2>
                    <hr className="border-gray-300 mb-4" />
                
                    <div className="flex gap-6 min-h-screen">
                        {/* Left Panel */}
                        <div className="w-1/2">
                            <div className="flex items-center gap-2 bg-purple-100 p-2 rounded-lg">
                                <span className="text-purple-700 font-medium">0 Resource Selected</span>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="flex-1">
                                    <label className="text-sm font-medium">Resource Group Name*</label>
                                    <input type="text" placeholder="Enter Group Name" className="w-full p-2 border rounded mt-1" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-sm font-medium">Status*</label>
                                    <div className="flex gap-2 mt-1">
                                        <button
                                        className={`px-4 py-2 rounded ${status === "active" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                                        onClick={() => setStatus("active")}
                                        >Active</button>
                                        <button
                                        className={`px-4 py-2 rounded ${status === "inactive" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                                        onClick={() => setStatus("inactive")}
                                        >Inactive</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium">Choose Profession</label>
                                <select className="w-full p-2 border rounded mt-1">
                                    <option>Search Profession</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium">Choose Role</label>
                                <select className="w-full p-2 border rounded mt-1">
                                    <option>Search Role</option>
                                </select>
                            </div>
                            <button className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg">Create</button>
                        </div>

                        {/* Right Panel */}
                        <div className="w-1/2">
                            <div className="flex border-b mb-4">
                                <button
                                    className={`flex-1 p-2 ${activeTab === "profession" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("profession")}
                                >Profession Based Search</button>
                                <button
                                    className={`flex-1 p-2 ${activeTab === "role" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("role")}
                                >Role Based Search</button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Member"
                                    className="w-full p-2 border rounded"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="mt-4 border rounded-lg max-h-60 overflow-y-auto">
                                {members.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map((member, index) => (
                                    <div key={index} className="flex items-center gap-4 p-2 hover:bg-gray-100">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-sm font-medium">{member.initials}</span>
                                    <div>
                                        <p className="text-sm font-medium">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.role}</p>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {showFilter2 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    showFilter2 ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShowFilter2(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">View</h2>
                    <hr className="border-gray-300 mb-4" />
                    <div className="min-h-screen flex flex-col items-center">
                        <div className="w-full max-w-2xl">
                            <div className="mt-2 mb-4">
                                <span className={`px-4 py-2 text-white text-sm font-medium rounded-lg ${status1 === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                    {status1 === "active" ? "Active" : "In-active"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex w-full border bg-gray-50 rounded-lg overflow-hidden">
                                    <div className="flex-1 p-1 bg-gray-100 flex items-center justify-between">
                                        <span className="font-medium">{jobsCount} Jobs / Roles</span>
                                        <span className="text-gray-400 cursor-pointer">ℹ️</span>
                                    </div>
                                    <div className="flex-1 p-1 bg-gray-100 flex items-center justify-between border-l">
                                        <span className="font-medium">{professionCount} Profession / Skills</span>
                                        <span className="text-gray-400 cursor-pointer">ℹ️</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-gray-700">
                                <p>Members ({members1 !== undefined ? members1.length : "undefined"})</p>
                            </div>
                        </div>
                        <button onClick={() => setShowFilter3(true)} className="mt-6 w-full max-w-2xl bg-blue-600 text-white p-3 rounded-lg">Edit</button>
                    </div>
                </div>
            </div>
        )}

        {showFilter3 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[820px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    showFilter3 ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShowFilter3(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">Edit Resource Group master</h2>
                    <hr className="border-gray-300 mb-4" />

                    <div className="flex gap-6 min-h-screen">
                        {/* Left Panel */}
                        <div className="w-1/2">
                            <div className="flex items-center gap-2 bg-purple-100 p-2 rounded-lg">
                                <span className="text-purple-700 font-medium">0 Resource Selected</span>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="flex-1">
                                    <label className="text-sm font-medium">Resource Group Name*</label>
                                    <input type="text" placeholder="Enter Group Name" className="w-full p-2 border rounded mt-1" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-sm font-medium">Status*</label>
                                    <div className="flex gap-2 mt-1">
                                        <button
                                        className={`px-4 py-2 rounded ${status === "active" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                                        onClick={() => setStatus("active")}
                                        >Active</button>
                                        <button
                                        className={`px-4 py-2 rounded ${status === "inactive" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                                        onClick={() => setStatus("inactive")}
                                        >Inactive</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium">Choose Profession</label>
                                <select className="w-full p-2 border rounded mt-1">
                                    <option>Search Profession</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium">Choose Role</label>
                                <select className="w-full p-2 border rounded mt-1">
                                    <option>Search Role</option>
                                </select>
                            </div>
                            <button className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg">Update</button>
                        </div>

                        {/* Right Panel */}
                        <div className="w-1/2">
                            <div className="flex border-b mb-4">
                                <button
                                    className={`flex-1 p-2 ${activeTab === "profession" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("profession")}
                                >Profession Based Search</button>
                                <button
                                    className={`flex-1 p-2 ${activeTab === "role" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("role")}
                                >Role Based Search</button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Member"
                                    className="w-full p-2 border rounded"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="mt-4 border rounded-lg max-h-60 overflow-y-auto">
                                {members.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map((member, index) => (
                                    <div key={index} className="flex items-center gap-4 p-2 hover:bg-gray-100">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-sm font-medium">{member.initials}</span>
                                    <div>
                                        <p className="text-sm font-medium">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.role}</p>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        )}

    </div>
  );
};

export default ResourceGroup;
