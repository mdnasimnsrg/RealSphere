import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const InspectionMapping = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const data = [
        { image: "", propertyName: "Serenity Towers", propertyNo: "PROP25-324", totalUnits: 2 },
        { image: "", propertyName: "verzon properties", propertyNo: "PROP24-222", totalUnits: 3 },
        { image: "", propertyName: "Commercial", propertyNo: "PROP23-109", totalUnits: 2 },
        { image: "", propertyName: "Al Reem", propertyNo: "PROP23-111", totalUnits: 0 },
        { image: "", propertyName: "Business Center", propertyNo: "PROP23-116", totalUnits: 1 },
        { image: "", propertyName: "Falcon Workspace", propertyNo: "PROP23-112", totalUnits: 5 },
        { image: "", propertyName: "Saooj Villa", propertyNo: "PROP23-113", totalUnits: 0 },
    ];
      
    const columns = [
        {
          name: "Image",
          selector: (row) => (
            <div className="flex justify-center items-center">
              {row.image ? (
                <img
                  src={row.image}
                  alt={row.propertyName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">-</span>
                </div>
              )}
            </div>
          ),
        },
        {
          name: "Property Name",
          selector: (row) => (
                <Link to={`/inspection-map-details`}>
                    {row.propertyName} 
                </Link>
          ),
        },
        {
          name: "Property No",
          selector: (row) => row.propertyNo,
        },
        {
          name: "Total Units",
          selector: (row) => row.totalUnits,
        },
    ];
  return (
    <div>
        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Inspection Mapping</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select
                        className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="businessDev">Business Development</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="p-2">
            <div className="bg-white shadow-md rounded-md p-4">
            
                <div className="flex flex-wrap gap-4 items-center justify-between mb-4">

                    <div className="flex w-full md:w-auto gap-2 flex-1">
                        <div className="flex w-auto">
                        <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                            <FiSearch className="text-gray-600" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search by ID"
                            className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        </div>
                    </div>
                </div>

                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="400px"
                    highlightOnHover
                    className="shadow border rounded-lg"
                />
            </div>
        </div>
    </div>
  );
};

export default InspectionMapping;
