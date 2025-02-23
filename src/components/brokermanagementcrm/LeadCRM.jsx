import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { SaveAlt } from "@mui/icons-material";
import * as XLSX from "xlsx";
import {
  FiUser,
  FiFilter,
  FiX,
  FiSearch,
  FiMessageCircle,
  FiEdit,
} from "react-icons/fi";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const LeadCRM = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [purposeType, setPurposeType] = useState("Commercial");

  const rows = [
    {
      id: "1",
      LeadID: "LEAD241024-240",
      Date: "24 Oct 2024",
      Description: "CRM,PropGOTO",
      ContactName: "Testing123",
      ContactEmail: "testing123@gmail.com",
      CompanyName: "ABC Testing 123",
      Country: "Malaysia",
      ContactMobile: "+60 1233445567",
      Purpose: "Commercial",
      Type: "Manage",
      InternalLeadSource: "Exhibition",
      CampaignSource: "-",
      Priority: "Medium",
      Owner: "Kartica Rahayu",
      Status: "Open",
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

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, "VisitorWorkerReport.xlsx");
  };

  const filteredRows = rows.filter((row) => {
    const matchesFilter = filter
      ? row.referenceId.toLowerCase().includes(filter.toLowerCase())
      : true;
    const matchesStatus = statusFilter ? row.status === statusFilter : true;
    return matchesFilter && matchesStatus;
  });

  const [showFilter, setShowFilter] = useState(false);
  const [showFilter1, setShowFilter1] = useState(false);
  const [showFilter2, setShowFilter2] = useState(false);
  const [showFilter3, setShowFilter3] = useState(false);
  const [showFilter4, setShowFilter4] = useState(false);
  const [setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleModal1 = () => setIsOpen1(!isOpen1);

  const [activeTab, setActiveTab] = useState("Activity Comments");

  const tabs = [
    "Activity Comments",
    "Internal",
    "External",
    "To Do List",
    "Activity",
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="relative">
          <button
            onClick={() => toggleModal1(row.name)}
            className="text-blue-500 hover:text-blue-700"
          >
            {row.name}
          </button>
        </div>
      ),
    },
    { name: "Description", selector: (row) => row.Description },
    {
      name: "Edit",
      cell: (row) => (
        <div className="relative">
          <button
            onClick={() => toggleModal(row.name)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </button>
        </div>
      ),
    },
  ];

  const tableData = [
    {
      id: 1,
      name: "Test123",
      Description: "- need to site visit and meeting",
    },
  ];

  const activecolumns = [
    { name: "Activity Name", selector: (row) => row.name },
    { name: "Action Info", selector: (row) => row.info },
    { name: "Date", selector: (row) => row.Date },
    { name: "Created by", selector: (row) => row.Createdby },
    { name: "Priority", selector: (row) => row.Priority },
    { name: "Status", selector: (row) => row.Status },
  ];

  const activeData = [
    {
      name: "Appointment",
      info: "- need to meet face to face",
      Date: "29 Oct 2024",
      Createdby: "Kartica Rahayu",
      Priority: "medium",
      Status: "open",
    },
  ];

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Lead</div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-4 bg-white border rounded-lg shadow-lg">
          <div className="flex flex-wrap items-center justify-between mb-4 w-full gap-2">
            {/* Search Bar */}
            <div className="flex w-full md:w-auto gap-2">
              <div className="flex w-full md:w-auto">
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

            {/* Buttons Section */}
            <div className="flex w-full md:w-auto gap-2 justify-center md:justify-end flex-wrap">
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveAlt />}
                onClick={handleDownload}
                className="!min-w-[40px]" // Ensuring a smaller button width
              ></Button>
              <button
                className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                onClick={() => setShowFilter1(true)}
              >
                <FiMessageCircle className="text-gray-600" />
              </button>
              <button
                className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                onClick={() => setShowFilter(true)}
              >
                <FiFilter className="text-gray-600" />
              </button>
              <button
                onClick={() => setShowFilter2(true)}
                className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 md:w-auto"
              >
                Add Opportunity
              </button>
            </div>
          </div>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Actions</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Lead ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Contact Email</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Contact Mobile</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Internal Lead Source</TableCell>
                  <TableCell>Campaign Source</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell>
                        <IconButton onClick={() => setShowFilter3(true)}>
                          <RemoveRedEyeOutlinedIcon />
                        </IconButton>
                      </TableCell>
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
                          <MenuItem>
                            <button onClick={() => setShowFilter4(true)}>
                              Edit
                            </button>
                          </MenuItem>
                        </Menu>
                      </TableCell>
                      <TableCell>{row.LeadID}</TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                      <TableCell>{row.ContactName}</TableCell>
                      <TableCell>{row.ContactEmail}</TableCell>
                      <TableCell>{row.CompanyName}</TableCell>
                      <TableCell>{row.Country}</TableCell>
                      <TableCell>{row.ContactMobile}</TableCell>
                      <TableCell>{row.Purpose}</TableCell>
                      <TableCell>{row.Type}</TableCell>
                      <TableCell>{row.InternalLeadSource}</TableCell>
                      <TableCell>{row.CampaignSource}</TableCell>
                      <TableCell>{row.Priority}</TableCell>
                      <TableCell>{row.Owner}</TableCell>
                      <TableCell>{row.Status}</TableCell>
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
            className={`overflow-y-auto bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
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
                Internal Lead Source
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Internal Lead Source</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                External Lead Source
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select External Lead Source</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Lead Owner
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Lead Owner</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Type
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Type</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Purpose
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Purpose</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Created On
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Created On</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Campaign Source
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Campaign Source</option>
              </select>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Priority
              </label>
              <div className="flex flex-wrap gap-2">
                {["High", "Urgent", "Medium", "Low"].map((type, index) => (
                  <label
                    key={type}
                    className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                  >
                    <input
                      type="checkbox"
                      value={type}
                      className="hidden"
                      onChange={(e) => handleStatusChange(e, type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Qualify",
                  "Open",
                  "Disqualify",
                  "Archived",
                  "Unqualified",
                ].map((status, index) => (
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
            className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter1 ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter1(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Latest Comments</h2>
            <hr className="border-gray-300 mb-4" />
          </div>
        </div>
      )}

      {showFilter2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`overflow-y-auto bg-white w-[470px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter2 ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter2(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Create Opportunity</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Row 1 */}
                <div>
                  <label className="block text-sm font-semibold">
                    Internal Lead Source *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Internal Lead Source"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Contact Name"
                  />
                </div>

                {/* Row 2 */}
                <div>
                  <label className="block text-sm font-semibold">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Job Title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Preferred Mode *
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Preferred Mode</option>
                    <option>Call</option>
                    <option>Email</option>
                    <option>Meeting</option>
                  </select>
                </div>

                {/* Row 3 */}
                <div>
                  <label className="block text-sm font-semibold">Email *</label>
                  <input
                    type="email"
                    className="w-full border p-2 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <select className="border p-2 rounded-l-md">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="text"
                      className="w-full border p-2 rounded-r-md"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label className="block text-sm font-semibold">City *</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Country *
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>

                {/* Row 5 */}
                <div>
                  <label className="block text-sm font-semibold">
                    Company *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Company"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block text-sm font-semibold">
                  Description/Requirement *
                </label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Description/Requirement"
                ></textarea>
              </div>

              {/* Purpose Type */}
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Purpose Type *
                </label>
                <div className="flex space-x-4">
                  {["Commercial", "Residential", "Mixed"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setPurposeType(type)}
                      className={`px-4 py-2 rounded-md ${
                        purposeType === type
                          ? "bg-blue-600 text-white"
                          : "border"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lease Type and Start Date */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold">Type *</label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Lease</option>
                    <option>Sale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Lease Start Date *
                  </label>
                  <input type="date" className="w-full border p-2 rounded-md" />
                </div>
              </div>

              {/* Lease Duration & Property Selection */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold">
                    Lease Duration *
                  </label>
                  <input
                    type="number"
                    className="w-full border p-2 rounded-md"
                    placeholder="12"
                  />
                  <select className="w-full border p-2 rounded-md mt-2">
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Property *
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Select Property</option>
                    <option>Apartment</option>
                    <option>Office</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold">
                    Unit Type
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Select Unit Type</option>
                    <option>Room</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full">
                Create Lead
              </button>
            </div>
          </div>
        </div>
      )}

      {showFilter3 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`overflow-y-auto bg-white w-[800px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter3 ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter3(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-2">Quick View</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="mt-4 bg-gray-100 p-4 rounded-md flex justify-between items-center">
              <div>
                <div className="flex gap-2 mt-1 flex-wrap">
                  <h3 className="text-lg font-bold">
                    Testing123{" "}
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm">
                      LEAD241024-240
                    </span>
                  </h3>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm">
                    Commercial
                  </span>
                  <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-md text-sm">
                    Manage
                  </span>
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-sm">
                    Medium
                  </span>
                </div>
                <p className="text-gray-600 mt-1">
                  +60 1233445567 • testing123@gmail.com
                </p>
                <p className="text-gray-500">CRM, PropGOTO</p>
              </div>
              <Link
                to={`/leadsview`}
                className="text-blue-600 hover:underline text-nowrap"
              >
                View Details
              </Link>
            </div>

            {/* Tabs */}
            <div className="mt-4 border-b">
              <div className="flex w-full overflow-x-auto scrollbar-hide gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`pb-2 text-sm font-medium text-nowrap ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Section */}
            {activeTab === "Activity Comments" && (
              <div>
                <div className="flex flex-col items-center justify-center py-10">
                  <img src="/no-data.svg" alt="No Data" className="w-40 h-40" />
                  <p className="text-gray-500 mt-2">No Data</p>
                </div>
                <div className="mt-4">
                  <textarea
                    className="w-full border p-2 rounded-md"
                    placeholder="Type Comments Here"
                  ></textarea>
                  <button className="w-full bg-gray-400 text-white px-4 py-2 rounded-md mt-2 cursor-not-allowed">
                    Comment
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Internal" && (
              <div>
                <div className="flex flex-col items-center justify-center py-10">
                  <p className="text-gray-500 mt-2">No Data Found</p>
                </div>
              </div>
            )}

            {activeTab === "External" && (
              <div>
                <div className="flex flex-col items-center justify-center py-10">
                  <p className="text-gray-500 mt-2">No Data Found</p>
                </div>
              </div>
            )}

            {activeTab === "To Do List" && (
              <div>
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
            )}

            {activeTab === "Activity" && (
              <div>
                <div className="overflow-x-auto">
                  <DataTable
                    columns={activecolumns}
                    data={activeData}
                    pagination
                    highlightOnHover
                    striped
                    responsive
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showFilter4 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`overflow-y-auto bg-white w-[470px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter4 ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter4(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Lead</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="">
              <div className="grid grid-cols-2 gap-4">
                {/* Row 1 */}
                <div>
                  <label className="block text-sm font-semibold">
                    Internal Lead Source *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Internal Lead Source"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Contact Name"
                  />
                </div>

                {/* Row 2 */}
                <div>
                  <label className="block text-sm font-semibold">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Job Title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Preferred Mode *
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Preferred Mode</option>
                    <option>Call</option>
                    <option>Email</option>
                    <option>Meeting</option>
                  </select>
                </div>

                {/* Row 3 */}
                <div>
                  <label className="block text-sm font-semibold">Email *</label>
                  <input
                    type="email"
                    className="w-full border p-2 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <select className="border p-2 rounded-l-md">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="text"
                      className="w-full border p-2 rounded-r-md"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label className="block text-sm font-semibold">City *</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Country *
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>

                {/* Row 5 */}
                <div>
                  <label className="block text-sm font-semibold">
                    Company *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Company"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block text-sm font-semibold">
                  Description/Requirement *
                </label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Description/Requirement"
                ></textarea>
              </div>

              {/* Purpose Type */}
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Purpose Type *
                </label>
                <div className="flex space-x-4">
                  {["Commercial", "Residential", "Mixed"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setPurposeType(type)}
                      className={`px-4 py-2 rounded-md ${
                        purposeType === type
                          ? "bg-blue-600 text-white"
                          : "border"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lease Type and Start Date */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold">Type *</label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Lease</option>
                    <option>Sale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Lease Start Date *
                  </label>
                  <input type="date" className="w-full border p-2 rounded-md" />
                </div>
              </div>

              {/* Lease Duration & Property Selection */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold">
                    Lease Duration *
                  </label>
                  <input
                    type="number"
                    className="w-full border p-2 rounded-md"
                    placeholder="12"
                  />
                  <select className="w-full border p-2 rounded-md mt-2">
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Property *
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Select Property</option>
                    <option>Apartment</option>
                    <option>Office</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold">
                    Unit Type
                  </label>
                  <select className="w-full border p-2 rounded-md">
                    <option>Select Unit Type</option>
                    <option>Room</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">View To Do</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value="Test123"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter Description"
                  value="- need to site visit and meeting"
                ></textarea>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Update
            </button>
          </div>
        </div>
      )}

      {isOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">View To Do</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal1}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value="Test123"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter Description"
                  value="- need to site visit and meeting"
                  disabled
                ></textarea>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Mark As Complete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadCRM;
