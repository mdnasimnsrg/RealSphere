import React, { useState } from "react";
import { FiCalendar, FiUser, FiMoreVertical } from "react-icons/fi";
import Card from "../components/Card";
import ResourceList from "../components/ResourceList";
import Chart from "react-apexcharts";

const ResourceManager = () => {

  const pieChartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Security Guard", "Inspector", "Worker", "Generic Job"],
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  };

  const pieChartData = [30, 20, 25, 25];

  const [menuVisible, setMenuVisible] = useState({
      menu: false,
      menu1: false,
  });

  const toggleMenu = (menu) => {
      setMenuVisible((prev) => ({
          ...prev,
          [menu]: !prev[menu],
      }));
  };

  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: [
      "Plumber",
      "Doctor",
      "Cook",
      "Driver",
      "Gym Instructor",
      "Electrician",
    ],
    legend: {
      position: "right",
      fontSize: "14px",
    },
    colors: [
      "#1E88E5", // Blue
      "#D81B60", // Pink
      "#FFB300", // Orange
      "#43A047", // Green
      "#8E24AA", // Purple
      "#FB8C00", // Yellow
    ],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartData = [10, 20, 15, 25, 10, 20];

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4">
        <div className="text-xl font-semibold">Resource Manager Dashboard</div>

        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiCalendar className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
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
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="businessDev">Business Development</option>
                </select>
            </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <Card title="Total Resources" value="27" />
          <Card title="Inspector" value="13" />
          <Card title="Employees" value="64" />
          <Card title="Workers" value="9" />
          <Card title="Security Guards" value="9" />
          <Card title="Registered Workers" value="12" />
        </div>

        <div className="grid col-span-2 bg-white shadow-md rounded p-4">
          <div className="flex items-center justify-between w-full mb-5">
              <h2 className="text-lg font-bold">Resource List</h2>
              <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                  <select
                      className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                  >
                      <option value="">All Developments</option>
                      <option value="facilityDevelopment">Facility Development</option>
                      <option value="facilityDevelopment">Security Development</option>
                      <option value="facilityDevelopment">Inspection Development</option>
                      <option value="facilityDevelopment">Accounts Development</option>
                      <option value="facilityDevelopment">Sales Development</option>
                  </select>
              </div>
          </div>
          <ResourceList />
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-lg mb-4">Naveenraj Murugan - Ongoing Jobs (0)</h2>
            <img
            src="path-to-no-data-image.png"
            alt="No Data"
            className="w-40 h-40 mb-4"
            />
            <p className="text-gray-600">No data available</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-lg mb-4">Job Completion KPI</h2>
            <img
            src="path-to-no-data-image.png"
            alt="No Data"
            className="w-40 h-40 mb-4"
            />
            <p className="text-gray-600">No data available</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-lg mb-4">Leave & Time Off</h2>
            <img
            src="path-to-no-data-image.png"
            alt="No Data"
            className="w-40 h-40 mb-4"
            />
            <p className="text-gray-600">No data available</p>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Resource Vs Jobs</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Resource Name</th>
                  <th className="p-2 text-left">Total Jobs</th>
                  <th className="p-2 text-left">Assigned</th>
                  <th className="p-2 text-left">Ongoing</th>
                  <th className="p-2 text-left">Completed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Kartik", total: 1, assigned: 1, ongoing: 0, completed: 0 },
                  { name: "Kiddo", total: 1, assigned: 0, ongoing: 0, completed: 1 },
                  { name: "Vikram", total: 2, assigned: 2, ongoing: 0, completed: 0 },
                  { name: "Zabuza", total: 0, assigned: 0, ongoing: 0, completed: 0 },
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{row.name}</td>
                    <td className="p-2">{row.total}</td>
                    <td className="p-2">{row.assigned}</td>
                    <td className="p-2">{row.ongoing}</td>
                    <td className="p-2">{row.completed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow-md rounded p-4 relative">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Jobs & Roles</h2>
                <button
                    onClick={() => toggleMenu("menu")}
                    className="text-gray-500 hover:text-black focus:outline-none"
                >
                    <FiMoreVertical size={20} />
                </button>
          </div>

          {menuVisible.menu && (
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
            options={pieChartOptions}
            series={pieChartData}
            type="pie"
            width="100%"
            height="300"
          />
        </div>
      </div>
      
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Completed Jobs</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Resource Name</th>
                  <th className="p-2 text-left">Jobs</th>
                  <th className="p-2 text-left">Projected</th>
                  <th className="p-2 text-left">Actual</th>
                  <th className="p-2 text-left">Others</th>
                  <th className="p-2 text-left">Ontime %</th>
                  <th className="p-2 text-left">Delayed %</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Kartik", jobs: 1, projected: "3hr", actual: "0hr", others: "0hr", ontime: "-", delayed: "-"},
                  { name: "Kiddo", jobs: 1, projected: "1hr", actual: "0hr", others: "0hr", ontime: "-", delayed: "-"},
                  { name: "Vikram", jobs: 2, projected: "6hr", actual: "0hr", others: "0hr", ontime: "-", delayed: "-"},
                  { name: "Zabuza", jobs: 0, projected: "0hr", actual: "0hr", others: "0hr", ontime: "-", delayed: "-"},
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{row.name}</td>
                    <td className="p-2">{row.jobs}</td>
                    <td className="p-2">{row.projected}</td>
                    <td className="p-2">{row.actual}</td>
                    <td className="p-2">{row.others}</td>
                    <td className="p-2">{row.ontime}</td>
                    <td className="p-2">{row.delayed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow-md rounded p-4 relative">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Profession & Skills</h2>
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
            options={chartOptions}
            series={chartData}
            type="pie"
            width="100%"
            height="300"
          />
        </div>
      </div>

    </div>
    
  );
};

export default ResourceManager;
