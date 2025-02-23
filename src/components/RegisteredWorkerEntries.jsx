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

const RegisteredWorkerEntries = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const rows = [
    {
      sno: "1",
      date: "25 Nov 2024",
      domesticId: "HP-0068",
      domesticName: "Guna",
      category: "Plumber",
      referenceId: "PG2DH241125-118",
      requestedBy: "Mosco",
      unit: "4",
      domesticNo: "8502147854",
      checkedInGate: "Entrance Gate",
      checkedInBy: "Madara",
      checkedInDateTime: "2024-Nov-25 07:21 pm",
      checkedOutGate: "Entrance Gate",
      checkedOutBy: "Madara",
      checkedOutDateTime: "2024-Nov-25 07:21 pm",
    },
    {
      sno: "2",
      date: "25 Nov 2024",
      domesticId: "HP-0067",
      domesticName: "Junaid",
      category: "Electrician",
      referenceId: "PG2DH241125-117",
      requestedBy: "Mosco",
      unit: "4",
      domesticNo: "5498484451",
      checkedInGate: "Entrance Gate",
      checkedInBy: "Madara",
      checkedInDateTime: "2024-Nov-25 07:21 pm",
      checkedOutGate: "Entrance Gate",
      checkedOutBy: "Madara",
      checkedOutDateTime: "2024-Nov-25 07:21 pm",
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
    "Sno",
    "Date",
    "Domestic Help ID",
    "Domestic Helper Name",
    "Category",
    "Reference ID",
    "Requested By",
    "Unit",
    "Domestic Help Number",
    "Checked In Gate",
    "Checked In By",
    "Checked In Date and Time",
    "Checked Out Gate",
    "Checked Out By",
    "Checked Out Date and Time",
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
          Registered Worker Entries Report
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
                  <TableCell>Sno</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Domestic Help ID</TableCell>
                  <TableCell>Domestic Helper Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Reference ID</TableCell>
                  <TableCell>Requested By</TableCell>
                  <TableCell>Unit</TableCell>
                  <TableCell>Domestic Help Number</TableCell>
                  <TableCell>Checked In Gate</TableCell>
                  <TableCell>Checked In By</TableCell>
                  <TableCell>Checked In Date and Time</TableCell>
                  <TableCell>Checked Out Gate</TableCell>
                  <TableCell>Checked Out By</TableCell>
                  <TableCell>Checked Out Date and Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.sno}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.domesticId}</TableCell>
                      <TableCell>{row.domesticName}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.referenceId}</TableCell>
                      <TableCell>{row.requestedBy}</TableCell>
                      <TableCell>{row.unit}</TableCell>
                      <TableCell>{row.domesticNo}</TableCell>
                      <TableCell>{row.checkedInGate}</TableCell>
                      <TableCell>{row.checkedInBy}</TableCell>
                      <TableCell>{row.checkedInDateTime}</TableCell>
                      <TableCell>{row.checkedOutGate}</TableCell>
                      <TableCell>{row.checkedOutBy}</TableCell>
                      <TableCell>{row.checkedOutDateTime}</TableCell>
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
                Category
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Category</option>
                <option>Security Guard</option>
                <option>Guard</option>
                <option>Inspector</option>
                <option>Doctor</option>
                <option>Plumber</option>
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredWorkerEntries;
