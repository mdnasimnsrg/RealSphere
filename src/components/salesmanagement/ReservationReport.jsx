import React, { useState } from "react";
import { Button, Input, Checkbox } from "@mui/material";
import { SaveAlt, FilterList } from "@mui/icons-material";
import * as XLSX from "xlsx";
import { FiUser, FiFilter, FiX } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservationReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const rows = [
    {
      sno: "1",
      date: "23 Jan 2025",
      vendorId: "4",
      vendorName: "DHL",
      vendorPerson: "yusuf",
      referenceId: "PG2VE250123-155",
      unitNo: "UNIT24-980",
      entryGate: "Gate-A",
      checkedIn: "2025-Jan-23 11:20 pm",
      exitGate: "Gate-A",
      checkedOut: "-",
      status: "Yet to Check-Out",
    },
    {
      sno: "2",
      date: "21 Jan 2025",
      vendorId: "12",
      vendorName: "Blue Dart",
      vendorPerson: "Ahmad Ali",
      referenceId: "PG2VE250121-151",
      unitNo: "UNIT24-980",
      entryGate: "Gate-A",
      checkedIn: "2025-Jan-21 09:00 pm",
      exitGate: "Gate-A",
      checkedOut: "2025-Jan-21 10:34 pm",
      status: "Checked-Out",
    },
  ];

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, "VisitorWorkerReport.xlsx");
  };

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  const [selectedColumns, setSelectedColumns] = useState([]);
  const columns = [
    "Sno",
    "Date",
    "Vendor ID",
    "Vendor Name",
    "Vendor Person Name",
    "Reference ID",
    "Unit No",
    "Entry Gate",
    "Checked In",
    "Exit Gate",
    "Checked Out",
    "Status",
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
        <div className="text-xl font-semibold">Reservation Report</div>
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
            <div className="flex w-full md:w-auto gap-2 ">
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

          <div className="text-center text-gray-500">
            <p>No data found</p>
          </div>
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

export default ReservationReport;
