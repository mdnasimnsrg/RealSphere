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

const LeadOverviewReport = () => {
  const rows = [
    {
      leadNumber: "LEAD241024-240",
      createdDate: "24 Oct 2024",
      description: "CRM,PropGOTO",
      contactName: "Testing123",
      emailId: "testing123@gmail.com",
      contactNumber: "+60 1233445567",
      companyName: "ABC Testing 123",
      country: "Malaysia",
      purpose: "Commercial",
      type: "Manage",
      internalLeadSource: "Exhibition",
      CampaignSource: "-",
      Priority: "medium",
      Owner: "Kartica Rahayu",
      status: "In Progress",
      ExternalSource: "-",
      LeaseDuration: "12 Monthly",
      LeaseStartDate: "24 Oct 2024",
      LeaseEndDate: "23 Oct 2025",
      Classification: "Hot",
      JobTitle: "Manager",
      City: "Wangsa Maju",
      Address1: "-",
      Address2: "-",
      Website: "-",
      ReferrerName: "-",
      ReferrerCompany: "-",
      BudgetAmount: "-",
      ShowcaseRequired: "false",
      InterestConfirmed: "false",
      ExistingCustomer: "false",
      Property: "Riverbend Towers",
      Budget: "-",
      ExpectedClosePeriod: "-",
      UnitCount: "30",
      UnitType: "2 BHK",
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
    "Lead Number",
    "Created Date",
    "Description",
    "Contact Name",
    "Email Id",
    "Contact Number",
    "Company Name",
    "Country",
    "Purpose",
    "Type",
    "Internal Lead Source",
    "Campaign Source",
    "Priority",
    "Owner",
    "Status",
    "External Source",
    "Lease Duration",
    "Lease Start Date",
    "Lease End Date",
    "Classification",
    "Job Title",
    "City",
    "Address 1",
    "Address 2",
    "Website",
    "Referrer Name",
    "Referrer Company",
    "Budget Amount",
    "Showcase Required?",
    "Interest Confirmed?",
    "Existing Customer",
    "Property",
    "Budget",
    "Expected Close Period",
    "Unit Count",
    "Unit Type",
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
        <div className="text-xl font-semibold">Lead Overview Report</div>
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
            <div className="flex items-center space-x-2 border rounded-lg shadow-lg text-nowrap">
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
                  <TableCell>Lead Number</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Email Id</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Internal Lead Source</TableCell>
                  <TableCell>Campaign Source</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>External Source</TableCell>
                  <TableCell>Lease Duration</TableCell>
                  <TableCell>Lease Start Date</TableCell>
                  <TableCell>Lease End Date</TableCell>
                  <TableCell>Classification</TableCell>
                  <TableCell>Job Title</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Address 1</TableCell>
                  <TableCell>Address 2</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Referrer Name</TableCell>
                  <TableCell>Referrer Company</TableCell>
                  <TableCell>Budget Amount</TableCell>
                  <TableCell>Showcase Required?</TableCell>
                  <TableCell>Interest Confirmed?</TableCell>
                  <TableCell>Existing Customer</TableCell>
                  <TableCell>Property</TableCell>
                  <TableCell>Budget</TableCell>
                  <TableCell>Expected Close Period</TableCell>
                  <TableCell>Unit Count</TableCell>
                  <TableCell>Unit Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.leadNumber}</TableCell>
                      <TableCell>{row.createdDate}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.contactName}</TableCell>
                      <TableCell>{row.emailId}</TableCell>
                      <TableCell>{row.contactNumber}</TableCell>
                      <TableCell>{row.companyName}</TableCell>
                      <TableCell>{row.country}</TableCell>
                      <TableCell>{row.purpose}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.internalLeadSource}</TableCell>
                      <TableCell>{row.CampaignSource}</TableCell>
                      <TableCell>{row.Priority}</TableCell>
                      <TableCell>{row.Owner}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.ExternalSource}</TableCell>
                      <TableCell>{row.LeaseDuration}</TableCell>
                      <TableCell>{row.LeaseStartDate}</TableCell>
                      <TableCell>{row.LeaseEndDate}</TableCell>
                      <TableCell>{row.Classification}</TableCell>
                      <TableCell>{row.JobTitle}</TableCell>
                      <TableCell>{row.City}</TableCell>
                      <TableCell>{row.Address1}</TableCell>
                      <TableCell>{row.Address2}</TableCell>
                      <TableCell>{row.Website}</TableCell>
                      <TableCell>{row.ReferrerName}</TableCell>
                      <TableCell>{row.ReferrerCompany}</TableCell>
                      <TableCell>{row.BudgetAmount}</TableCell>
                      <TableCell>{row.ShowcaseRequired}</TableCell>
                      <TableCell>{row.InterestConfirmed}</TableCell>
                      <TableCell>{row.ExistingCustomer}</TableCell>
                      <TableCell>{row.Property}</TableCell>
                      <TableCell>{row.Budget}</TableCell>
                      <TableCell>{row.ExpectedClosePeriod}</TableCell>
                      <TableCell>{row.UnitCount}</TableCell>
                      <TableCell>{row.UnitType}</TableCell>
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

export default LeadOverviewReport;
