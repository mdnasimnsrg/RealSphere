import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton, 
  Menu, 
  MenuItem,
} from "@mui/material";
import { FiSearch, FiX } from "react-icons/fi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Upload } from "lucide-react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const LeadImport = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const rows = [
        {
          fileName: "25 Nov 2024",
          uploadDate: "SR-1122",
          fileFormat: "Four Wheeler",
          fileSize: "TN EQ 08 9999",
          status: "Approved",
        },
        {
            fileName: "25 Nov 2024",
            uploadDate: "SR-1122",
            fileFormat: "Four Wheeler",
            fileSize: "TN EQ 08 9999",
            status: "Approved",
        },
    ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter] = React.useState("");
  const [statusFilter] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = rows.filter((row) => {
    const matchesFilter = filter
      ? row.referenceId.toLowerCase().includes(filter.toLowerCase())
      : true;
    const matchesStatus = statusFilter ? row.status === statusFilter : true;
    return matchesFilter && matchesStatus;
  });

  const [showFilter, setShowFilter] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

  return (
    <div>
        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Lead</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center p-2">
                    Download Template
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Bulk Upload</h2>
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center">
            <Upload className="mx-auto text-gray-500 mb-2" size={24} />
            <label className="text-blue-600 cursor-pointer">Choose the file</label>
            <p className="text-sm text-gray-500">Supported Format: .csv, .xls, .xlsx | Maximum size: 10MB</p>
            </div>
        </div>

        <div className="p-2">
            <div className="p-4 bg-white border rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        UPLOADED FILES
                    </div>
                    <div className="flex w-full md:w-auto gap-2 justify-start md:justify-end">
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

                <TableContainer>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>File Name</TableCell>
                            <TableCell>Uploaded Date</TableCell>
                            <TableCell>File Format</TableCell>
                            <TableCell>File Size</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.fileName}</TableCell>
                                <TableCell>{row.uploadDate}</TableCell>
                                <TableCell>{row.fileFormat}</TableCell>
                                <TableCell>{row.fileSize}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>
                                    {/* Three Dots Icon for Dropdown */}
                                    <IconButton onClick={handleClick}>
                                    <MoreVertIcon />
                                    </IconButton>
                                    
                                    {/* Dropdown Menu */}
                                    <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    >
                                    <MenuItem onClick={handleClose}>Error Report</MenuItem>
                                    <MenuItem onClick={handleClose}>Download</MenuItem>
                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
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
                    <label className="block text-gray-700 font-medium mb-2">Unit</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Unit</option>
                        <option>Unit1</option>
                        <option>Unit2</option>
                        <option>Unit3</option>
                        <option>Unit4</option>
                        <option>Unit5</option>
                    </select>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">In Out Status</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select In Out Status</option>
                        <option>Yet To Checkout</option>
                        <option>Checked Out</option>
                    </select>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-6">
                    <div className="flex gap-2">
                        <div className="flex-1 mr-4">
                        <label className="block text-gray-700 font-medium mb-2">Start Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Start Date"
                        />
                        </div>
                        <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">End Date</label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="End Date"
                        />
                        </div>
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

export default LeadImport;
