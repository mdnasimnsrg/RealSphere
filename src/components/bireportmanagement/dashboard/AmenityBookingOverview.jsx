import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";

const AmenityBookingOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  const columns = [
    { name: "Booking ID", selector: (row) => row.bookingId },
    { name: "Booking Date", selector: (row) => row.bookingDate },
    { name: "Amenity ID", selector: (row) => row.amenityId },
    { name: "Amenity Name", selector: (row) => row.amenityName },
    { name: "Unit", selector: (row) => row.unit },
    { name: "Booking From", selector: (row) => row.bookingFrom },
    { name: "Booking To", selector: (row) => row.bookingTo },
    { name: "Number of Slots/Days", selector: (row) => row.numSlots },
    { name: "Rate Per Slot/Day", selector: (row) => row.ratePerSlot },
    { name: "Managed Invoice ID", selector: (row) => row.managedInvoiceId },
    {
      name: "Managed Invoice Amount",
      selector: (row) => row.managedInvoiceAmount,
    },
    { name: "Planned Date", selector: (row) => row.plannedDate },
    { name: "Posted Date", selector: (row) => row.postedDate },
    { name: "Invoice Number", selector: (row) => row.invoiceNumber },
    { name: "Invoice Amount", selector: (row) => row.invoiceAmount },
    { name: "Invoice Date", selector: (row) => row.invoiceDate },
    { name: "Booking Status", selector: (row) => row.bookingStatus },
    { name: "Payment Status", selector: (row) => row.paymentStatus },
    { name: "Account ID", selector: (row) => row.accountId },
    { name: "Property", selector: (row) => row.property },
  ];

  const tableData = [
    {
      id: 1,
      bookingId: "ABY41109-501",
      bookingDate: "09 Nov 2024",
      amenityId: "58",
      amenityName: "Meeting Room",
      unit: "Falcon_WS_1",
      bookingFrom: "10 Nov 2024",
      bookingTo: "10 Nov 2024",
      numSlots: "1",
      ratePerSlot: "0",
      managedInvoiceId: "-",
      managedInvoiceAmount: "-",
      plannedDate: "-",
      postedDate: "-",
      invoiceNumber: "-",
      invoiceAmount: "-",
      invoiceDate: "-",
      bookingStatus: "Booked",
      paymentStatus: "-",
      accountId: "-",
      property: "Falcon Workspace",
    },
    {
      id: 1,
      bookingId: "ABY41109-501",
      bookingDate: "09 Nov 2024",
      amenityId: "58",
      amenityName: "Meeting Room",
      unit: "Falcon_WS_1",
      bookingFrom: "10 Nov 2024",
      bookingTo: "10 Nov 2024",
      numSlots: "1",
      ratePerSlot: "0",
      managedInvoiceId: "-",
      managedInvoiceAmount: "-",
      plannedDate: "-",
      postedDate: "-",
      invoiceNumber: "-",
      invoiceAmount: "-",
      invoiceDate: "-",
      bookingStatus: "Booked",
      paymentStatus: "-",
      accountId: "-",
      property: "Falcon Workspace",
    },
    {
      id: 1,
      bookingId: "ABY41109-501",
      bookingDate: "09 Nov 2024",
      amenityId: "58",
      amenityName: "Meeting Room",
      unit: "Falcon_WS_1",
      bookingFrom: "10 Nov 2024",
      bookingTo: "10 Nov 2024",
      numSlots: "1",
      ratePerSlot: "0",
      managedInvoiceId: "-",
      managedInvoiceAmount: "-",
      plannedDate: "-",
      postedDate: "-",
      invoiceNumber: "-",
      invoiceAmount: "-",
      invoiceDate: "-",
      bookingStatus: "Booked",
      paymentStatus: "-",
      accountId: "-",
      property: "Falcon Workspace",
    },
    {
      id: 1,
      bookingId: "ABY41109-501",
      bookingDate: "09 Nov 2024",
      amenityId: "58",
      amenityName: "Meeting Room",
      unit: "Falcon_WS_1",
      bookingFrom: "10 Nov 2024",
      bookingTo: "10 Nov 2024",
      numSlots: "1",
      ratePerSlot: "0",
      managedInvoiceId: "-",
      managedInvoiceAmount: "-",
      plannedDate: "-",
      postedDate: "-",
      invoiceNumber: "-",
      invoiceAmount: "-",
      invoiceDate: "-",
      bookingStatus: "Booked",
      paymentStatus: "-",
      accountId: "-",
      property: "Falcon Workspace",
    },
    {
      id: 1,
      bookingId: "ABY41109-501",
      bookingDate: "09 Nov 2024",
      amenityId: "58",
      amenityName: "Meeting Room",
      unit: "Falcon_WS_1",
      bookingFrom: "10 Nov 2024",
      bookingTo: "10 Nov 2024",
      numSlots: "1",
      ratePerSlot: "0",
      managedInvoiceId: "-",
      managedInvoiceAmount: "-",
      plannedDate: "-",
      postedDate: "-",
      invoiceNumber: "-",
      invoiceAmount: "-",
      invoiceDate: "-",
      bookingStatus: "Booked",
      paymentStatus: "-",
      accountId: "-",
      property: "Falcon Workspace",
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(row.status)
  );

  return (
    <div className="">
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-lg md:text-xl font-semibold">
          Amenity Booking Report
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 w-full md:w-auto">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer w-full md:w-auto">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white shadow-md rounded-md p-4 w-full overflow-x-auto">
          <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-between mb-4">
            <div className="flex w-full md:w-auto gap-2 flex-1">
              <div className="flex w-full md:w-auto">
                <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                  <FiSearch className="text-gray-600" />
                </button>
                <input
                  type="text"
                  placeholder="Search by ID"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-full md:w-auto gap-2 justify-start md:justify-end">
              <button
                className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                onClick={() => setShowFilter(true)}
              >
                <FiFilter className="mr-2 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="relative w-full min-h-96 max-h-[600px] overflow-y-scroll scrollbar-hide">
            <div className="absolute w-full top-0 left-0">
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                striped
                responsive
              />
            </div>
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`bg-white w-full sm:w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-lg md:text-xl font-semibold mb-4">Filter</h2>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Unit
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Unit</option>
                <option>Unit A</option>
                <option>Unit B</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {["Reopened", "Open", "Assigned", "Resolved", "Cancelled"].map(
                  (status) => (
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
                  )
                )}
              </div>
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

export default AmenityBookingOverview;
