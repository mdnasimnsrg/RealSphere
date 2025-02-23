import React, { useState } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FiCalendar, FiHome, FiUser } from "react-icons/fi";
import Chart from "react-apexcharts";
import {
  FaBars,
  FaRegClock,
  FaCheckCircle,
  FaUserCog,
  FaRegFolder,
  FaRegBuilding,
} from "react-icons/fa";

import DataTable from "react-data-table-component";
const NoDataComponent = () => {
  return (
    <div className="flex justify-center items-center py-10 font-semibold text-gray-800">
      No Data Found
    </div>
  );
};
const InspectionManager = () => {
  const [inspectionWorkOrder] = useState({
    series: [100, 0],
    options: {
      chart: {
        type: "pie",
        toolbar: { show: false },
        height: 250,
        width: "100%",
      },
      dataLabels: { enabled: false },
      labels: ["completed", "open order"],
      colors: ["#4CAF50", "blue"],
      plotOptions: {},
      title: {
        text: "Inspection Work Order",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      tooltip: { enabled: true },
      noData: {
        text: "No Data Found",
        align: "center",
        verticalAlign: "middle",
        style: { color: "#808080", fontSize: "16px" },
      },
      legend: {
        show: true,
      },
    },
  });
  const [inspectionJobType] = useState({
    series: [100, 0],
    options: {
      chart: {
        type: "donut",
        toolbar: { show: false },
        height: 250,
        width: "100%",
      },
      dataLabels: { enabled: false },
      labels: ["Total", "Move in"],
      colors: ["purple", "blue"],
      plotOptions: { pie: { donut: { labels: { show: true } } } },
      title: {
        text: "Inspection Job Type",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      tooltip: { enabled: true },
      noData: {
        text: "No Data Found",
        align: "center",
        verticalAlign: "middle",
        style: { color: "#808080", fontSize: "16px" },
      },
      legend: {
        show: true,
      },
    },
  });
  const [jobStatusChart] = useState({
    series: [
      {
        name: "Count",
        data: [3, 0, 0, 0, 0, 1],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadius: 8,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val;
        },
        style: {
          fontSize: "12px",
          colors: ["#343a40"], // Dark grey color for labels
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

      title: {
        text: "Inspection Job Status",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        },
      },
      colors: ["#007bff"], // Blue color for bars
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });
  const [utilityReading] = useState({
    series: [
      {
        name: "Current Reading",
        data: [0],
      },
      {
        name: "Past Reading",
        data: [0],
      },
    ],

    options: {
      chart: {
        type: "line",
        height: 300,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [""],
      },
      yaxis: {
        min: 0,
        max: 1,
        tickAmount: 5,
      },
      markers: {
        size: 5,
      },
      stroke: {
        width: 2,
      },
      legend: {
        show: true,
        position: "bottom",
        markers: {
          width: 20,
          height: 20,
          customHTML: [
            // Custom icons for legend
            () =>
              `<img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="20" height="20"/>`,
            () =>
              `<img src="https://cdn-icons-png.flaticon.com/512/25/25695.png" width="20" height="20"/>`,
          ],
        },
      },
    },
  });
  const [projectedVsOthersVsactualChart] = useState({
    series: [
      {
        name: "Count",
        data: [1, 0, 0],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadius: 8,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val;
        },
        style: {
          fontSize: "12px",
          colors: ["#343a40"], // Dark grey color for labels
        },
      },
      xaxis: {
        categories: ["Projected", "Actual", "Others"],
      },

      title: {
        text: "Projected Vs Actual Vs Others",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        },
      },
      colors: ["#007bff"], // Blue color for bars
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });
  const completedJobs = [
    {
      id: 1,
      resource: "Kartik",
      jobs: 0,
      projected: "0hr",
      actual: "0hr",
      others: "0hr",
      ontime: "-",
      delayed: "-",
    },
    {
      id: 2,
      resource: "Kiddo",
      jobs: 0,
      projected: "0hr",
      actual: "0hr",
      others: "0hr",
      ontime: "-",
      delayed: "-",
    },
    {
      id: 3,
      resource: "Vikram",
      jobs: 0,
      projected: "0hr",
      actual: "0hr",
      others: "0hr",
      ontime: "-",
      delayed: "-",
    },
  ];
  const getIcon = (status) => {
    switch (status) {
      case "Unassigned":
        return <FaRegFolder className="text-gray-500" />;
      case "Commenced":
        return <FaBars className="text-blue-500" />;
      case "Paused":
        return <FaRegClock className="text-yellow-500" />;
      case "Manager Review":
        return <FaUserCog className="text-orange-500" />;
      case "Assigned":
        return <FaRegBuilding className="text-green-500" />;
      case "Completed":
        return <FaCheckCircle className="text-teal-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="bg-white p-4 w-full flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="font-semibold">Inspection Manager Dashboard</p>
        <div className="flex flex-wrap justify-center gap-y-2">
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
      <div className="grid md:grid-cols-7 gap-4 p-4">
        <div className="md:col-span-3 lg:col-span-1">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">0</span>
                <FaFileInvoiceDollar className="text-2xl text-blue-500" />
              </div>
              <div className="text-sm font-semibold">Open Orders</div>
            </div>
            <div className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">1</span>
                <FcHome className="text-2xl " />
              </div>
              <div className="text-sm font-semibold">Completed</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-3 p-4 bg-white shadow">
          <div className="">
            <Chart
              options={inspectionWorkOrder.options}
              series={inspectionWorkOrder.series}
              type="pie"
              height={200}
            />
          </div>
        </div>
        <div className="md:col-span-full lg:col-span-3 p-4 bg-white shadow">
          <div className="">
            <Chart
              options={inspectionJobType.options}
              series={inspectionJobType.series}
              type="donut"
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-11 p-4 gap-4">
        <div className="lg:col-span-3 md:col-span-6 bg-white p-4 rounded shadow">
          <Chart
            options={jobStatusChart.options}
            series={jobStatusChart.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="lg:col-span-3 md:col-span-5 grid grid-cols-2 gap-2">
          {jobStatusChart.options.xaxis.categories.map((item, i) => {
            return (
              <div
                key={item}
                className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {jobStatusChart.series[0].data[i]}
                  </span>
                  <span className="text-2xl">{getIcon(item)}</span>
                </div>
                <div className="text-sm font-semibold">{item}</div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-5 md:col-span-full bg-white p-4 shadow">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Utility Readings</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 text-wrap overflow-hidden w-full">
                <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer text-wrap">
                  <option
                    value="Movenpick Jeddah Al Nawras"
                    className="truncate w-full"
                  >
                    Movenpick Jeddah Al Nawras
                  </option>
                  <option
                    value="Atelier La View center"
                    className="truncate w-full"
                  >
                    Atelier La View center
                  </option>
                </select>
              </div>
              <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 text-wrap overflow-hidden w-full">
                <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer text-wrap">
                  <option
                    value="Movenpick Jeddah Al Nawras"
                    className="truncate w-full"
                  >
                    Movenpick Jeddah Al Nawras
                  </option>
                  <option
                    value="Atelier La View center"
                    className="truncate w-full"
                  >
                    Atelier La View center
                  </option>
                </select>
              </div>
              <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 text-wrap overflow-hidden w-full">
                <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer text-wrap">
                  <option
                    value="Movenpick Jeddah Al Nawras"
                    className="truncate w-full"
                  >
                    Movenpick Jeddah Al Nawras
                  </option>
                  <option
                    value="Atelier La View center"
                    className="truncate w-full"
                  >
                    Atelier La View center
                  </option>
                </select>
              </div>
            </div>
          </div>
          <Chart
            options={utilityReading.options}
            series={utilityReading.series}
            type="line"
            height={300}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-span-2 overflow-x-auto w-full space-y-4">
          <div className="bg-white p-4 shadow space-y-3 h-full">
            <p className="font-semibold text-lg">Completed jobs</p>
            <DataTable
              columns={[
                {
                  name: "Resource Name",
                  selector: (row) => row.resource,
                  sortable: true,
                },
                {
                  name: "Jobs",
                  selector: (row) => row.jobs,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Projected",
                  selector: (row) => row.projected,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Actual",
                  selector: (row) => row.actual,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Others",
                  selector: (row) => row.others,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Ontime %",
                  selector: (row) => row.ontime,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Delayed %",
                  selector: (row) => row.delayed,
                  sortable: true,
                  center: true,
                },
              ]}
              data={completedJobs}
              noDataComponent={<NoDataComponent />}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-white py-4">
            <Chart
              options={projectedVsOthersVsactualChart.options}
              series={projectedVsOthersVsactualChart.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-span-2 overflow-x-auto w-full space-y-4">
          <div className="bg-white p-4 shadow space-y-3 h-full">
            <p className="font-semibold text-lg">Resources Vs Jobs</p>
            <DataTable
              columns={[
                {
                  name: "Resource Name",
                  selector: (row) => row.resource,
                  sortable: true,
                },
                {
                  name: "Total Jobs",
                  selector: (row) => row.totalJobs,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Assigned",
                  selector: (row) => row.assigned,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Ongoing",
                  selector: (row) => row.ongoing,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Completed",
                  selector: (row) => row.completed,
                  sortable: true,
                  center: true,
                },
              ]}
              data={[
                {
                  id: 1,
                  resource: "Suriya",
                  totalJobs: 0,
                  assigned: 0,
                  ongoing: 0,
                  completed: 0,
                },
                {
                  id: 2,
                  resource: "Naveenraj Murugan",
                  totalJobs: 0,
                  assigned: 0,
                  ongoing: 0,
                  completed: 0,
                },
                {
                  id: 3,
                  resource: "Brian",
                  totalJobs: 0,
                  assigned: 0,
                  ongoing: 0,
                  completed: 0,
                },
              ]}
              noDataComponent={<NoDataComponent />}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </div>
        <div className="bg-white py-4">
          <Chart
            options={projectedVsOthersVsactualChart.options}
            series={projectedVsOthersVsactualChart.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-span-2 overflow-x-auto w-full space-y-4">
          <div className="bg-white p-4 shadow space-y-3 h-full">
            <p className="font-semibold text-lg">Kartik - Ongoing jobs (0)</p>
            <DataTable
              columns={[
                {
                  name: "Resource Name",
                  selector: (row) => row.resource,
                  sortable: true,
                },
                {
                  name: "Total Jobs",
                  selector: (row) => row.totalJobs,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Assigned",
                  selector: (row) => row.assigned,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Ongoing",
                  selector: (row) => row.ongoing,
                  sortable: true,
                  center: true,
                },
                {
                  name: "Completed",
                  selector: (row) => row.completed,
                  sortable: true,
                  center: true,
                },
              ]}
              data={[]}
              noDataComponent={<NoDataComponent />}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </div>

        <div className="bg-white py-4">
          <Chart
            options={projectedVsOthersVsactualChart.options}
            series={projectedVsOthersVsactualChart.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default InspectionManager;
