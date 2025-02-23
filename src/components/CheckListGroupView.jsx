import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FiSearch, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const CheckListGroupView = () => {
    const handleBack = () => {
        window.history.back();
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const data = [
        {
          name: "Do you see any damage or wear?",
          condition: 3,
          list: "Yes",
          hardsoft: "No",
          status: "Active"
        },
    ];
    
    const columns = [
        {
          name: "Check List Name",
          //selector: (row) => row.name,
          selector: (row) => (
                <Link to={`/check-list-group-itemview`}>
                    {row.name} 
                </Link>
            ),
        },
        {
          name: "Condition",
          selector: (row) => row.condition,
        },
        {
          name: "Mandatory Check List",
          selector: (row) => row.list,
        },
        {
          name: "Hardware/Software",
          selector: (row) => row.hardsoft,
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
                        onClick={(event) => handleMenuClick(event, row)}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <MoreVertIcon />
                    </button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={() => setShowFilter1(true)}>Edit</MenuItem>
                        <MenuItem>{selectedRow?.status === "Active" ? "Inactive" : "Active"}</MenuItem>
                    </Menu>
                </div>
            ),
            width: "80px",
        },
    ];

    const [showFilter, setShowFilter] = useState(false);
    const [showFilter1, setShowFilter1] = useState(false);
    const [setSelectedStatuses] = useState([]);
    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
            e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };

  return (
    <div>

        <div className="bg-white flex justify-between items-center mb-4 p-2">
          <h1 className="text-xl font-semibold">
            <button
              onClick={handleBack}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
              aria-label="Go back"
            >
              <ArrowBackIosIcon />
            </button>
            <span>Checklist Group for Laptop</span>
          </h1>
        </div>

        <div className="p-2">
            <div className="p-2"> 
                <div className="md:flex md:space-x-1">
                    {/* Left Side (Details) */}
                    <div className="md:w-1/4 bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">Details</h2>
                        <div className="mb-4">
                        <p className="font-semibold">Check List Group Name</p>
                        <p>Check list for Security Appliances</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Item Type</p>
                        <p>Inventory</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Item Category</p>
                        <p>Security Appliances</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Status</p>
                        <p className="text-green-500">Active</p>
                        </div>
                        <div>
                        <p className="font-semibold">Instructions</p>
                        <p>Check list for Security Appliances</p>
                        </div>
                    </div>
                    
                    {/* Right Side (Checklist) */}
                    <div className="md:w-3/4 bg-white rounded-lg shadow-md p-4">
                        <div className="">
                            <div className="flex justify-between items-center mb-4">
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
                                <button onClick={() => setShowFilter(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    Create Check List
                                </button>
                            </div>
                            
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                highlightOnHover
                                responsive
                                striped
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {showFilter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[27rem] p-4 h-full shadow-lg relative transform transition-transform duration-300 ${
                    showFilter ? "translate-x-0" : "translate-x-full"
                }`}
                >
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-black"
                    onClick={() => setShowFilter(false)}
                >
                    <FiX size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-4">Create New Check List</h2>
                <hr className="border-gray-300 mb-2 mt-2" />
                <div className="mb-6 flex gap-2">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Item Type</label>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Item Type</option>
                            <option>Inventory</option>
                            <option>Services</option>
                            <option>Assets</option>
                            <option>Tools</option>
                            <option>Vehicles</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Check List Name</label>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Check List Name</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6 flex gap-2">
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Status</label>
                        <div className="flex flex-wrap gap-2">
                            {["Active", "Inactive"].map((status, index) => (
                                <label
                                key={status}
                                className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
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
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Is It Mandatory Check List</label>
                        <div className="flex flex-wrap gap-2">
                            {["Yes", "No"].map((status, index) => (
                                <label
                                key={status}
                                className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
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
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Is It Software & Hardware
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {["Yes", "No"].map((status, index) => (
                                <label
                                key={status}
                                className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
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
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">URL</label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder="Enter URL"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Instructions</label>
                    <div className="flex flex-wrap gap-2">
                    <textarea
                        id="instructions"
                        name="instructions"
                        placeholder="Enter Instructions"
                        rows="2" cols="50" className="border border-gray-300 rounded px-3 py-2 w-full resize-y"  aria-label="Instructions"  >    
                    </textarea>
                    </div>
                </div>
                <div className="mb-6">
                    <div class="border rounded p-4 w-64 flex flex-col items-center justify-center bg-gray-100">
                        <label for="image-upload" class="cursor-pointer">
                            <div class="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v4a2 2 0 012 2h12a2 2 0 012-2v-4l-5.5-5.5a2 2 0 00-3 0L4 16zM14 5l-3.293 3.293a1 1 0 01-1.414 0L9 5m6 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            <span class="text-gray-700 mt-2">Upload Image</span>
                            </div>
                            <input name="image-upload" type="file" class="hidden" accept="image/*" />
                        </label>
                    </div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Create
                </button>
                </div>
            </div>
        )}

        {showFilter1 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[27rem] p-4 h-full shadow-lg relative transform transition-transform duration-300 ${
                    showFilter1 ? "translate-x-0" : "translate-x-full"
                }`}
                >
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-black"
                    onClick={() => setShowFilter1(false)}
                >
                    <FiX size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-4">Edit Check List</h2>
                <hr className="border-gray-300 mb-2 mt-2" />
                <div className="mb-6 flex gap-2">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Item Type</label>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Item Type</option>
                            <option>Inventory</option>
                            <option>Services</option>
                            <option>Assets</option>
                            <option>Tools</option>
                            <option>Vehicles</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Check List Name</label>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Check List Name</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6 flex gap-2">
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Status</label>
                        <div className="flex flex-wrap gap-2">
                            {["Active", "Inactive"].map((status, index) => (
                                <label
                                key={status}
                                className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
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
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Is It Mandatory Check List</label>
                        <div className="flex flex-wrap gap-2">
                            {["Yes", "No"].map((status, index) => (
                                <label
                                key={status}
                                className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
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
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Is It Software & Hardware
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {["Yes", "No"].map((status, index) => (
                                <label
                                key={status}
                                className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
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
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">URL</label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder="Enter URL"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Instructions</label>
                    <div className="flex flex-wrap gap-2">
                    <textarea
                        id="instructions"
                        name="instructions"
                        placeholder="Enter Instructions"
                        rows="2" cols="50" className="border border-gray-300 rounded px-3 py-2 w-full resize-y"  aria-label="Instructions"  >    
                    </textarea>
                    </div>
                </div>
                <div className="mb-6">
                    <div class="border rounded p-4 w-64 flex flex-col items-center justify-center bg-gray-100">
                        <label for="image-upload" class="cursor-pointer">
                            <div class="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v4a2 2 0 012 2h12a2 2 0 012-2v-4l-5.5-5.5a2 2 0 00-3 0L4 16zM14 5l-3.293 3.293a1 1 0 01-1.414 0L9 5m6 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            <span class="text-gray-700 mt-2">Upload Image</span>
                            </div>
                            <input name="image-upload" type="file" class="hidden" accept="image/*" />
                        </label>
                    </div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Update
                </button>
                </div>
            </div>
        )}

    </div>
  );
};

export default CheckListGroupView;
