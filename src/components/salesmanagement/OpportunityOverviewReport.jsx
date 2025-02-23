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
  Input,
  Checkbox,
} from "@mui/material";
import { SaveAlt, FilterList } from "@mui/icons-material";
import * as XLSX from "xlsx";
import { FiUser, FiFilter, FiX } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";

const OpportunityOverviewReport = () => {
  const rows = [
    {
      OpportunityNumber: "OPP250109-751",
      Name: "09-01-2025 18:46 Marcellus",
      QuotationID: "QUOT250109-777",
      Contact: "Marcellus",
      emailId: "marcellus@yopmail.com",
      MobileNo: "99172856511",
      purpose: "Residential",
      RevenueType: "Sale",
      LeaseStartDate: "10 Jan 2025",
      LeaseEndDate: "30 Dec 2999",
      Grace: "0 Days",
      ApplyGracePeriod: "In the Beginning",
      BillingStartDate: "09 Jan 2025",
      Revenue: "51500",
      Tax: "0",
      Period: "12 Monthly",
      status: "Won",
      Urgency: "medium",
      LeadSource: "Direct Sales",
      Account: "-",
      BrokerAccount: "-",
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

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  const [selectedColumns, setSelectedColumns] = useState([]);
  const columns = [
    "Opportunity Number",
    "Name",
    "Quotation ID",
    "Contact",
    "Email Id",
    "Mobile No",
    "Purpose",
    "Revenue Type",
    "Lease Start Date",
    "Lease End Date",
    "Grace",
    "Apply Grace Period",
    "Billing Start Date",
    "Revenue",
    "Tax",
    "Period",
    "Status",
    "Urgency",
    "Lead Source",
    "Account",
    "Broker Account",
  ];

  const toggleColumn = (column) => {
    setSelectedColumns((prev) =>
      prev.includes(column)
        ? prev.filter((item) => item !== column)
        : [...prev, column]
    );
  };
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Opportunity Overview Report</div>
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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 border rounded-lg shadow-lg text-wrap">
              <Button onClick={toggleModal}>
                Filter Columns <FilterList />
              </Button>
            </div>
            <div className="flex w-full md:w-auto gap-2 justify-end">
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveAlt />}
                onClick={handleDownload}
              ></Button>
              <button
                className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                onClick={() => setShowFilter(true)}
              >
                <FiFilter className="mr-2 text-gray-600" />
              </button>
            </div>
          </div>

          {open && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto scrollbar-hide">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">
                    Choose Columns To Display
                  </h2>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={toggleModal}
                  >
                    ✕
                  </button>
                </div>
                <hr className="border-gray-300 mb-4" />

                <div className="">
                  <Input placeholder="Search Columns" className="mt-2" />

                  <div className="mt-4 max-h-60 overflow-y-auto scrollbar-hide">
                    {columns.map((column) => (
                      <div
                        key={column}
                        className="flex items-center gap-2 py-2"
                      >
                        <Checkbox
                          checked={selectedColumns.includes(column)}
                          onCheckedChange={() => toggleColumn(column)}
                        />
                        <label className="text-sm">{column}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded w-[50%] hover:bg-blue-600">
                    Clear All
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded w-[50%] hover:bg-blue-600">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Opportunity Number</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Quotation ID</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Email Id</TableCell>
                  <TableCell>Mobile No</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Revenue Type</TableCell>
                  <TableCell>Lease Start Date</TableCell>
                  <TableCell>Lease End Date</TableCell>
                  <TableCell>Grace</TableCell>
                  <TableCell>Apply Grace Period</TableCell>
                  <TableCell>Billing Start Date</TableCell>
                  <TableCell>Revenue</TableCell>
                  <TableCell>Tax</TableCell>
                  <TableCell>Period</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Urgency</TableCell>
                  <TableCell>Lead Source</TableCell>
                  <TableCell>Account</TableCell>
                  <TableCell>Broker Account</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.OpportunityNumber}</TableCell>
                      <TableCell>{row.Name}</TableCell>
                      <TableCell>{row.QuotationID}</TableCell>
                      <TableCell>{row.Contact}</TableCell>
                      <TableCell>{row.emailId}</TableCell>
                      <TableCell>{row.MobileNo}</TableCell>
                      <TableCell>{row.purpose}</TableCell>
                      <TableCell>{row.RevenueType}</TableCell>
                      <TableCell>{row.LeaseStartDate}</TableCell>
                      <TableCell>{row.LeaseEndDate}</TableCell>
                      <TableCell>{row.Grace}</TableCell>
                      <TableCell>{row.ApplyGracePeriod}</TableCell>
                      <TableCell>{row.BillingStartDate}</TableCell>
                      <TableCell>{row.Revenue}</TableCell>
                      <TableCell>{row.Tax}</TableCell>
                      <TableCell>{row.Period}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.Urgency}</TableCell>
                      <TableCell>{row.LeadSource}</TableCell>
                      <TableCell>{row.Account}</TableCell>
                      <TableCell>{row.BrokerAccount}</TableCell>
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
            <div className="max-h-96 overflow-y-auto">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Purpose
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Purpose</option>
                  <option>Commercial</option>
                  <option>Mixed</option>
                  <option>Residential</option>
                  <option>Stay</option>
                  <option>Facilities</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Type
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Type</option>
                  <option>Manage</option>
                  <option>Lease</option>
                  <option>Sale</option>
                  <option>Stay</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Internal Lead Source
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Internal Lead Source</option>
                  <option>Direct Sales</option>
                  <option>GITEX 2023</option>
                  <option>Telecalling</option>
                  <option>Partners</option>
                  <option>Word of Mouth</option>
                  <option>Exhibition</option>
                  <option>Social Media</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  External Source
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select External Source</option>
                  <option>Direct Sales</option>
                  <option>Booking.com</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Priority
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Priority</option>
                  <option>High</option>
                  <option>Urgent</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Owner
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Owner</option>
                  <option>Arun Kumar</option>
                  <option>Negan</option>
                  <option>Sabarish</option>
                  <option>Surin</option>
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
                  Status
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Status</option>
                  <option>Converted</option>
                  <option>In Progress</option>
                  <option>Lost Lead</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Classification
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Classification</option>
                  <option>Hot</option>
                  <option>Warm</option>
                  <option>Cold</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Property
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Property</option>
                  <option>Property1</option>
                  <option>Property2</option>
                  <option>Property3</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Unit Type
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Unit Type</option>
                  <option>Room</option>
                  <option>3 BHK</option>
                  <option>Apartment</option>
                </select>
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

export default OpportunityOverviewReport;
