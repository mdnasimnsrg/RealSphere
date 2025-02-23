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

const RegisteredWorkerRequest = () => {
  const rows = [
    {
      sno: "1",
      domesticId: "HP-0068",
      domesticName: "Guna",
      profession: "Plumber",
      category: "Plumber",
      referenceId: "HPR_-288",
      requestedBy: "Mosco",
      unitNo: "Unit 3, UNIT24-914",
      domesticNo: "8502147854",
      raisedOn: "2024-Nov-25 07:10 pm",
      status: "Approved",
    },
    {
      sno: "2",
      domesticId: "HP-0067",
      domesticName: "Junaid",
      profession: "Electrician",
      category: "Electrician",
      referenceId: "HPR_-287",
      requestedBy: "Mosco",
      unitNo: "Unit 3, UNIT24-914",
      domesticNo: "5498484451",
      raisedOn: "2024-Sep-27 06:35 pm",
      status: "Rejected",
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
    "Domestic Help ID",
    "Domestic Helper Name",
    "Profession",
    "Category",
    "Reference ID",
    "Requested By",
    "Unit No",
    "Domestic Help Number",
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
          Registered Worker Request Report
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
                  <TableCell>Domestic Help ID</TableCell>
                  <TableCell>Domestic Helper Name</TableCell>
                  <TableCell>Profession</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Reference ID</TableCell>
                  <TableCell>Requested By</TableCell>
                  <TableCell>Unit No</TableCell>
                  <TableCell>Domestic Help Number</TableCell>
                  <TableCell>Raised On</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.sno}</TableCell>
                      <TableCell>{row.domesticId}</TableCell>
                      <TableCell>{row.domesticName}</TableCell>
                      <TableCell>{row.profession}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.referenceId}</TableCell>
                      <TableCell>{row.requestedBy}</TableCell>
                      <TableCell>{row.unitNo}</TableCell>
                      <TableCell>{row.domesticNo}</TableCell>
                      <TableCell>{row.raisedOn}</TableCell>
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
                Status
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Status</option>
                <option>Rejected</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Cancelled</option>
              </select>
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

export default RegisteredWorkerRequest;
