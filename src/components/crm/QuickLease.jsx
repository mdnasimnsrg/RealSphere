import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Switch,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { FiUser, FiX, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const QuickLease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [purpose, setPurpose] = useState("Residential");
  const [primaryOnly, setPrimaryOnly] = useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter] = React.useState("");
  const [statusFilter] = React.useState("");

  const rows = [
    {
      OnboardingID: "OPP250109-750",
      Date: "09 Jan 2025",
      Description: "09-01-2025 18:31 Aziel",
      Purpose: "Residential",
      Revenue: "SAR 171300",
      Owner: "Farooq Abdullah",
      Status: "Won",
      StatusDate: "09 Jan 2025",
      CloseOn: "09 Jan 2025",
    },
    {
      OnboardingID: "OPP250109-750",
      Date: "09 Jan 2025",
      Description: "09-01-2025 18:31 Aziel",
      Purpose: "Residential",
      Revenue: "SAR 171300",
      Owner: "Farooq Abdullah",
      Status: "Won",
      StatusDate: "09 Jan 2025",
      CloseOn: "09 Jan 2025",
    },
    {
      OnboardingID: "OPP250109-750",
      Date: "09 Jan 2025",
      Description: "09-01-2025 18:31 Aziel",
      Purpose: "Residential",
      Revenue: "SAR 171300",
      Owner: "Farooq Abdullah",
      Status: "Won",
      StatusDate: "09 Jan 2025",
      CloseOn: "09 Jan 2025",
    },
    {
      OnboardingID: "OPP250109-750",
      Date: "09 Jan 2025",
      Description: "09-01-2025 18:31 Aziel",
      Purpose: "Residential",
      Revenue: "SAR 171300",
      Owner: "Farooq Abdullah",
      Status: "Won",
      StatusDate: "09 Jan 2025",
      CloseOn: "09 Jan 2025",
    },
  ];

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
  const [showFilter1, setShowFilter1] = useState(false);
  const [step, setStep] = useState(1);

  const [activeOccupant, setActiveOccupant] = useState("Tenant");
  const [billingCycle, setBillingCycle] = useState("As Agreement");
  const [activeSelection, setActiveSelection] = useState("Property");

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
        <div className="text-xl font-semibold">Quick Lease</div>
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
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 mb-4">
            {/* Search Bar */}
            <div className="w-full md:w-auto flex items-center">
              <div className="flex w-full md:w-auto">
                <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                  <FiSearch className="text-gray-600" />
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Create Button */}
            <div className="w-full md:w-auto">
              <button
                onClick={() => setShowFilter(true)}
                className="w-full md:w-auto flex justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </div>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Onboarding ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Revenue</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Status Date</TableCell>
                  <TableCell>Close On</TableCell>
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
                            <Link onClick={() => setShowFilter1(true)}>
                              Edit
                            </Link>
                          </MenuItem>
                        </Menu>
                      </TableCell>
                      <TableCell>
                        <Link to={`/quicklease-details`}>
                          {row.OnboardingID}
                        </Link>
                      </TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                      <TableCell>{row.Purpose}</TableCell>
                      <TableCell>{row.Revenue}</TableCell>
                      <TableCell>{row.Owner}</TableCell>
                      <TableCell>{row.Status}</TableCell>
                      <TableCell>{row.StatusDate}</TableCell>
                      <TableCell>{row.CloseOn}</TableCell>
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
            <h2 className="text-xl font-semibold mb-4">
              Create Quick Lease creation
            </h2>
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

                  <div className="space-y-6 mt-6">
                    {/* Contact Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Choose the contact{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <img
                            src="/contact-icon.svg"
                            alt="Contact"
                            className="w-6 h-6"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Choose contact{" "}
                            <span className="text-red-500">*</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Pick contact from registered contact
                          </p>
                        </div>
                      </div>
                      <div className="relative mt-3">
                        <select className="w-full p-2 border rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500">
                          <option>Choose contact</option>
                        </select>
                      </div>
                      <p className="mt-2 text-gray-400 text-sm">
                        No contact selected to display
                      </p>
                    </div>

                    {/* Billing Account Selection */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                          Choose the Billing Account
                        </label>
                        <button className="text-red-500 text-sm font-medium">
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <img
                            src="/billing-icon.svg"
                            alt="Billing"
                            className="w-6 h-6"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Choose Billing Account
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm text-gray-500">
                              Show only primary account
                            </p>
                            <Switch
                              checked={primaryOnly}
                              onChange={setPrimaryOnly}
                              className={`${
                                primaryOnly ? "bg-blue-600" : "bg-gray-300"
                              } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                              <span
                                className={`${
                                  primaryOnly
                                    ? "translate-x-6"
                                    : "translate-x-1"
                                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                              />
                            </Switch>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-3">
                        <select className="w-full p-2 border rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500">
                          <option>Choose Billing Account</option>
                        </select>
                      </div>
                      <p className="mt-2 text-gray-400 text-sm">
                        No account selected to display
                      </p>
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
                  <div className="space-y-6">
                    {/* Active Occupants */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Active Occupants <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4 mt-2">
                        {["Tenant", "Owner"].map((type) => (
                          <button
                            key={type}
                            className={`px-4 py-2 border rounded-lg ${
                              activeOccupant === type ? "bg-gray-200" : ""
                            }`}
                            onClick={() => setActiveOccupant(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="w-full p-2 border rounded-lg"
                        placeholder="Type Here..."
                      ></textarea>
                    </div>

                    {/* Lease Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <select className="p-2 border rounded-lg">
                        <option>Monthly</option>
                      </select>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg"
                          placeholder="Start Date"
                        />
                        <Calendar
                          className="absolute right-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                    </div>

                    {/* Date Pickers */}
                    <div className="grid grid-cols-2 gap-4">
                      {["End Date", "Bill Start Date"].map((label) => (
                        <div key={label} className="relative">
                          <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            placeholder={label}
                          />
                          <Calendar
                            className="absolute right-3 top-3 text-gray-500"
                            size={18}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Payment Options */}
                    <div className="grid grid-cols-2 gap-4">
                      <select className="p-2 border rounded-lg">
                        <option>Online Payment</option>
                      </select>
                      <select className="p-2 border rounded-lg">
                        <option>Monthly</option>
                      </select>
                    </div>

                    {/* Billing Cycle Method */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Billing Cycle Method{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2 mt-2">
                        {["Prepaid", "Post Paid", "As Agreement", "Custom"].map(
                          (method) => (
                            <button
                              key={method}
                              className={`px-2 py-2 text-sm border rounded-lg ${
                                billingCycle === method
                                  ? "bg-blue-500 text-white"
                                  : ""
                              }`}
                              onClick={() => setBillingCycle(method)}
                            >
                              {method}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg"
                      onClick={() => setStep(1)}
                    >
                      Previous
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4"
                      onClick={() => setStep(3)}
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="space-y-6">
                    {/* Toggle Selection */}
                    <div className="flex gap-2">
                      {["Property", "Owner"].map((type) => (
                        <button
                          key={type}
                          className={`px-4 py-2 border rounded-lg ${
                            activeSelection === type
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                          onClick={() => setActiveSelection(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    {/* Property Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Choose Property <span className="text-red-500">*</span>
                      </label>
                      <div className="relative mt-2">
                        <select className="w-full p-2 border rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500">
                          <option>Choose Property</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                      <p className="mt-2 text-gray-400 text-sm">
                        No Property selected to display
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg"
                      onClick={() => setStep(2)}
                    >
                      Previous
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
                      Complete
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
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
            <h2 className="text-xl font-semibold mb-4">
              Edit Quick Lease creation
            </h2>
            <hr className="border-gray-300 mb-4" />
            <div className="">
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="space-y-6">
                    {/* Active Occupants */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Active Occupants <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4 mt-2">
                        {["Tenant", "Owner"].map((type) => (
                          <button
                            key={type}
                            className={`px-4 py-2 border rounded-lg ${
                              activeOccupant === type ? "bg-gray-200" : ""
                            }`}
                            onClick={() => setActiveOccupant(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="w-full p-2 border rounded-lg"
                        placeholder="Type Here..."
                      ></textarea>
                    </div>

                    {/* Lease Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <select className="p-2 border rounded-lg">
                        <option>Monthly</option>
                      </select>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg"
                          placeholder="Start Date"
                        />
                        <Calendar
                          className="absolute right-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                    </div>

                    {/* Date Pickers */}
                    <div className="grid grid-cols-2 gap-4">
                      {["End Date", "Bill Start Date"].map((label) => (
                        <div key={label} className="relative">
                          <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            placeholder={label}
                          />
                          <Calendar
                            className="absolute right-3 top-3 text-gray-500"
                            size={18}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Payment Options */}
                    <div className="grid grid-cols-2 gap-4">
                      <select className="p-2 border rounded-lg">
                        <option>Online Payment</option>
                      </select>
                      <select className="p-2 border rounded-lg">
                        <option>Monthly</option>
                      </select>
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
                  <div className="space-y-6">
                    {/* Toggle Selection */}
                    <div className="flex gap-2">
                      {["Property", "Owner"].map((type) => (
                        <button
                          key={type}
                          className={`px-4 py-2 border rounded-lg ${
                            activeSelection === type
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                          onClick={() => setActiveSelection(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    {/* Property Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Choose Property <span className="text-red-500">*</span>
                      </label>
                      <div className="relative mt-2">
                        <select className="w-full p-2 border rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500">
                          <option>Choose Property</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                      <p className="mt-2 text-gray-400 text-sm">
                        No Property selected to display
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Unit Category <span className="text-red-500">*</span>
                      </label>
                      <div className="relative mt-2">
                        <select className="w-full p-2 border rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500">
                          <option>Choose Unit Category</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Choose Units <span className="text-red-500">*</span>
                      </label>
                      <div className="relative mt-2">
                        <select className="w-full p-2 border rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500">
                          <option>Choose Units</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-3 text-gray-500"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg"
                      onClick={() => setStep(1)}
                    >
                      Previous
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
                      Update
                    </button>
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

export default QuickLease;
