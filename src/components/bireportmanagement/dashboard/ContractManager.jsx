import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import {
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaEye,
  FaHandshake,
  FaUsers,
  FaFileSignature,
  FaUserTie,
} from "react-icons/fa";
import CustomChart from "../../ui/CustomChart";
import Chart from "react-apexcharts";

const ContractManager = () => {
  const [activeAgreementChart] = useState({
    series: [70, 15, 15],
    labels: ["Sales Agreement", "Manage Agreements", "Lease Agreements"],
    title: "Active Agreements",
    tooltipEnabled: true,
    colors: ["green", "blue", "orange"],
    legendShow: true,
    legendPosition: "bottom",
  });
  const [revenueChart] = useState({
    series: [{ name: "Revenue", data: [0, 0, 0, 0, 0, 0, 320, 0, 0, 0, 0, 0] }],
    title: "Agreement Revenue For The Next 12 Months",
    tooltipEnabled: true,
    colors: ["#008FFB"],
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
  });
  const [forecastRevenueChart] = useState({
    series: [{ name: "Revenue", data: [0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0] }],
    title: "Forecast Revenue for next 12 months",
    categories: [
      "Mar 2025",
      "Apr 2025",
      "May 2025",
      "Jun 2025",
      "Jul 2025",
      "Aug 2025",
      "Sep 2025",
      "Oct 2025",
      "Nov 2025",
      "Dec 2025",
      "Jan 2025",
      "Feb 2025",
    ],
  });
  const [contractTypeData, setContractTypeData] = useState({
    series: [
      { name: "Vendor", data: [3] },
      { name: "Land Lord", data: [7] },
      { name: "Service", data: [1] },
    ],

    labels: ["Vendor", "Land Lord", "Service"],
    colors: ["#ED8A84", "#F2C14E", "#90C869"],
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
          horizontal: true,
          // distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        title: {
          text: "Values",
        },
      },
      yaxis: {
        categories: ["Vendor", "Land Lord", "Service"],
        title: {
          text: "Contracts Types",
        },
      },
      colors: ["#ED8A84", "#F2C14E", "#90C869"],
      legend: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: (value) => value,
        },
      },
    },
  });
  const data = {
    summaryCards: [
      {
        value: 4,
        title: "Draft Agreements",
        icon: <FaFileAlt color="#4A90E2" />,
      },
      {
        value: 8,
        title: "Renewed Agreements",
        icon: <FaCheckCircle color="#28A745" />,
      },
      {
        value: 1,
        title: "Declined Agreements",
        icon: <FaTimesCircle color="#DC3545" />,
      },
      {
        value: 8,
        title: "Terminated Agreements",
        icon: <FaExclamationCircle color="#FF9800" />,
      },
      {
        value: 35,
        title: "Expired Agreements",
        icon: <FaEye color="#6C757D" />,
      },
      {
        value: 36,
        title: "Live Agreements",
        icon: <FaCheckCircle color="#007BFF" />,
      },
    ],
    contract: [
      {
        value: 1,
        title: "Draft Contracts",
        icon: <FaFileAlt color="#4A90E2" />,
      },
      {
        value: 6,
        title: "Landlords",
        icon: <FaUserTie color="#28A745" />,
      },
      {
        value: 10,
        title: "Published Contracts",
        icon: <FaFileSignature color="#FF9800" />,
      },
      {
        value: 5,
        title: "Customers",
        icon: <FaUsers color="#007BFF" />,
      },
      {
        value: 1,
        title: "Expired Contracts",
        icon: <FaEye color="#6C757D" />,
      },
      {
        value: 1,
        title: "Vendors",
        icon: <FaHandshake color="#DC3545" />,
      },
    ],
  };

  return (
    <div>
      <div className="bg-white flex items-center flex-wrap gap-2 md:justify-between p-4 justify-center">
        <div className="text-xl font-semibold">Contract Manager Dashboard</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 p-4 gap-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2">
          {data.summaryCards.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.value}</span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="text-sm font-semibold">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 shadow h-96 lg:h-auto">
          <CustomChart
            title={activeAgreementChart.title}
            data={activeAgreementChart.series}
            labels={activeAgreementChart.labels}
            tooltip={activeAgreementChart.tooltipEnabled}
            legend={activeAgreementChart.legendShow}
            legendPosition={activeAgreementChart.legendPosition}
            chartType="pie"
            height={300}
            width="100%"
            colors={activeAgreementChart.colors}
          />
        </div>
        <div className="lg:col-span-2 bg-white shadow p-4 w-full">
          <CustomChart
            title={revenueChart.title}
            data={revenueChart.series}
            labels={revenueChart.categories}
            tooltip={revenueChart.tooltipEnabled}
            chartType="line"
            height={350}
            width="100%"
            colors={revenueChart.colors}
            xaxisLabels={revenueChart.categories}
            yaxisFormatter={(value) => value + " Mn"}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 p-4 gap-4">
        <div className="lg:col-span-2 bg-white shadow p-4 w-full">
          <CustomChart
            title="Forcasted Revenue for next 12 Months"
            data={forecastRevenueChart.series}
            categories={forecastRevenueChart.categories}
            chartType="bar"
            height={350}
            yaxisFormatter={(value) => value + "M"}
            tooltipFormatter={(value) => value + "M"}
            colors={["#e74c3c"]}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2">
          {data.contract.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.value}</span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="text-sm font-semibold">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 shadow w-full h-96 lg:h-auto">
          <Chart
            options={contractTypeData.options}
            series={contractTypeData.series}
            type="bar"
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContractManager;
