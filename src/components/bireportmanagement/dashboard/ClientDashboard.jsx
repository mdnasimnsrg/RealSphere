import React, { useState } from "react";
import {
  FcDepartment,
  FcExpired,
  FcOrganization,
  FcTemplate,
} from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";
import StorageUtilizationChart from "../../ui/StorageUtilizationChart";
import { FiMoreVertical } from "react-icons/fi";
import Chart from "react-apexcharts";

const ClientDashboard = () => {
  const [isResourseMenuOpen, setIsResourseMenuOpen] = useState(false);
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const data = {
    companies: {
      total: 101,
      used: 6,
    },
    functionalLocations: 32,
    properties: {
      total: 1000,
      used: 323,
    },
    subscriptionSummary: {
      lastRenewedDate: null,
      expiryDate: null,
      startDate: "07 May 2023",
    },
    propertyUnits: {
      total: 2499,
      used: 1812,
    },
    seats: {
      total: 100100,
      used: 818,
    },
    propertyTypes: {
      residential: 692,
      commercial: 492,
      stay: 0,
      facilities: 406,
    },
    storageUtilization: {
      totalUnits: 1001099,
      listingUnits: 232,
    },
    listings: {
      private: {
        total: 100,
        listed: 27,
      },
      public: {
        total: 1000,
        listed: 205,
      },
    },
    facilities: {
      total: 999999,
      used: 0,
    },
    stay: 0,
    itemsAndAssets: 166,
  };
  const resourcesOption = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%", // Control inner hole size
        },
      },
    },
    dataLabels: {
      enabled: false, // Hide inside labels
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#1DBF73"], // Light green top
        stops: [0, 100], // Create depth effect
      },
    },
    legend: { show: false }, // Hide default legend
    labels: ["Users", "Generic"], // Labels outside
    colors: ["#1DBF73", "#007BFF"], // Green for Users, Blue for Generic
    stroke: { show: false }, // Remove border
    tooltip: { enabled: true },
  };
  const roleSeries = Array.from(
    { length: 50 },
    () => Math.floor(Math.random() * 50) + 10
  ); // 50 random values

  const roleOptions = {
    chart: {
      type: "donut",
    },
    labels: roleSeries.map((_, i) => `Segment ${i + 1}`), // Generate labels dynamically
    dataLabels: { enabled: false }, // Hide labels inside
    stroke: { show: false }, // Remove segment borders
    legend: { show: false }, // Hide legend
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // Control donut hole size
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => "1363", // Static center value
              fontSize: "24px",
              color: "#000",
            },
          },
        },
      },
    },
    colors: [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
    ], // Random vibrant colors
  };
  return (
    <div className="w-full">
      <div className="bg-white p-4 w-full">
        <p className="font-semibold">Client Manager Dashboard</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {/* left side */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 shadow w-full min-h-36 flex flex-col justify-between rounded">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{`${data.companies.used}/${data.companies.total}`}</span>
                <FcDepartment className="text-2xl" />
              </div>
              <div className="text-sm font-semibold">Companies</div>
            </div>
            <div className="bg-white p-6 shadow w-full  min-h-36 flex flex-col justify-between rounded">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  {data.functionalLocations}
                </span>
                <GrMapLocation className="text-2xl text-emerald-500" />
              </div>
              <div className="text-sm font-semibold">Functional Locations</div>
            </div>
            <div className="bg-white p-6 shadow w-full min-h-36 flex flex-col justify-between rounded md:col-span-full lg:col-span-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{`${data.properties.used}/${data.properties.total}`}</span>
                <FcOrganization className="text-2xl" />
              </div>
              <div className="text-sm font-semibold">Properties</div>
            </div>
          </div>
          {/* Property Units */}
          <div className="bg-white space-y-2 p-4 shadow">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                Property Units -{" "}
                <span className="font-bold">{`${data.propertyUnits.used}/${data.propertyUnits.used}`}</span>
              </p>
              <p className="text-lg font-semibold">
                Seats -{" "}
                <span className="font-bold">{`${data.seats.used}/${data.seats.total}`}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-around items-center">
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-32">
                <p className="font-semibold">Residential</p>
                <span className="font-bold text-lg">692</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-32">
                <p className="font-semibold">Commercial</p>
                <span className="font-bold text-lg">492</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-32">
                <p className="font-semibold">Stay</p>
                <span className="font-bold text-lg">0</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-32">
                <p className="font-semibold">Facilities</p>
                <span className="font-bold text-lg">406</span>
              </div>
            </div>
          </div>
          {/* Listing Units */}
          <div className="bg-white space-y-2 p-4 shadow">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                Listing Units -{" "}
                <span className="font-bold">{`${data.propertyUnits.used}/${data.propertyUnits.used}`}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-around items-center">
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Listed Private</p>
                <span className="font-bold text-lg">692</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Listed Public</p>
                <span className="font-bold text-lg">492</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Facilities</p>
                <span className="font-bold text-lg">0/999999</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Stay</p>
                <span className="font-bold text-lg">0</span>
              </div>
            </div>
          </div>
          {/* Items & Assets - 166 */}
          <div className="bg-white space-y-2 p-4 shadow">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                Items & Assets -{" "}
                <span className="font-bold">{`${data.propertyUnits.used}/${data.propertyUnits.used}`}</span>
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-full text-sm">
                <p className="font-semibold">Inventory</p>
                <span className="font-bold text-lg">692</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-full text-sm">
                <p className="font-semibold">Assets</p>
                <span className="font-bold text-lg">492</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-full text-sm">
                <p className="font-semibold">Services</p>
                <span className="font-bold text-lg">0/999999</span>
              </div>
            </div>
          </div>
          {/* Resources - 262 /100 */}
          <div className="bg-white space-y-2 p-4 shadow">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                Resources -<span className="font-bold">{`262 /100`}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-around items-center">
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Employees</p>
                <span className="font-bold text-lg">692</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Workers</p>
                <span className="font-bold text-lg">492</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Inspectors</p>
                <span className="font-bold text-lg">60</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Guards</p>
                <span className="font-bold text-lg">22</span>
              </div>
            </div>
          </div>
          <div className="bg-white space-y-2 p-4 shadow">
            <div className="flex flex-wrap gap-3 justify-around items-center">
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Account</p>
                <span className="font-bold text-lg">692</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Contacts</p>
                <span className="font-bold text-lg">492</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Vendors</p>
                <span className="font-bold text-lg">60</span>
              </div>
              <div className="p-4 text-center flex flex-col items-center bg-green-50 shadow rounded w-[7.5rem] text-sm">
                <p className="font-semibold">Customers</p>
                <span className="font-bold text-lg">22</span>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="space-y-4">
          <div className="p-4 bg-white shadow">
            <p className="text-lg font-semibold">Subscription Summary</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 flex flex-nowrap gap-2 rounded">
                <div className="h-12 w-12 bg-white rounded-full shadow flex justify-center items-center">
                  <FcTemplate className="text-3xl" />
                </div>

                <p className="flex flex-col">
                  <span className="font-bold">07 May 2023</span>
                  <span className="text-sm font-semibold">
                    Last Renewed Date
                  </span>
                </p>
              </div>
              <div className="p-4 bg-green-50 flex flex-nowrap gap-2 rounded">
                <div className="h-12 w-12 bg-white rounded-full shadow flex justify-center items-center">
                  <FcExpired className="text-3xl" />
                </div>

                <p className="flex flex-col">
                  <span className="font-bold">-</span>
                  <span className="text-sm font-semibold">Expiry date</span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="p-4 bg-white shadow">
            <StorageUtilizationChart />
          </div> */}
          <div className="p-4 bg-white shadow">
            <div className="relative h-[250px]">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Resources</h2>
                <button
                  onClick={() => setIsResourseMenuOpen((pre) => !pre)}
                  className="text-gray-500 hover:text-black focus:outline-none"
                >
                  <FiMoreVertical size={20} />
                </button>
              </div>

              {isResourseMenuOpen && (
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
                options={resourcesOption}
                series={[90, 10]}
                type="donut"
                width={"100%"}
                height={200}
              />
            </div>
          </div>
          <div className="p-4 bg-white shadow ">
            <div className="relative h-[270px]">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Roles</h2>
                <button
                  onClick={() => setIsRoleMenuOpen((pre) => !pre)}
                  className="text-gray-500 hover:text-black focus:outline-none"
                >
                  <FiMoreVertical size={20} />
                </button>
              </div>

              {isRoleMenuOpen && (
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
                options={roleOptions}
                series={roleSeries}
                type="donut"
                height={210}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
