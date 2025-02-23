import React, { useState } from "react";
import { FiSearch, FiFilter, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationsCRM = () => {
    const [startDate, setStartDate] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);  

    const [selectedStatuses, setSelectedStatuses] = useState([]);
    
    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
            e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };

    const columns = [
        {
            name: "Reservation ID",
            selector: (row) => row.ReservationID,
            cell: (row) => (
                <a href={`/reservation-crm-details`}>
                    {row.ReservationID}
                </a>
            ),
        },
        { name: "Reservation Type", selector: (row) => row.ReservationType },
        { name: "Quotation ID", selector: (row) => row.QuotationID },
        { name: "Purpose", selector: (row) => row.Purpose },
        { name: "Number Of Units", selector: (row) => row.NumberOfUnits },
        { name: "Revenue", selector: (row) => row.Revenue },
        { name: "Reservation Valid Till", selector: (row) => row.ReservationValidTill },
        { name: "Status", selector: (row) => row.status },
    ];
    
    const tableData = [
        {
            id: 1,
            ReservationID: "BOOK240924-0014",
            ReservationType: "Reserved",
            QuotationID: "QUOT240924-554",
            Purpose: "Residential",
            NumberOfUnits: "1",
            Revenue: "SAR 5200",
            ReservationValidTill: "30 Sep 2024",
            status: "Active",
        },
    ];
    

    const filteredData = tableData.filter(
        (row) =>
         
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
      );


  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Reservations</div>
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiUser className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="businessDev">Business Development</option>
                </select>
            </div>
        </div>

        <div className="p-2">
            <div className="bg-white shadow-md rounded-md overflow-x-auto p-4">

                <div className="flex flex-wrap gap-4 items-center justify-between mb-4">

                    <div className="flex w-full md:w-auto gap-2 flex-1">
                        <div className="flex w-auto">
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

                    <div className="flex w-full md:w-auto gap-2 justify-start md:justify-end">
                        <button 
                            className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                            onClick={() => setShowFilter(true)}
                        >
                        <FiFilter className="mr-2 text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
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
                    <label className="block text-gray-700 font-medium mb-2">Reservation Status</label>
                    <div className="flex flex-wrap gap-2">
                        {["Booking", "Reserve"].map((ReservationStatus, index) => (
                            <label
                            key={ReservationStatus}
                            className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                            >
                            <input
                                type="checkbox"
                                value={ReservationStatus}
                                className="hidden"
                                onChange={(e) => handleStatusChange(e, ReservationStatus)}
                            />
                            {ReservationStatus}
                            </label>
                        ))}
                    </div>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <div className="flex flex-wrap gap-2">
                        {["Active", "Cancelled"].map((Status, index) => (
                            <label
                            key={Status}
                            className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                            >
                            <input
                                type="checkbox"
                                value={Status}
                                className="hidden"
                                onChange={(e) => handleStatusChange(e, Status)}
                            />
                            {Status}
                            </label>
                        ))}
                    </div>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Expiry date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        placeholderText="Select Expiry Date"
                    />
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

export default ReservationsCRM;
