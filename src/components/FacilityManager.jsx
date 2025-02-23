import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FiCalendar, FiUser, FiHome, FiMoreVertical } from "react-icons/fi";

const FacilityManager = ({ isSidebarOpen }) => {
  const [menuVisible, setMenuVisible] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
    menu7: false,
    menu8: false,
  });

  const toggleMenu = (menu) => {
    setMenuVisible((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const workOrdersOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Completed", "In Progress", "Pending"],
    colors: ["#4CAF50", "#2196F3", "#FFC107"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    legend: {
      show: false,
    },
  };

  const workOrdersSeries = [55, 35, 11];

  const workOrderTypeOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Move In", "Delivery Order", "Service", "General"],
    colors: ["#2196F3", "#4CAF50", "#FFC107", "#FF5722"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    legend: {
      show: false,
    },
  };

  const workOrderTypeSeries = [25, 35, 25, 15];

  const jobStatusOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [
        "Unassigned",
        "Commenced",
        "Paused",
        "Manager Review",
        "Assigned",
        "Completed",
      ],
    },
    colors: ["#FFA500", "#F44336", "#4CAF50", "#00BCD4", "#FF9800", "#FFC107"],
  };

  const jobStatusSeries = [
    {
      data: [5, 0, 2, 0, 5, 18],
    },
  ];

  const hoursDistributionOptions = {
    chart: {
      type: "area",
    },
    xaxis: {
      categories: ["Projected", "Actual", "Others"],
    },
    colors: ["#FF5722"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
  };

  const hoursDistributionSeries = [
    {
      name: "Values",
      data: [50, 30, 10],
    },
  ];

  const maintenanceRequest = {
    chart: {
      type: "pie",
    },
    labels: ["Completed", "In Progress", "Pending"],
    colors: ["#4CAF50", "#2196F3", "#FFC107"],
    plotOptions: {
      pie: {
        startAngle: -180,
        endAngle: 180,
        offsetY: 10,
      },
    },
    legend: {
      show: false,
    },
  };

  const maintenanceRequestSeries = [55, 35, 10];

  const generalRequest = {
    chart: {
      type: "pie",
    },
    labels: ["Completed", "In Progress", "Pending"],
    colors: ["#4CAF50", "#2196F3", "#FFC107"],
    plotOptions: {
      pie: {
        startAngle: -180,
        endAngle: 180,
        offsetY: 10,
      },
    },
    legend: {
      show: false,
    },
  };

  const generalRequestSeries = [65, 5, 30];

  const itemSubCategory = {
    chart: {
      type: "pie",
    },
    labels: ["Completed", "In Progress", "Pending"],
    colors: ["#4CAF50", "#2196F3", "#FFC107"],
    plotOptions: {
      pie: {
        startAngle: -180,
        endAngle: 180,
        offsetY: 10,
      },
    },
    legend: {
      show: false,
    },
  };

  const itemSubCategorySeries = [15, 5, 30, 12, 20, 8, 10];

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4">
        <div className="text-xl font-semibold">Facility Manager Dashboard</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiCalendar className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="thisWeek">This Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="thisQuarter">This Quarter</option>
              <option value="lastQuarter">Last Quarter</option>
              <option value="thisYear">This Year</option>
              <option value="lastYear">Last Year</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>

          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiHome className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="allProperties">All Properties</option>
              <option value="commercial">Commercial</option>
              <option value="alReem">Al Reem</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-md p-4 relative ">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Work Orders</h2>
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
            options={workOrdersOptions}
            series={workOrdersSeries}
            type="donut"
            width="100%"
          />
        </div>
        <div className="bg-white shadow-md rounded-md p-4 relative">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Work Order Type</h2>
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
            options={workOrderTypeOptions}
            series={workOrderTypeSeries}
            type="donut"
            width="100%"
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-lg mb-4">Third Party Jobs</h2>
            <img
              src="path-to-no-data-image.png"
              alt="No Data"
              className="w-40 h-40 mb-4"
            />
            <p className="text-gray-600">No data available</p>
          </div>

          <div className="space-y-4 col-span-2">
            <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center h-[47%]">
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>0</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12.84a9.7 9.7 0 01-18 0M3.27 7a9.7 9.7 0 0118 0"
                  />
                </svg>
              </div>
              <p className="font-semibold text-center mt-2">
                Reopened Requests
              </p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center h-[47%]">
              <div className="text-3xl font-bold flex items-center space-x-2">
                <span>2</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12.84a9.7 9.7 0 01-18 0M3.27 7a9.7 9.7 0 0118 0"
                  />
                </svg>
              </div>
              <p className="font-semibold text-center mt-2">Rescheduled Jobs</p>
            </div>
          </div>
        </div>

        <div
          className={`bg-white shadow-md rounded-md p-4 w-full overflow-hidden ${
            isSidebarOpen ? "col-span-2" : "col-span-1"
          }`}
        >
          <h2 className="font-semibold text-lg mb-4">Job Status</h2>
          <Chart
            options={jobStatusOptions}
            series={jobStatusSeries}
            type="bar"
            height={250}
            width={"100%"}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 col-span-1">
          <div className="bg-white shadow-md rounded-md p-4 flex items-center">
            <div className="text-3xl font-bold mr-4">5</div>
            <div>
              <p className="font-semibold">Unassigned</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 flex items-center">
            <div className="text-3xl font-bold mr-4">0</div>
            <div>
              <p className="font-semibold">Paused</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 flex items-center">
            <div className="text-3xl font-bold mr-4">2</div>
            <div>
              <p className="font-semibold">Manager Review</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 flex items-center">
            <div className="text-3xl font-bold mr-4">5</div>
            <div>
              <p className="font-semibold">Assigned</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 flex items-center">
            <div className="text-3xl font-bold mr-4">18</div>
            <div>
              <p className="font-semibold">Completed</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 flex items-center">
            <div className="text-3xl font-bold mr-4">0</div>
            <div>
              <p className="font-semibold">Commenced</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 col-span-1">
          <h2 className="font-semibold text-lg mb-4">Hours Distribution</h2>
          <Chart
            options={hoursDistributionOptions}
            series={hoursDistributionSeries}
            type="area"
            height={250}
          />
        </div>

        <div className="lg:col-span-2 w-full relative">
          <div className="">
            <div className="flex flex-wrap bg-white shadow-md rounded-md p-4">
              <div className="w-full lg:w-1/2 p-4 relative h-auto">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">Maintenance Request</h2>
                  <button
                    onClick={() => toggleMenu("menu3")}
                    className="text-gray-500 hover:text-black focus:outline-none"
                  >
                    <FiMoreVertical size={20} />
                  </button>
                </div>
                {menuVisible.menu3 && (
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
                  options={maintenanceRequest}
                  series={maintenanceRequestSeries}
                  type="pie"
                  width="100%"
                />
              </div>
              <div className="w-full lg:w-1/2 p-4 relative h-auto">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">By Category</h2>
                  <button
                    onClick={() => toggleMenu("menu4")}
                    className="text-gray-500 hover:text-black focus:outline-none"
                  >
                    <FiMoreVertical size={20} />
                  </button>
                </div>
                {menuVisible.menu4 && (
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
                  options={workOrdersOptions}
                  series={workOrdersSeries}
                  type="donut"
                  width="100%"
                />
              </div>
            </div>

            <div className="flex flex-wrap bg-white shadow-md rounded-md p-4">
              <div className="w-full lg:w-1/2 p-4 relative h-auto">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">General Request</h2>
                  <button
                    onClick={() => toggleMenu("menu5")}
                    className="text-gray-500 hover:text-black focus:outline-none"
                  >
                    <FiMoreVertical size={20} />
                  </button>
                </div>
                {menuVisible.menu5 && (
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
                  options={generalRequest}
                  series={generalRequestSeries}
                  type="pie"
                  width="100%"
                />
              </div>
              <div className="w-full lg:w-1/2 p-4 relative h-auto">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">By Category</h2>
                  <button
                    onClick={() => toggleMenu("menu6")}
                    className="text-gray-500 hover:text-black focus:outline-none"
                  >
                    <FiMoreVertical size={20} />
                  </button>
                </div>
                {menuVisible.menu6 && (
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
                  options={workOrdersOptions}
                  series={workOrdersSeries}
                  type="donut"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <div className="flex space-x-4">
              <button className="font-bold text-blue-600 border-b-2 border-blue-600">
                Maintenance
              </button>
              <button className="font-bold text-gray-600">General</button>
            </div>
            <button className="text-blue-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.293-9.707a1 1 0 010 1.414L9.414 12l2.879 2.879a1 1 0 11-1.414 1.414L8 13.414l-2.879 2.879a1 1 0 11-1.414-1.414L6.586 12l-2.879-2.879a1 1 0 111.414-1.414L8 10.586l2.879-2.879a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              View in map
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Request ID, Request Name, Category"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b py-2">
              <span className="font-bold">Unit-1</span>
              <span className="text-gray-600">Electrical</span>
              <span className="text-gray-400">19 Nov 24</span>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <span className="font-bold">Majd- Villa A</span>
              <span className="text-gray-600">Plumbing</span>
              <span className="text-gray-400">31 Oct 24</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span>Rows per page: 10</span>
            <div className="flex space-x-2">
              <button className="px-2 py-1 border rounded-md">1</button>
              <button className="px-2 py-1 border rounded-md">2</button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 relative">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Item Category</h2>
            <button
              onClick={() => toggleMenu("menu7")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu7 && (
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
            options={workOrdersOptions}
            series={workOrdersSeries}
            type="donut"
            width="100%"
          />
        </div>

        <div className="bg-white shadow-md rounded-md p-4 relative">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Item SubCategory</h2>
            <button
              onClick={() => toggleMenu("menu8")}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              <FiMoreVertical size={20} />
            </button>
          </div>

          {menuVisible.menu8 && (
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
            options={itemSubCategory}
            series={itemSubCategorySeries}
            type="pie"
            width="100%"
          />
        </div>

        <div className="space-y-2">
          <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
            <div className="text-3xl font-bold flex items-center space-x-2">
              <span>0</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12.84a9.7 9.7 0 01-18 0M3.27 7a9.7 9.7 0 0118 0"
                />
              </svg>
            </div>
            <p className="font-semibold text-center mt-2">Reopened Requests</p>
          </div>

          <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
            <div className="text-3xl font-bold flex items-center space-x-2">
              <span>2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12.84a9.7 9.7 0 01-18 0M3.27 7a9.7 9.7 0 0118 0"
                />
              </svg>
            </div>
            <p className="font-semibold text-center mt-2">Rescheduled Jobs</p>
          </div>

          <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
            <div className="text-3xl font-bold flex items-center space-x-2">
              <span>2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12.84a9.7 9.7 0 01-18 0M3.27 7a9.7 9.7 0 0118 0"
                />
              </svg>
            </div>
            <p className="font-semibold text-center mt-2">Rescheduled Jobs</p>
          </div>

          <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
            <div className="text-3xl font-bold flex items-center space-x-2">
              <span>2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12.84a9.7 9.7 0 01-18 0M3.27 7a9.7 9.7 0 0118 0"
                />
              </svg>
            </div>
            <p className="font-semibold text-center mt-2">Rescheduled Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityManager;
