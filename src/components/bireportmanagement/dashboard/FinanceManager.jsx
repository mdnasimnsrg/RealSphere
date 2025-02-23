import React, { useState } from "react";
import { FiCalendar, FiUser } from "react-icons/fi";
import {
  FaFileInvoiceDollar,
  FaHandshake,
  FaMobileAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { MdOutlinePendingActions, MdOutlineCancel } from "react-icons/md";
import {
  AiOutlineFileDone,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BsCashCoin, BsArrowRepeat } from "react-icons/bs";
import { RiRefund2Line } from "react-icons/ri";
import Chart from "react-apexcharts";
import DataTable from "react-data-table-component";

const FinanceManager = () => {
  const [revenue] = useState({
    series: [
      {
        data: [0, 500000, 3500000, 1500000, 0, 400000],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: true,
        },
      },
      noData: {
        text: "No Data Found",
        align: "center",
        verticalAlign: "middle",
        style: {
          color: "#666",
          fontSize: "16px",
        },
      },

      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
        },
      },
      colors: [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33A8",
        "#FFD700",
        "#8A2BE2",
      ],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Services",
          "Settlement...",
          "Rental Inv...",
          "Sale Invoice...",
          "Amenities ...",
          "Manage & O...",
        ],
        labels: {
          formatter: (val) => {
            return new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(val);
          },
        },
      },
      title: {
        text: "Revenue by Invoice Type",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    },
  });
  const [invoiceAgeing] = useState({
    series: [
      {
        name: "Invoices",
        data: [2, 5, 17, 10, 35],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: true,
        },
        noData: {
          text: "No Data Found",
          align: "center",
          verticalAlign: "middle",
          style: {
            color: "#666",
            fontSize: "16px",
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "50%",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#FF5733"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },
      colors: ["#FF5733"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "> 30 Days",
          "30 < 60 Days",
          "60 < 90 Days",
          "90 < 120 Days",
          "< 120 Days",
        ],
      },
      yaxis: {
        title: {
          text: "Values",
        },
      },
      title: {
        text: "Invoice Ageing",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    },
  });
  const [forecastRevenue] = useState({
    series: [
      {
        name: "Revenue",
        data: [0.5, 0.8, 1.2, 1.0, 0.7, 0.6, 33, 0.5, 0.4, 0.3, 0.2, 0.1],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: true },
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: 5,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: ["#FFA500"],
          opacityFrom: 0.9,
          opacityTo: 0.3,
        },
      },
      colors: ["#F39C12"],
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
        ],
      },
      yaxis: {
        labels: {
          formatter: (value) => `${value}M`,
        },
      },
      title: {
        text: "Forecast Revenue for last 12 Months",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      tooltip: { enabled: true },
      noData: {
        text: "No Data Found",
        align: "center",
        verticalAlign: "middle",
        style: { color: "#808080", fontSize: "16px" },
      },
    },
  });
  const [collectionsData] = useState({
    series: [
      {
        name: "Collections",
        data: [0, 0, 0, 0, 5, 100, 0, 150, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: true },
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: 5,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: ["#4CAF50"],
          opacityFrom: 0.9,
          opacityTo: 0.3,
        },
      },
      colors: ["#66BB6A"],
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
        ],
      },
      yaxis: {
        labels: {
          formatter: (value) => `${value}k`,
        },
      },
      title: {
        text: "Collections for the last 12 Months",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      tooltip: { enabled: true },
      noData: {
        text: "No Data Found",
        align: "center",
        verticalAlign: "middle",
        style: { color: "#808080", fontSize: "16px" },
      },
    },
  });
  const [revenueByPricingComponent] = useState({
    series: [30, 15, 20, 30, 15],
    options: {
      chart: {
        type: "pie",
        toolbar: { show: true },
        height: 250,
        width: "100%",
      },
      dataLabels: { enabled: false },
      labels: ["primary", "refundable", "one time", "parking", "is quantity"],
      colors: ["#4CAF50", "#2196F3", "#FFC107", "purple", "orange"],
      plotOptions: {
        pie: {
          startAngle: -180,
          endAngle: 180,
          offsetY: 10,
        },
      },
      title: {
        text: "Collections for the last 12 Months",
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
        show: false,
      },
    },
  });

  const invoiceData = [
    {
      label: "Total Invoiced",
      value: "0",
      icon: <FaFileInvoiceDollar className="text-blue-500 text-xl" />,
    },
    {
      label: "Total Outstanding",
      value: 4105025.8,
      icon: <MdOutlinePendingActions className="text-yellow-500 text-xl" />,
    },
    {
      label: "Total Overdues",
      value: 0,
      icon: <AiOutlineFileDone className="text-red-500 text-xl" />,
    },
    {
      label: "Total Collected",
      value: 0,
      icon: <BsCashCoin className="text-green-500 text-xl" />,
    },
    {
      label: "Projected Revenue",
      value: 0,
      icon: (
        <AiOutlineFundProjectionScreen className="text-purple-500 text-xl" />
      ),
    },
    {
      label: "Total Cancelled",
      value: 0,
      icon: <MdOutlineCancel className="text-gray-500 text-xl" />,
    },
    {
      label: "Total Taxes",
      value: 0,
      icon: <BsArrowRepeat className="text-indigo-500 text-xl" />,
    },
    {
      label: "Total Refundable",
      value: 0,
      icon: <RiRefund2Line className="text-teal-500 text-xl" />,
    },
  ];
  const userStatistics = [
    {
      label: "Accounts",
      value: 88,
      icon: <FaUserTie className="text-blue-500 text-xl" />,
    },
    {
      label: "Customers",
      value: 80,
      icon: <FaUsers className="text-green-500 text-xl" />,
    },
    {
      label: "Brokers",
      value: 0,
      icon: <FaHandshake className="text-yellow-500 text-xl" />,
    },
    {
      label: "App Users",
      value: 117,
      icon: <FaMobileAlt className="text-purple-500 text-xl" />,
    },
  ];
  const [chartData] = useState({
    series: [
      {
        name: "Invoiced",
        data: invoiceAgeing.series[0].data,
      },
      {
        name: "Collections",
        data: collectionsData.series[0].data,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
      },
      colors: ["#1E88E5", "#4CAF50"], // ब्लू और ग्रीन कलर
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0.3,
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 2 },
      xaxis: {
        categories: ["Jan", "Mar", "Dec"], // X-axis labels
      },
      yaxis: {
        labels: {
          formatter: (value) => `${value} k`,
        },
      },
      title: {
        text: "Invoiced Vs Collections for the Current Year",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      tooltip: { enabled: true },
      noData: {
        text: "No Data Found",
        align: "center",
        verticalAlign: "middle",
        style: { color: "#808080", fontSize: "16px" },
      },
    },
  });
  const topRevenueAccounts = [
    { id: 1, name: "Seetharamam", revenue: 939100 },
    { id: 2, name: "Athul", revenue: 100000 },
    { id: 3, name: "Danny", revenue: 100000 },
    { id: 4, name: "Caleb", revenue: 50800 },
    { id: 5, name: "Amir", revenue: 10000 },
    { id: 6, name: "Ellen", revenue: 5200 },
    { id: 7, name: "bahubali", revenue: 600 },
    { id: 8, name: "Mohammed", revenue: 500 },
    { id: 9, name: "Arun JK", revenue: 400 },
    { id: 10, name: "Alpha", revenue: 400 },
  ];

  return (
    <div className="">
      <div className="bg-white p-4 w-full flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="font-semibold">Accounts Receivable Dashboard</p>
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
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {invoiceData.map((item) => {
          return (
            <div
              key={item.label}
              className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  {item.value > 0 ? `₹${item.value}` : "0"}
                </span>
                {item.icon}
              </div>
              <div className="text-sm font-semibold">{item.label}</div>
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-7 gap-4 p-4">
        <div className="md:col-span-3 lg:col-span-1">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {userStatistics.map((item) => {
              return (
                <div
                  key={item.label}
                  className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{item.value}</span>
                    {item.icon}
                  </div>
                  <div className="text-sm font-semibold">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-3 p-4 bg-white shadow">
          <div>
            <p className="text-lg font-semibold">Overdue Invoices</p>
          </div>
          <div className="py-10 flex justify-center items-center text-sm font-bold text-gray-800">
            No Data Found
          </div>
        </div>
        <div className="md:col-span-full lg:col-span-3 p-4 bg-white shadow">
          <Chart
            options={revenue.options}
            series={revenue.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
      <div className="p-4 grid lg:grid-cols-2 gap-4">
        <div className="bg-white shadow p-3">
          <Chart
            options={invoiceAgeing.options}
            series={invoiceAgeing.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="bg-white shadow p-3">
          <Chart
            options={forecastRevenue.options}
            series={forecastRevenue.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="bg-white shadow p-3">
          <Chart
            options={collectionsData.options}
            series={collectionsData.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="bg-white shadow p-3">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={350}
          />
        </div>
        <div className="bg-white shadow p-3">
          <div>
            <p className="text-lg font-semibold">Top 10 Revenue Accounts</p>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            <DataTable
              columns={[
                {
                  name: "Account Name",
                  selector: (row) => row.name,
                  sortable: true,
                },
                {
                  name: "Total Revenue",
                  selector: (row) => `₹${row.revenue.toLocaleString()}`,
                  sortable: true,
                },
              ]}
              data={topRevenueAccounts}
              customStyles={{
                headCells: {
                  style: { backgroundColor: "#f2f4f7", fontWeight: "bold" },
                },
              }}
            />
          </div>
        </div>
        <div className="bg-white shadow p-3">
          <Chart
            options={revenueByPricingComponent.options}
            series={revenueByPricingComponent.series}
            type="pie"
            height={300}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceManager;
