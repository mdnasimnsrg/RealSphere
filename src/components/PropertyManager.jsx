import React, { useState } from "react";
import { FiUser, FiMoreVertical } from "react-icons/fi";
import Chart from "react-apexcharts";
import { DataGrid } from "@mui/x-data-grid";

const PropertyManager = () => {
  const [menuVisible, setMenuVisible] = useState({
    menu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });

  const toggleMenu = (menu) => {
    console.log("Toggling menu:", menu);
    setMenuVisible((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const data = {
    summaryCards: [
      { title: "Properties", value: 49, icon: "lock" },
      { title: "Block/مبنى", value: 23, icon: "building" },
      { title: "Floor/طابق", value: 19, icon: "layers" },
    ],
    summaryCards1: [
      { title: "Vacant Units", value: 137, icon: "house" },
      { title: "Occupied Units", value: 43, icon: "house" },
      { title: "Non Performing Units", value: 153, icon: "house" },
    ],
    summaryCards2: [
      { title: "Total Units", value: 181, icon: "house" },
      { title: "Plan", value: 28, icon: "house" },
      { title: "Released", value: 150, icon: "house" },
    ],
    summaryCards3: [
      { title: "Missing Pricing", value: 47, icon: "price" },
      { title: "Develop", value: 0, icon: "price" },
      { title: "Blocked", value: 3, icon: "price" },
    ],
    charts: {
      propertyType: {
        series: [25, 15, 10, 8, 5, 2, 35],
        labels: [
          "Apartment",
          "Villa",
          "Building",
          "Commercial",
          "Condo",
          "Hostel",
          "Office",
        ],
      },
      unitStatus: {
        series: [
          { name: "Lease", data: [77, 27] },
          { name: "Manage", data: [37, 6] },
          { name: "Sale", data: [10, 23] },
        ],
        categories: ["Lease", "Manage", "Sale"],
      },
      unitPurpose: {
        series: [181, 29, 5],
        labels: ["Residential", "Commercial", "Other"],
      },
    },
  };

  const chartOptions = React.useMemo(
    () => ({
      donut: {
        chart: { type: "donut", toolbar: { show: false } },
        labels: data.charts.propertyType.labels,
        legend: { position: "right" },
      },
      bar: {
        chart: { type: "bar", stacked: true, toolbar: { show: false } },
        xaxis: { categories: data.charts.unitStatus.categories },
      },
    }),
    [data.charts.propertyType.labels, data.charts.unitStatus.categories]
  );

  const occupancyColumns = [
    { field: "propertyName", headerName: "Property Name", flex: 1 },
    { field: "totalUnits", headerName: "Total Units/Seats", flex: 1 },
    { field: "vacant", headerName: "Vacant", flex: 1 },
    { field: "occupied", headerName: "Occupied", flex: 1 },
    { field: "percentage", headerName: "Occupied %", flex: 1 },
  ];

  const occupancyRows = [
    {
      id: 1,
      propertyName: "Alexandria",
      totalUnits: 4,
      vacant: 1,
      occupied: 3,
      percentage: "75.00%",
    },
    {
      id: 2,
      propertyName: "Alexandria",
      totalUnits: 4,
      vacant: 1,
      occupied: 3,
      percentage: "75.00%",
    },
    {
      id: 3,
      propertyName: "Alexandria",
      totalUnits: 4,
      vacant: 1,
      occupied: 3,
      percentage: "75.00%",
    },
    {
      id: 4,
      propertyName: "Alexandria",
      totalUnits: 4,
      vacant: 1,
      occupied: 3,
      percentage: "75.00%",
    },
    {
      id: 5,
      propertyName: "Alexandria",
      totalUnits: 4,
      vacant: 1,
      occupied: 3,
      percentage: "75.00%",
    },
  ];

  const areaColumns = [
    { field: "unitType", headerName: "Unit/Seat Type", flex: 1 },
    { field: "carpet", headerName: "Carpet", flex: 1 },
    { field: "buildup", headerName: "Buildup", flex: 1 },
    { field: "superBuildup", headerName: "Super Buildup", flex: 1 },
    { field: "units", headerName: "Units/Seats", flex: 1 },
  ];

  const areaRows = [
    {
      id: 1,
      unitType: "Storage",
      carpet: 0,
      buildup: 0,
      superBuildup: 20,
      units: 2,
    },
    {
      id: 2,
      unitType: "Najd - Villa",
      carpet: 257,
      buildup: 0,
      superBuildup: 19300,
      units: 2,
    },
    {
      id: 3,
      unitType: "4 BHK",
      carpet: 190,
      buildup: 1110,
      superBuildup: 1450,
      units: 5,
    },
    {
      id: 4,
      unitType: "Parking",
      carpet: 0,
      buildup: 0,
      superBuildup: 190,
      units: 2,
    },
    {
      id: 5,
      unitType: "5+ BHK",
      carpet: 7540,
      buildup: 9050,
      superBuildup: 10560,
      units: 4,
    },
  ];

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4">
        <div className="text-xl font-semibold">Property Manager Dashboard</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:flex flex-wrap mt-2 md:space-x-4 space-y-4 p-4">
        <div className="flex-1 space-y-4">
          {data.summaryCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
            >
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>{card.value}</span>
              </div>
              <p className="font-semibold text-center mt-2">{card.title}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-4 relative z-0x">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Property Type</h2>
            <button
              onClick={() => toggleMenu("menu")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu && (
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md border p-2 z-5">
              <ul className="text-sm">
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  View in full screen
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Print chart
                </li>
                <hr />
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PNG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download JPEG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PDF document
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download SVG vector image
                </li>
              </ul>
            </div>
          )}

          <Chart
            options={chartOptions.donut}
            series={data.charts.propertyType.series}
            type="donut"
            width="330"
          />
        </div>

        <div className="flex-1 space-y-4">
          {data.summaryCards1.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
            >
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>{card.value}</span>
              </div>
              <p className="font-semibold text-center mt-2">{card.title}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-4 relative">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Unit Status</h2>
            <button
              onClick={() => toggleMenu("menu1")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu1 && (
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md border p-2 z-10">
              <ul className="text-sm">
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  View in full screen
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Print chart
                </li>
                <hr />
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PNG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download JPEG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PDF document
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download SVG vector image
                </li>
              </ul>
            </div>
          )}

          <Chart
            options={chartOptions.bar}
            series={data.charts.unitStatus.series}
            type="bar"
            width="330"
          />
        </div>

        <div className="flex-1 space-y-4">
          {data.summaryCards2.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
            >
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>{card.value}</span>
              </div>
              <p className="font-semibold text-center mt-2">{card.title}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-4">
          {data.summaryCards3.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
            >
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>{card.value}</span>
              </div>
              <p className="font-semibold text-center mt-2">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:flex md:space-x-4 space-y-4  p-4 flex-wrap">
        <div className="flex-1 space-y-4">
          {data.summaryCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
            >
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>{card.value}</span>
              </div>
              <p className="font-semibold text-center mt-2">{card.title}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-4 relative">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Unit Status</h2>
            <button
              onClick={() => toggleMenu("menu2")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu2 && (
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md border p-2 z-10">
              <ul className="text-sm">
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  View in full screen
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Print chart
                </li>
                <hr />
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PNG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download JPEG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PDF document
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download SVG vector image
                </li>
              </ul>
            </div>
          )}

          <Chart
            options={chartOptions.bar}
            series={data.charts.unitStatus.series}
            type="bar"
            width="330"
          />
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-4 relative">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Property Type</h2>
            <button
              onClick={() => toggleMenu("menu3")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu3 && (
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md border p-2 z-5">
              <ul className="text-sm">
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  View in full screen
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Print chart
                </li>
                <hr />
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PNG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download JPEG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PDF document
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download SVG vector image
                </li>
              </ul>
            </div>
          )}

          <Chart
            options={chartOptions.donut}
            series={data.charts.propertyType.series}
            type="donut"
            width="330"
          />
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-4 relative">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Unit Purpose</h2>
            <button
              onClick={() => toggleMenu("menu4")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu4 && (
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md border p-2 z-5">
              <ul className="text-sm">
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  View in full screen
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Print chart
                </li>
                <hr />
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PNG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download JPEG image
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download PDF document
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Download SVG vector image
                </li>
              </ul>
            </div>
          )}

          <Chart
            options={chartOptions.donut}
            series={data.charts.unitPurpose.series}
            type="donut"
            width="330"
          />
        </div>
      </div>

      <div className="md:flex md:space-x-4 space-y-4 md:space-y-0 p-4">
        <div className="flwx-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Occupancy By Property</h3>
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
              rows={occupancyRows}
              columns={occupancyColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Area Statistics</h3>
          <div style={{ height: "400px", width: "100%" }}>
            <DataGrid
              rows={areaRows}
              columns={areaColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManager;
