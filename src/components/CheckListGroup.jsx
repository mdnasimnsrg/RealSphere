import React, { useState } from "react";
import { FiUser, FiX } from "react-icons/fi";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, Tabs, Tab, TextField, IconButton, Menu, MenuItem, Switch } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const CheckListGroup = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const open = Boolean(anchorEl);

    const tabs = ["Unit Type", "Item Category", "Item/Asset"];
    const tabData = [
        {
          title: "Unit Type Data",
          headers: ["Group Id", "Check List Group Name", "Item Type", "Unit Type", "No. of Checklists", "Status"],
          data: [
            { id: "GRP-173", name: "Checklist For 3BHK", type: "Inspection", unit: "3 BHK", checklists: 2, status: "Active" },
            { id: "GRP-127", name: "Check For Villa", type: "Inspection", unit: "Villa", checklists: 2, status: "Active" }
          ]
        },
        {
          title: "Item Category Data",
          headers: ["Group Id", "Check List Group Name", "Item Type", "Item Category", "No.of Checklists", "Status"],
          data: [
            { id: "GRP-125", name: "Check list for Security Appliances", type: "Inventory", category: "Security Appliances", checklists: 1, status: "Active" },
            { id: "GRP-0025", name: "Electrical", type: "Inventory", category: "Electrical", checklists: 1, status: "Inactive" }
          ]
        },
        {
          title: "Item/Asset Data",
          headers: ["Group Id", "Check List Group Name", "Item Type", "Item Category", "Item Name", "No.of Checklists", "Status"],
          data: [
            { id: "GRP-170", name: "Checklist Group for Laptop", type: "Inventory", category: "Electrical", itemname: "Laptop", checklists: 3, status: "Active" },
            { id: "GRP-126", name: "Checklist for CCTV", type: "Inventory", category: "Security Appliances", itemname: "CCTV Camera", checklists: 1, status: "Active" }
          ]
        }
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const [showFilter, setShowFilter] = useState(false);
    const [showFilter1, setShowFilter1] = useState(false);
    const [setSelectedStatuses] = useState([]);
    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
          e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };
    const [defaultTemplate, setDefaultTemplate] = useState(false);

  return (
    <div>
        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Check List Group</div>
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
            <Paper className="p-4">
                <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
                    {tabs.map((tab, index) => (
                    <Tab key={index} label={tab} />
                    ))}
                </Tabs>
                
                <div className="flex justify-between items-center mt-4">
                    <TextField label="Search" variant="outlined" size="small" className="w-1/3" />
                    <Button onClick={() => setShowFilter(true)} variant="contained" color="primary">Create</Button>
                </div>

                <TableContainer component={Paper} className="mt-4">
                    <Table>
                    <TableHead>
                        <TableRow>
                        {tabData[activeTab].headers.map((header, index) => (
                            <TableCell key={index}>{header}</TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tabData[activeTab].data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.id} hover>
                            {Object.values(row).map((value, index) => (
                            <TableCell key={index} style={{ color: value === "Active" ? "green" : value === "Inactive" ? "red" : "inherit" }}><Link to={`/check-list-group-view`}>{value}</Link></TableCell>
                            ))}
                            <TableCell>
                                <IconButton onClick={(e) => handleMenuClick(e, row)}>
                                    <MoreVertIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>

                <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                    <MenuItem onClick={() => setShowFilter1(true)}>Edit</MenuItem>
                    <MenuItem>{selectedRow?.status === "Active" ? "Inactive" : "Active"}</MenuItem>
                </Menu>
                
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={tabData[activeTab].data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
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
                <h2 className="text-xl font-semibold mb-4">Create Item Specific Group Check List</h2>
                <hr className="border-gray-300 mb-2 mt-2" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Check List Group Name</label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder="Enter Check List Group Name"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
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
                        <label className="block text-gray-700 font-medium mb-2">Item Category</label>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Item Category</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Item Name</label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder="Enter Item Name"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
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
                <div className="mb-6 flex items-center justify-between">
                    <label className="block text-gray-700 font-medium mb-2">Make this the default template?</label>
                    <div className="flex items-center gap-2">
                        <Switch checked={defaultTemplate} onChange={() => setDefaultTemplate(!defaultTemplate)} />
                        <span>{defaultTemplate ? "Yes" : "No"}</span>
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
                <h2 className="text-xl font-semibold mb-4">Edit Item Specific Group Check List</h2>
                <hr className="border-gray-300 mb-2 mt-2" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Check List Group Name</label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder="Enter Check List Group Name"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
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
                        <label className="block text-gray-700 font-medium mb-2">Item Category</label>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Select Item Category</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Item Name</label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="text"
                            placeholder="Enter Item Name"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
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
                <div className="mb-6 flex items-center justify-between">
                    <label className="block text-gray-700 font-medium mb-2">Make this the default template?</label>
                    <div className="flex items-center gap-2">
                        <Switch checked={defaultTemplate} onChange={() => setDefaultTemplate(!defaultTemplate)} />
                        <span>{defaultTemplate ? "Yes" : "No"}</span>
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

export default CheckListGroup;
