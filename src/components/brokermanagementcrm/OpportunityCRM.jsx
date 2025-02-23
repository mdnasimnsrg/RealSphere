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
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const OpportunityCRM = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const rows = [
    {
      id: "1",
      OpportunityID: "OPP250110-752",
      Date: "10 Jan 2025",
      Description: "10-01-2025 18:43 Manpreet",
      Purpose: "Residential",
      Type: "Sale",
      QuoteID: "-",
      Revenue: "-",
      Owner: "Yasim",
      ContactName: "Manpreet",
      ContactEmail: "manpreet@mailinator.com",
      CompanyName: "-",
      Country: "India",
      ContactMobileNo: "+91 9578423456",
      Source: "Direct Sales",
      Status: "Open",
      StatusDate: "10 Jan 2025",
      ClosedOn: "-",
    },
    {
      id: "2",
      OpportunityID: "OPP250110-752",
      Date: "10 Jan 2025",
      Description: "10-01-2025 18:43 Manpreet",
      Purpose: "Residential",
      Type: "Sale",
      QuoteID: "-",
      Revenue: "-",
      Owner: "Yasim",
      ContactName: "Manpreet",
      ContactEmail: "manpreet@mailinator.com",
      CompanyName: "-",
      Country: "India",
      ContactMobileNo: "+91 9578423456",
      Source: "Direct Sales",
      Status: "Open",
      StatusDate: "10 Jan 2025",
      ClosedOn: "-",
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
  const [setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  const [step, setStep] = useState(1);

  const [purpose, setPurpose] = useState("Residential");
  const [revenueType, setRevenueType] = useState("Manage");
  const [contactType, setContactType] = useState("Existing Contact");

  const [contact, setContact] = useState("");
  const [billingAccount, setBillingAccount] = useState("");
  const [showPrimaryOnly, setShowPrimaryOnly] = useState(false);

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
        <div className="text-xl font-semibold">Opportunity</div>
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
                className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
              >
                Add Opportunity
              </button>
            </div>
          </div>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Opportunity ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Quote ID</TableCell>
                  <TableCell>Revenue</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Contact Email</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Contact Mobile Number</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Status Date</TableCell>
                  <TableCell>Closed On</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index} hover>
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
                            <Link to={`/opportunity-crmdetails`}>Edit</Link>
                          </MenuItem>
                        </Menu>
                      </TableCell>
                      <TableCell>{row.OpportunityID}</TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                      <TableCell>{row.Purpose}</TableCell>
                      <TableCell>{row.Type}</TableCell>
                      <TableCell>{row.QuoteID}</TableCell>
                      <TableCell>{row.Revenue}</TableCell>
                      <TableCell>{row.Owner}</TableCell>
                      <TableCell>{row.ContactName}</TableCell>
                      <TableCell>{row.ContactEmail}</TableCell>
                      <TableCell>{row.CompanyName}</TableCell>
                      <TableCell>{row.Country}</TableCell>
                      <TableCell>{row.ContactMobileNo}</TableCell>
                      <TableCell>{row.Source}</TableCell>
                      <TableCell>{row.Status}</TableCell>
                      <TableCell>{row.StatusDate}</TableCell>
                      <TableCell>{row.ClosedOn}</TableCell>
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
              <label className="block text-gray-700 font-medium mb-2">
                Priority Type
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
                {["Closed", "Open", "Won"].map((status, index) => (
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
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Contact Name
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Contact Name</option>
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
            <h2 className="text-xl font-semibold mb-4">Create Opportunity</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="">
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div>
                    <label className="font-semibold">
                      Purpose <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-4 mt-2">
                      <button
                        className={`px-4 py-2 rounded-lg border ${
                          purpose === "Residential"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300"
                        }`}
                        onClick={() => setPurpose("Residential")}
                      >
                        🏢 Residential
                      </button>
                      <button
                        className={`px-4 py-2 rounded-lg border ${
                          purpose === "Commercial"
                            ? "bg-gray-200 border-gray-500"
                            : "border-gray-300"
                        }`}
                        onClick={() => setPurpose("Commercial")}
                      >
                        🏢 Commercial
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="font-semibold">
                      Revenue Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-4 mt-2">
                      {["Manage", "Lease", "Sale"].map((type) => (
                        <button
                          key={type}
                          className={`px-4 py-2 rounded-lg border ${
                            revenueType === type
                              ? "bg-blue-500 text-white"
                              : "border-gray-300"
                          }`}
                          onClick={() => setRevenueType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="font-semibold">Contact Type</label>
                    <div className="mt-2">
                      <button
                        className={`flex items-center w-full p-4 rounded-lg border ${
                          contactType === "Existing Contact"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300"
                        }`}
                        onClick={() => setContactType("Existing Contact")}
                      >
                        📇 Existing Contact
                      </button>
                      <button
                        className={`flex items-center w-full p-4 mt-2 rounded-lg border ${
                          contactType === "Create New Prospect"
                            ? "bg-green-100 border-green-500"
                            : "border-gray-300"
                        }`}
                        onClick={() => setContactType("Create New Prospect")}
                      >
                        🆕 Create New Prospect
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg"
                      disabled
                    >
                      Previous
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4"
                      onClick={() => setStep(2)}
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {/* Existing Contact Section */}
                  <div>
                    <label className="font-semibold">
                      Existing Contact <span className="text-red-500">*</span>
                    </label>
                    <div className="border rounded-lg p-4 mt-2">
                      <label className="font-semibold flex items-center space-x-2">
                        📇 Choose contact{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="w-full mt-2 p-2 border rounded-lg"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      >
                        <option value="">Choose contact</option>
                      </select>
                      <div className="flex items-center space-x-2 mt-4 text-gray-500">
                        📄 No contact selected to display
                      </div>
                    </div>
                  </div>

                  {/* Billing Account Section */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">
                        Choose the Billing Account
                      </label>
                      <button className="text-red-500">Remove</button>
                    </div>
                    <div className="border rounded-lg p-4 mt-2">
                      <label className="font-semibold flex items-center space-x-2">
                        🏦 Choose Billing Account
                      </label>
                      <div className="flex items-center space-x-2 mt-2">
                        <label>Show only primary account</label>
                        <input
                          type="checkbox"
                          className="toggle-checkbox"
                          checked={showPrimaryOnly}
                          onChange={() => setShowPrimaryOnly(!showPrimaryOnly)}
                        />
                      </div>
                      <select
                        className="w-full mt-2 p-2 border rounded-lg"
                        value={billingAccount}
                        onChange={(e) => setBillingAccount(e.target.value)}
                      >
                        <option value="">Choose Billing Account</option>
                      </select>
                      <div className="flex items-center space-x-2 mt-4 text-gray-500">
                        📄 No account selected to display
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button onClick={() => setStep(1)}>Previous</Button>
                    <Button>Create</Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunityCRM;
