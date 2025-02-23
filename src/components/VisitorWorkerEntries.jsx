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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VisitorWorkerEntries = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const rows = [
    {
      requestType: "WGR",
      date: "23 Dec 2024",
      referenceId: "SR-1270",
      visitorName: "Abdul Farhan",
      unitId: "UNIT24-1158",
      stayType: "Long",
      entryType: "Single",
      entryGate: "Gate-A",
      startDate: "23 Dec 2024",
      endDate: "24 Dec 2024",
      checkIn: "2024-Dec-23 05:56 pm",
      checkOut: "-",
      status: "Yet To Checkout",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter] = React.useState("");
  const [statusFilter] = React.useState("");
  const [setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

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
    "Request Type",
    "Date",
    "Reference ID",
    "Visitor/Worker Name",
    "Unit ID",
    "Stay Type",
    "Entry Type",
    "Entry Gate",
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
        <div className="text-xl font-semibold">
          Visitor & Worker Entries Report
        </div>
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
              <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
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

                  <div className="mt-4 max-h-60 overflow-y-auto">
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
                  <TableCell>Request Type</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Reference ID</TableCell>
                  <TableCell>Visitor/Worker Name</TableCell>
                  <TableCell>Unit ID</TableCell>
                  <TableCell>Stay Type</TableCell>
                  <TableCell>Entry Type</TableCell>
                  <TableCell>Entry Gate</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Checked In</TableCell>
                  <TableCell>Checked Out</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.requestType}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.referenceId}</TableCell>
                      <TableCell>{row.visitorName}</TableCell>
                      <TableCell>{row.unitId}</TableCell>
                      <TableCell>{row.stayType}</TableCell>
                      <TableCell>{row.entryType}</TableCell>
                      <TableCell>{row.entryGate}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.endDate}</TableCell>
                      <TableCell>{row.checkIn}</TableCell>
                      <TableCell>{row.checkOut}</TableCell>
                      <TableCell>{row.status}</TableCell>
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
            className={`bg-white w-98 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
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
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="mb-6 ">
                <label className="block text-gray-700 font-medium mb-2">
                  Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {["WGR", "VGR"].map((status, index) => (
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
                  Property
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Property</option>
                  <option>Property1</option>
                  <option>Property2</option>
                  <option>Property3</option>
                  <option>Property4</option>
                  <option>Property5</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Unit
                </label>
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
                <label className="block text-gray-700 font-medium mb-2">
                  Stay Type
                </label>
                <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Stay Type</option>
                  <option>Short</option>
                  <option>Long</option>
                </select>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  In Out Status
                </label>
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
                    <label className="block text-gray-700 font-medium mb-2">
                      Start Date
                    </label>
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
                    <label className="block text-gray-700 font-medium mb-2">
                      End Date
                    </label>
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
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorWorkerEntries;
