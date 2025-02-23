import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img6 from "../images/property/img6.jpeg";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const InspectionMapDetails = () => {
  const data = [
    {
      unitNumber: "UNIT25-1186",
      unitName: "Unit-2 (Sale)",
      unitCategoryl: "Residential",
      revenueType: "Sale",
      unitPurpose: "Residential",
    },
    {
      unitNumber: "UNIT25-1185",
      unitName: "Unit-1 (Lease)",
      unitCategoryl: "Residential",
      revenueType: "Lease",
      unitPurpose: "Residential",
    },
  ];

  const columns = [
    {
      name: "Unit Number",
      selector: (row) => row.unitNumber,
    },
    {
      name: "Unit Name",
      selector: (row) => <Link to={`/map-unit-details`}>{row.unitName}</Link>,
    },
    {
      name: "Unit Categoryl",
      selector: (row) => row.unitCategoryl,
    },
    {
      name: "Revenue Type",
      selector: (row) => row.revenueType,
    },
    {
      name: "Unit Purpose",
      selector: (row) => row.unitPurpose,
    },
  ];

  const handleBack = () => {
    window.history.back();
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen">
      <div className="bg-white flex justify-between items-center mb-4 p-2">
        <h1 className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          <span>Serenity Towers</span>
        </h1>
      </div>

      <div className="p-4">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center gap-6 flex-wrap w-full">
            <div className="flex items-center">
              <img
                src={img6}
                alt="Property"
                className="w-20 h-20 rounded-full mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  PROPERTY DETAILS{" "}
                  <span className="text-white shadow rounded-lg text-sm bg-[#071741] p-2">
                    PROP25-324
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Company Name</h3>
              <p>Business Development</p>
            </div>
            <div>
              <h3 className="font-semibold">Property name</h3>
              <p>Serenity Towers</p>
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-balance">
                25/12, Mukta Gardens, Chennai, Tamil Nadu, India, 600031
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
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
            highlightOnHover
            responsive
            striped
          />
        </div>
      </div>
    </div>
  );
};

export default InspectionMapDetails;
