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
} from "@mui/material";
import { SaveAlt } from "@mui/icons-material";
import * as XLSX from "xlsx";
import { FiUser, FiFilter, FiX, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Quotations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const rows = [
    {
      QuotationID: "QUOT241107-707",
      Date: "07 Nov 2024",
      Description: "OPP241107-691/01",
      Purpose: "Residential",
      Type: "Lease",
      Units: "1",
      Revenue: "SAR 118,700",
      Tax: "SAR 0",
      ValidTill: "14 Nov 2024",
      Owner: "Farooq Abdullah",
      Status: "Interested",
    },
    {
      QuotationID: "QUOT241107-707",
      Date: "07 Nov 2024",
      Description: "OPP241107-691/01",
      Purpose: "Residential",
      Type: "Lease",
      Units: "1",
      Revenue: "SAR 118,700",
      Tax: "SAR 0",
      ValidTill: "14 Nov 2024",
      Owner: "Farooq Abdullah",
      Status: "Interested",
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

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Quotations</div>
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
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex w-full md:w-auto gap-2 flex-1">
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

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Quotation ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Units</TableCell>
                  <TableCell>Revenue</TableCell>
                  <TableCell>Tax</TableCell>
                  <TableCell>Valid Till</TableCell>
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
                        <Link to={`/quotation-details`}>{row.QuotationID}</Link>
                      </TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                      <TableCell>{row.Purpose}</TableCell>
                      <TableCell>{row.Type}</TableCell>
                      <TableCell>{row.Units}</TableCell>
                      <TableCell>{row.Revenue}</TableCell>
                      <TableCell>{row.Tax}</TableCell>
                      <TableCell>{row.ValidTill}</TableCell>
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
                Quotation status
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Quotation status</option>
                <option>Interested</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Won</option>
                <option>Not Interested</option>
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

export default Quotations;
